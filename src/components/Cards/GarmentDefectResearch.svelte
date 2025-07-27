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
			<!-- Research Type Badge -->
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
					</svg>
					Research Publication
				</div>
				<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
					ACM ICCA 2025 [Open Access]
				</div>
			</div>

			<!-- Title and Journal -->
			<div class="space-y-2">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					A Deep Learning based Approach for Automated Defect Detection of Fabrics in Garment Production Line
				</h1>
				<div class="flex items-center space-x-2 text-md">
					<span class="font-medium text-sky-600 dark:text-sky-400">ACM</span>
					<span class="text-zinc-400">•</span>
					<span class="text-zinc-600 dark:text-zinc-400">Conference ICCA — 2024</span>
				</div>
			</div>

			<!-- TLDR Section -->
			<div class="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-sky-200 dark:border-sky-800">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="w-4 h-4 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-sky-800 dark:text-sky-200 mb-1">Summary</p>
						<p class="text-sm text-sky-700 dark:text-sky-300 leading-relaxed">
							Researched and implemented a deep learning solution for identifying and localizing defects in fabrics, using the YOLOv8.
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
							10.1145/3723178.3723196
						</p>
					</div>
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">Published:</span>
						<span class="text-zinc-600 dark:text-zinc-400">June 2025</span>
					</div>
				</div>
				<div class="flex items-end justify-end">
					<a
						href="https://dl.acm.org/doi/10.1145/3723178.3723196"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 transition-colors duration-200"
						onclick={(e) => e.stopPropagation()}
					>
						<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>
						</svg>
						Access Full-Text
					</a>
				</div>
			</div>
		</div>
	{/snippet}

<Card {date} {onshowmodal}>
    {@render cardContent()}
</Card>