<script lang="ts">
import Card from "../Card.svelte";

interface Props {
    date: string;
    onshowmodal?: () => void;
}

let { date, onshowmodal }: Props = $props();
</script>

{#snippet cardContent()}
    <!-- Modern Card Layout with Left Accent Bar -->
    <div class="relative">
        <!-- Blue accent bar on the left -->
        <div class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 rounded-l-lg"></div>
        
        <!-- Main content with left padding for accent bar -->
        <div class="pl-6 space-y-6">
            <!-- Header Section - Horizontal Layout -->
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <div class="flex items-center space-x-3 mb-2">
                        <!-- University/Lab Icon -->
                        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-xl font-bold text-sky-800 dark:text-white leading-tight">
                                Laboratory Assistant
                            </h1>
                            <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                University Position • Academic Support
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Duration Badge - Top Right -->
                <div class="flex flex-col items-end">
                    <div class="text-xs text-gray-500 dark:text-gray-400 font-mono mb-1">Duration: 10 months</div>
                </div>
            </div>

            <!-- Project Summary - Full Width Card -->
            <div class="bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800/50 dark:via-gray-800/50 dark:to-slate-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div class="flex items-start space-x-4">
                    <div class="flex-1">
                        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Overview</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                            Provided comprehensive academic and technical support to instructors and students in university laboratory settings, troubleshooting equipment issues, facilitating student assessments, and ensuring smooth laboratory operations across multiple academic programs.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Two Column Layout for Responsibilities & Skills -->
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Key Responsibilities Column -->
                <div class="space-y-4">
                    <h3 class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2">
                        Key Responsibilities
                    </h3>
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                            <div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span class="text-xs text-blue-800 dark:text-blue-300 font-medium">
                                Laboratory Equipment Management
                            </span>
                        </div>
                        <div class="flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                            <div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span class="text-xs text-green-800 dark:text-green-300 font-medium">
                                Student Assessment Support
                            </span>
                        </div>
                        <div class="flex items-center space-x-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                            <div class="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                            <span class="text-xs text-purple-800 dark:text-purple-300 font-medium">
                                Technical Troubleshooting
                            </span>
                        </div>
                        <div class="flex items-center space-x-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                            <div class="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <span class="text-xs text-orange-800 dark:text-orange-300 font-medium">
                                Instructor Collaboration
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Skills Developed Column -->
                <div class="space-y-4">
                    <h3 class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2">
                        Skills Developed
                    </h3>
                    <div class="grid grid-cols-1 gap-2">
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center">
                            <div class="text-xs font-semibold text-blue-600 dark:text-blue-400">Problem Solving & Student Monitoring</div>
                        </div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center">
                            <div class="text-xs font-semibold text-purple-600 dark:text-purple-400">Equipment Maintenance</div>
                        </div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center">
                            <div class="text-xs font-semibold text-red-600 dark:text-red-400">Academic Support</div>
                        </div>
                        <div class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center">
                            <div class="text-xs font-semibold text-yellow-600 dark:text-yellow-400">Time Management & Communication</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Impact Section
            <div class="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="flex-1">
                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">Impact & Achievements</h4>
                        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                            Enhanced laboratory efficiency by streamlining equipment maintenance procedures and providing targeted student support, contributing to improved learning outcomes and reduced technical downtime across multiple academic departments.
                        </p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
{/snippet}

<Card {date} {onshowmodal}>
    {@render cardContent()}
</Card>
