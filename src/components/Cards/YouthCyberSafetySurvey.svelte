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
        <!-- Social Survey Type Badge -->
        <div class="flex items-center justify-between">
            <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                Social Survey
            </div>
            <div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                University Study
            </div>
        </div>

        <!-- Title -->
        <div class="space-y-2">
            <h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
                University Social Survey on Youth Cyber Safety
            </h1>
        </div>

        <!-- Research Summary Section -->
        <div class="research-overview">
            <div class="flex items-start space-x-3 border-l-4 border-sky-300 pl-4 rounded-sm">
                <div>
                    <p class="font-semibold text-gray-900 dark:text-white mb-2">Overview</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Conducted comprehensive interviews to gather qualitative data on personal experiences, performed data preprocessing and statistical analysis to identify key trends, and contributed to developing solutions aimed at enhancing the well-being of young people in digital environments.
                    </p>
                </div>
            </div>
        </div>

                <div class="space-y-2">
            <p class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Role</p>
            <div class="flex flex-wrap gap-2">
                <span class="research-tag">
                    Interviewer
                </span>
                <span class="research-tag">
                    Data Manager
                </span>
                <span class="research-tag">
                    Data Analyst (Chi-Square, Paired T-Test)
                </span>
            </div>
        </div>

        <!-- Key Contributions Section -->
        <div class="space-y-3">
            <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">Key Research Contributions:</p>
            <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div class="flex items-start space-x-2">
                    <svg class="w-3 h-3 mt-1 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>Investigated cybersecurity measures, content moderation, and educational resources effectiveness in protecting youth (ages 16-30) from online risks</span>
                </div>
                <div class="flex items-start space-x-2">
                    <svg class="w-3 h-3 mt-1 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>Conducted mixed-methods study with anonymous online surveys and semi-structured interviews (60 participants each interviewer)</span>
                </div>
                <div class="flex items-start space-x-2">
                    <svg class="w-3 h-3 mt-1 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>Performed statistical analysis including Chi-Square and paired t-tests, plus thematic analysis for qualitative insights</span>
                </div>
                <div class="flex items-start space-x-2">
                    <svg class="w-3 h-3 mt-1 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>Identified key platforms (Facebook, Instagram) associated with cyberbullying and developed multi-faceted prevention strategies</span>
                </div>
            </div>
        </div>

        <!-- Research Status Highlight
        <div class="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl p-3 border border-emerald-200 dark:border-emerald-800">
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                    <p class="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                        Completed Research
                    </p>
                    <p class="text-xs text-emerald-600 dark:text-emerald-400">
                        University-sponsored social survey
                    </p>
                </div>
            </div>
        </div> -->

        <!-- Report Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div class="space-y-2 flex items-center">
                <div>
                    <span class="font-medium text-zinc-700 dark:text-zinc-300">Timeline:</span>
                    <span class="text-zinc-600 dark:text-zinc-400">2024</span>
                </div>
            </div>
            <div class="flex items-end justify-end">
                <div class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:bg-zinc-900/50 transition-colors duration-200">
                    <svg class="w-3 h-3 mr-1" fill="gray" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>
                    </svg>
                    Report Confidential
                </div>
            </div>
        </div>
    </div>
{/snippet}

<Card {date} {onshowmodal}>
    {@render cardContent()}
</Card>
