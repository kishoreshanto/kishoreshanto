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
                A Deep Learning Approach to Assess Password Strength, Compromise Likelihood, and Time-to-Crack Estimation
            </h1>
        </div>

        <!-- Research Summary Section -->
        <div class="research-overview">
            <div class="flex items-start space-x-3 border-l-4 border-sky-300 pl-4 rounded-sm">
                
                <div>
                    <p class="font-semibold text-gray-900 dark:text-white mb-2">Overview</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed ">
                        Researched a GPT-2 based deep learning model for password strength estimation via sequence analysis and perplexity scoring on real-world leaked datasets
                    </p>
                </div>
            </div>
        </div>

        <!-- Research Tags -->
        <div class="space-y-2">
            <p class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Research Focus Areas / Keywords</p>
            <div class="flex flex-wrap gap-2">
					<span class="research-tag">
						Generative Pretrained Transformer
					</span>
                <span class="research-tag">
						Computer Security
					</span>
            </div>
        </div>


        <!-- Report Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div class="space-y-2 flex items-center ">
                <div>
                    <span class="font-medium text-zinc-700 dark:text-zinc-300">Duration:</span>
                    <span class="text-zinc-600 dark:text-zinc-400">3 months</span>
                </div>
            </div>
            <div class="flex items-end justify-end">
                <a
                        href="https://drive.google.com/file/d/1T_7jeJqenaocxogEwshs68CtaKtrvwrT/view?usp=sharing"
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