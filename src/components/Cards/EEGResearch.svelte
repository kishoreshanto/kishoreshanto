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
                Independent Study
            </div>
        </div>

        <!-- Title -->
        <div class="space-y-2">
            <h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
                Classification of Upper Limb Motor Movements Using EEG Signals
            </h1>
        </div>

        <!-- Research Summary Section -->
        <div class="research-overview">
            <div class="flex items-start space-x-3 border-l-4 border-sky-300 pl-4 rounded-sm">
                <div>
                    <p class="font-semibold text-gray-900 dark:text-white mb-2">Overview</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed ">
                        Currently researching a deep learning approach to classify upper limb motor movement using electroencephalogram signal data for brain-computer interface applications.
                    </p>
                </div>
            </div>
        </div>

        <!-- Research Tags -->
        <div class="space-y-2">
            <p class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Research Focus Areas / Keywords</p>
            <div class="flex flex-wrap gap-2">
					<span class="research-tag">
						Brain-Computer Interface
					</span>
                <span class="research-tag">
						Neural Signal Processing
					</span>
                <span class="research-tag">
						Deep Learning Networks
					</span>
                <span class="research-tag">
						Motor Imagery Classification
					</span>
            </div>
        </div>

        <!-- Research Status Highlight -->
        <div class="flex items-center justify-between bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-3 border border-cyan-200 dark:border-cyan-800">
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                </svg>
                <div>
                    <p class="text-sm font-semibold text-cyan-800 dark:text-cyan-200">
                        Ongoing Research
                    </p>
                    <p class="text-xs text-cyan-600 dark:text-cyan-400">
                        Self-initiated independent study
                    </p>
                </div>
            </div>
        </div>

        <!-- Report Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div class="space-y-2 flex items-center ">
                <div>
                    <span class="font-medium text-zinc-700 dark:text-zinc-300">Started:</span>
                    <span class="text-zinc-600 dark:text-zinc-400">February 2025</span>
                </div>
            </div>
            <div class="flex items-end justify-end">
                <a
                        href="https://drive.google.com/file/d/1EoQmhpDo8FAeqePLlldQuuxAGK1tdUQR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-xl bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors duration-200"
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