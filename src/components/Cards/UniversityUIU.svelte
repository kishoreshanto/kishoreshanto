<script lang="ts">
import Card from "../Card.svelte";

export let date:string;
</script>

<Card date={date} on:showmodal>
    <div class="space-y-4">
        <!-- Header with degree title -->
        <div class="border-b border-zinc-200 pb-3 dark:border-zinc-700">
            <h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
                Bachelor of Computer Science and Engineering
            </h1>
            <p class="text-md font-medium text-sky-600 dark:text-sky-400 mt-1">
                Major in Data Science • With Thesis
            </p>
        </div>

        <!-- University information -->
        <div class="space-y-3">
            <div>
                <h2 class="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    United International University
                </h2>
                <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Madani Avenue, Badda, Dhaka 1212, Bangladesh
                </p>
            </div>

            <!-- CGPA highlight -->
            <div class="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                <div>
                    <p class="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Aggregate Percentage Result
                    </p>
                    <p class="text-2xl font-bold text-green-700 dark:text-green-400">
                        90.1
                        <span class="text-sm font-normal text-zinc-600 dark:text-zinc-400">/ 100%</span>
                    </p>
                </div>
            </div>

            <!-- Achievement badge -->
            <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Graduated with Honors
            </div>
        </div>
    </div>
</Card>