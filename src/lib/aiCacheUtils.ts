/**
 * AI Cache Management Utilities
 *
 * This module provides utilities for managing and monitoring the AI response cache.
 * It can be used for debugging, cache inspection, and performance monitoring.
 */

import { getCacheStats, clearCache } from './aiService';

/**
 * Display cache statistics in the console
 */
export function logCacheStats(): void {
	const stats = getCacheStats();
	console.group('🤖 AI Response Cache Statistics');
	console.log('📊 Total entries:', stats.total);
	console.log('✅ Active entries:', stats.active);
	console.log('⏰ Expired entries:', stats.expired);
	console.log('⚙️ Cache config:', stats.config);
	console.log('💾 Storage:', stats.config.persistToStorage ? 'Enabled' : 'Disabled');
	console.log('⏳ TTL:', `${stats.config.ttl / 1000 / 60} minutes`);
	console.log('📏 Max size:', stats.config.maxSize);
	console.groupEnd();
}

/**
 * Clear the AI response cache with confirmation
 */
export function clearAICache(): void {
	clearCache();
	console.log('🗑️ AI response cache has been cleared');
}

/**
 * Cache performance monitoring class for better encapsulation
 */
class CachePerformanceMonitor {
	private cacheHits = 0;
	private cacheMisses = 0;

	incrementCacheHit(): void {
		this.cacheHits++;
	}

	incrementCacheMiss(): void {
		this.cacheMisses++;
	}

	getCacheHitRatio(): { hits: number; misses: number; ratio: number } {
		const total = this.cacheHits + this.cacheMisses;
		const ratio = total > 0 ? (this.cacheHits / total) * 100 : 0;

		return {
			hits: this.cacheHits,
			misses: this.cacheMisses,
			ratio: Math.round(ratio * 100) / 100
		};
	}

	logCachePerformance(): void {
		const perf = this.getCacheHitRatio();
		console.group('🚀 AI Cache Performance');
		console.log('✅ Cache hits:', perf.hits);
		console.log('❌ Cache misses:', perf.misses);
		console.log('📈 Hit ratio:', `${perf.ratio}%`);
		console.groupEnd();
	}

	resetPerformanceCounters(): void {
		this.cacheHits = 0;
		this.cacheMisses = 0;
		console.log('🔄 Cache performance counters reset');
	}
}

// Create a singleton instance for the performance monitor
const performanceMonitor = new CachePerformanceMonitor();

/**
 * Get cache hit ratio for performance monitoring
 */
export function incrementCacheHit(): void {
	performanceMonitor.incrementCacheHit();
}

export function incrementCacheMiss(): void {
	performanceMonitor.incrementCacheMiss();
}

export function getCacheHitRatio(): { hits: number; misses: number; ratio: number } {
	return performanceMonitor.getCacheHitRatio();
}

/**
 * Display cache performance statistics
 */
export function logCachePerformance(): void {
	performanceMonitor.logCachePerformance();
}

/**
 * Reset performance counters
 */
export function resetPerformanceCounters(): void {
	performanceMonitor.resetPerformanceCounters();
}

// Cache utilities for development debugging
// These functions are exported and can be imported where needed
// instead of polluting the global namespace
