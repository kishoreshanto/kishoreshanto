<script lang="ts">
import Card from "../Card.svelte";

interface Props {
    date: string;
    onshowmodal?: () => void;
}

let { date, onshowmodal }: Props = $props();

</script>

{#snippet cardContent()}
    <div class="space-y-4">
        <!-- Technical Report Type Badge -->
        <div class="flex items-center justify-between">
            <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd"/>
                </svg>
                Technical Research Report
            </div>
            <div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                University Research Project
            </div>
        </div>

        <!-- Title -->
        <div class="space-y-2">
            <h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
                A Detailed Energy Footprint Evaluation of Python and R in Computationally Intensive Statistical and Machine Learning Tasks
            </h1>
        </div>

        <!-- Research Summary Section -->
        <div class="bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800/50 dark:via-gray-800/50 dark:to-slate-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="flex items-start space-x-3 border-l-4 border-sky-300 pl-4 rounded-sm">
                
                <div>
                    <p class="font-semibold text-gray-900 dark:text-white mb-2">Overview</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed ">
                       Researched a novel approach to effectively measure the energy consumption and energy footprint for statistical and machine learning tasks of major operating systems using Python and R language. 
                    </p>
                </div>
            </div>
        </div>
        <!-- Research Tags -->
        <div class="space-y-2">
            <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Research Focus Areas</p>
            <div class="flex flex-wrap gap-2">
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
						ARM processor
					</span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
						Energy Efficiency
					</span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
						Machine Learning
					</span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
						x64 Platform
					</span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        Power Consumption
                                                    </span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        Python
                </span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                        R Language
                </span>
                <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                        Statistical Analysis
                </span>
            </div>
        </div>

        <!-- Report Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div class="space-y-2 flex items-center ">
                <div>
                    <span class="font-medium text-zinc-700 dark:text-zinc-300">Timeline:</span>
                    <span class="text-zinc-600 dark:text-zinc-400">July 2024 - November 2024</span>
                </div>
            </div>
            <div class="flex items-end justify-end">
                <a
                        href="https://drive.google.com/file/d/11BRiFjnimSVstFzQMg5jB628mnbzr7rv/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors duration-200"
                        onclick={(e) => e.stopPropagation()}
                >
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
                    </svg>
                    View Technical Report

                </a>
            </div>
        </div>
    </div>
{/snippet}

<Card {date} {onshowmodal}>
    {@render cardContent()}
</Card>