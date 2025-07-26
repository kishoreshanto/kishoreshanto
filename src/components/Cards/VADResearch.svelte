<script lang="ts">
import Card from "../Card.svelte";

export let date:string;
</script>

<Card date={date}>
    <div class="space-y-4">
        <!-- Journal Type Badge -->
        <div class="flex items-center justify-between">
            <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clip-rule="evenodd"/>
                </svg>
                Q1 Journal Publication
            </div>

            <div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                Elsevier • IF: 4.5 (Jul 2025)
            </div>
        </div>

        <!-- Title and Journal -->
        <div class="space-y-2">
            <h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
                Vision Transformer Embedded Video Anomaly Detection with Attention Driven Recurrence
            </h1>
            <div class="flex items-center space-x-2 text-md">
                <span class="font-medium text-sky-600 dark:text-sky-400">Array</span>
                <span class="text-zinc-400">•</span>
                <span class="text-zinc-600 dark:text-zinc-400">Elsevier</span>
            </div>
        </div>

        <!-- Summary Section -->
        <div class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 mt-1">
                    <svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div>
                    <p class="text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">Research Summary</p>
                    <p class="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                        Researched a real-time anomaly detection system using Vision Transformers and an attention-enhanced  network in long surveillance footage.
                    </p>
                </div>
            </div>
        </div>

        <!-- Q1 Journal Highlight -->
        <div class="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-3 border border-emerald-200 dark:border-emerald-800">
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                    <p class="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                        Q1 Quartile Journal
                    </p>
                    <p class="text-xs text-emerald-600 dark:text-emerald-400">
                        Top-tier academic publication
                    </p>
                </div>
            </div>
        </div>

        <!-- Publication Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div class="space-y-2">
                <div>
                    <span class="font-medium text-zinc-700 dark:text-zinc-300">DOI:</span>
                    <p class="text-zinc-600 dark:text-zinc-400 font-mono text-xs">
                        TDB
                    </p>
                </div>
                <div>
                    <span class="font-medium text-zinc-700 dark:text-zinc-300">Accepted:</span>
                    <span class="text-zinc-600 dark:text-zinc-400">July 2025</span>
                </div>
            </div>
            <div class="flex items-end justify-end">
                <div
                        class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:bg-zinc-900/50 transition-colors duration-200"
                >
                    <svg class="w-3 h-3 mr-1" fill="gray" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>
                    </svg>
                    To be Published
                </div>
            </div>
        </div>
    </div>
</Card>