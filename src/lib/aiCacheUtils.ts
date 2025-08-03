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
 * Get cache hit ratio for performance monitoring
 */
let cacheHits = 0;
let cacheMisses = 0;

export function incrementCacheHit(): void {
  cacheHits++;
}

export function incrementCacheMiss(): void {
  cacheMisses++;
}

export function getCacheHitRatio(): { hits: number; misses: number; ratio: number } {
  const total = cacheHits + cacheMisses;
  const ratio = total > 0 ? (cacheHits / total) * 100 : 0;
  
  return {
    hits: cacheHits,
    misses: cacheMisses,
    ratio: Math.round(ratio * 100) / 100
  };
}

/**
 * Display cache performance statistics
 */
export function logCachePerformance(): void {
  const perf = getCacheHitRatio();
  console.group('🚀 AI Cache Performance');
  console.log('✅ Cache hits:', perf.hits);
  console.log('❌ Cache misses:', perf.misses);
  console.log('📈 Hit ratio:', `${perf.ratio}%`);
  console.groupEnd();
}

/**
 * Reset performance counters
 */
export function resetPerformanceCounters(): void {
  cacheHits = 0;
  cacheMisses = 0;
  console.log('🔄 Cache performance counters reset');
}

// Make cache utilities available globally in development

declare global {
  interface Window {
    aiCacheUtils: {
      logStats: typeof logCacheStats;
      clearCache: typeof clearAICache;
      logPerformance: typeof logCachePerformance;
      resetCounters: typeof resetPerformanceCounters;
    };
  }
}

if (typeof window !== 'undefined' && import.meta.env.DEV) {
  window.aiCacheUtils = {
    logStats: logCacheStats,
    clearCache: clearAICache,
    logPerformance: logCachePerformance,
    resetCounters: resetPerformanceCounters
  };
  
  console.log('🛠️ AI Cache utilities available as window.aiCacheUtils');
}
