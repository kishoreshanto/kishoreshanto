// AI Service for generating responses about Kishore Shanto
//
// This service integrates with Hugging Face's router API to provide AI-powered responses
// about Kishore Shanto's background, research, and expertise. It includes fallback
// responses using a local knowledge base for reliability.
//
// Features:
// - Request caching to avoid duplicate API calls
// - In-memory cache with configurable TTL
// - Optional localStorage persistence for cross-session caching
//
// Environment Requirements:
// - VITE_HUGGINGFACE_INFERENCE_API_KEY: Your Hugging Face API token

import systemPromptMd from './system-prompt.md?raw';
import dataConfig from './data_en.json';
import { generateFallbackResponse } from './aiFallback'; // Fallback response generator

// Import cache performance tracking (only in development)
import {
	incrementCacheHit as devIncrementCacheHit,
	incrementCacheMiss as devIncrementCacheMiss
} from './aiCacheUtils';
let incrementCacheHit: (() => void) | undefined;
let incrementCacheMiss: (() => void) | undefined;

if (import.meta.env.DEV) {
	incrementCacheHit = devIncrementCacheHit;
	incrementCacheMiss = devIncrementCacheMiss;
}

// Interface for Hugging Face API response
interface HuggingFaceResponse {
	id: string;
	object: string;
	created: number;
	model: string;
	choices: Array<{
		index: number;
		message: {
			role: string;
			content: string;
		};
		logprobs: unknown;
		finish_reason: string;
	}>;
	usage: {
		queue_time: number;
		prompt_tokens: number;
		prompt_time: number;
		completion_tokens: number;
		completion_time: number;
		total_tokens: number;
		total_time: number;
	};
}

// Cache configuration
interface CacheEntry {
	response: string;
	timestamp: number;
	expiresAt: number;
}

interface CacheConfig {
	ttl: number; // Time to live in milliseconds
	maxSize: number; // Maximum number of cached entries
	persistToStorage: boolean; // Whether to persist cache to localStorage
}

// Default cache configuration
const DEFAULT_CACHE_CONFIG: CacheConfig = {
	ttl: 30 * 60 * 1000, // 30 minutes
	maxSize: 50, // Maximum 50 cached responses
	persistToStorage: true // Enable localStorage persistence
};

// In-memory cache
const responseCache = new Map<string, CacheEntry>();
const CACHE_STORAGE_KEY = 'ai_response_cache';

/**
 * Generate a cache key from the question
 */
function getCacheKey(question: string): string {
	// Normalize the question for consistent caching
	return question.toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Load cache from localStorage if persistence is enabled
 */
function loadCacheFromStorage(): void {
	if (!DEFAULT_CACHE_CONFIG.persistToStorage || typeof window === 'undefined') {
		return;
	}

	try {
		const stored = localStorage.getItem(CACHE_STORAGE_KEY);
		if (stored) {
			const parsedCache = JSON.parse(stored);
			const now = Date.now();

			// Filter out expired entries while loading
			Object.entries(parsedCache).forEach(([key, entry]) => {
				const cacheEntry = entry as CacheEntry;
				if (cacheEntry.expiresAt > now) {
					responseCache.set(key, cacheEntry);
				}
			});
		}
	} catch (error) {
		console.warn('Failed to load AI response cache from localStorage:', error);
	}
}

/**
 * Save cache to localStorage if persistence is enabled
 */
function saveCacheToStorage(): void {
	if (!DEFAULT_CACHE_CONFIG.persistToStorage || typeof window === 'undefined') {
		return;
	}

	try {
		const cacheObject = Object.fromEntries(responseCache);
		localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(cacheObject));
	} catch (error) {
		console.warn('Failed to save AI response cache to localStorage:', error);
	}
}

/**
 * Get cached response if available and not expired
 */
function getCachedResponse(question: string): string | null {
	const key = getCacheKey(question);
	const cached = responseCache.get(key);

	if (cached && cached.expiresAt > Date.now()) {
		console.log(`🚀 AI Cache hit for question: ${question.substring(0, 50)}...`);
		incrementCacheHit?.();
		return cached.response;
	}

	// Remove expired entry
	if (cached) {
		responseCache.delete(key);
	}

	incrementCacheMiss?.();
	return null;
}

/**
 * Cache a response for the given question
 */
function cacheResponse(question: string, response: string): void {
	const key = getCacheKey(question);
	const now = Date.now();

	// Check cache size limit
	if (responseCache.size >= DEFAULT_CACHE_CONFIG.maxSize) {
		// Remove oldest entries (simple LRU approximation)
		const oldestKey = responseCache.keys().next().value;
		if (oldestKey) {
			responseCache.delete(oldestKey);
		}
	}

	const cacheEntry: CacheEntry = {
		response,
		timestamp: now,
		expiresAt: now + DEFAULT_CACHE_CONFIG.ttl
	};

	responseCache.set(key, cacheEntry);

	// Persist to storage if enabled
	saveCacheToStorage();

	console.log(`💾 AI Response cached for question: ${question.substring(0, 50)}...`);
}

/**
 * Clear expired entries from cache
 */
function cleanupExpiredCache(): void {
	const now = Date.now();
	let removedCount = 0;

	for (const [key, entry] of responseCache.entries()) {
		if (entry.expiresAt <= now) {
			responseCache.delete(key);
			removedCount++;
		}
	}

	if (removedCount > 0) {
		console.log(`🧹 Cleaned up ${removedCount} expired AI cache entries`);
		saveCacheToStorage();
	}
}

/**
 * Get cache statistics for debugging
 */
export function getCacheStats() {
	const now = Date.now();
	const total = responseCache.size;
	const expired = Array.from(responseCache.values()).filter(
		(entry) => entry.expiresAt <= now
	).length;

	return {
		total,
		active: total - expired,
		expired,
		config: DEFAULT_CACHE_CONFIG
	};
}

/**
 * Clear all cached responses
 */
export function clearCache(): void {
	responseCache.clear();
	if (typeof window !== 'undefined') {
		localStorage.removeItem(CACHE_STORAGE_KEY);
	}
	console.log('🗑️ AI response cache cleared');
}

// Initialize cache from storage on module load
loadCacheFromStorage();

// Set up periodic cleanup (every 5 minutes)
if (typeof window !== 'undefined') {
	setInterval(cleanupExpiredCache, 5 * 60 * 1000);
}

/**
 * Query Hugging Face API using the chat completions endpoint
 */
async function queryHuggingFace(
	messages: Array<{ role: string; content: string }>
): Promise<HuggingFaceResponse> {
	const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_INFERENCE_API_KEY;

	if (!HF_TOKEN) {
		throw new Error('Hugging Face API token not found in environment variables');
	}

	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

	try {
		const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
			headers: {
				Authorization: `Bearer ${HF_TOKEN}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				messages,
				model: dataConfig.AI_model,
				stream: false,
				max_tokens: 300,
				temperature: 0.7
			}),
			signal: controller.signal
		});

		clearTimeout(timeoutId);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		clearTimeout(timeoutId);
		if (error instanceof Error && error.name === 'AbortError') {
			throw new Error('Request timeout - please try again');
		}
		throw error;
	}
}

/**
 * Generate an AI response based on the user's question using Hugging Face API with caching
 */
export async function generateAIResponse(question: string): Promise<string> {
	// Check if AI is enabled in the configuration
	if (!dataConfig.AI) {
		console.log('AI is disabled in configuration, using fallback response');
		return generateFallbackResponse(question);
	}

	// Check cache first
	const cachedResponse = getCachedResponse(question);
	if (cachedResponse) {
		return cachedResponse;
	}

	try {
		// Use the imported system prompt from markdown file
		const systemPrompt = systemPromptMd;

		const messages = [
			{ role: 'system', content: systemPrompt },
			{ role: 'user', content: question }
		];

		console.log(`🌐 Making AI API request for: ${question.substring(0, 50)}...`);
		const response = await queryHuggingFace(messages);

		if (response.choices && response.choices[0] && response.choices[0].message) {
			const aiResponse = response.choices[0].message.content;

			// Cache the response
			cacheResponse(question, aiResponse);

			return aiResponse;
		} else {
			throw new Error('Invalid response format from Hugging Face API');
		}
	} catch (error) {
		console.error('Error generating AI response:', error);

		// Fallback to local knowledge base if API fails
		const fallbackResponse = generateFallbackResponse(question);

		// Cache fallback responses too (with shorter TTL)
		cacheResponse(question, fallbackResponse);

		return fallbackResponse;
	}
}
