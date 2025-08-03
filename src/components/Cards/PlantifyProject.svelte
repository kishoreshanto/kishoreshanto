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
		<!-- Project Type Badge with Runner Up -->
		<div class="flex items-center justify-between">
			<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-300 text-zinc-800 dark:bg-emerald-900/30 dark:text-emerald-300">
				<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M3 4a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 7a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm13 3a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>
				</svg>
				Team project
			</div>
			<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
				University Project Showcase 232
			</div>
		</div>

		<!-- Project Title and Tech Stack -->
		<div class="space-y-2">
			<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
				Plantify
			</h1>
			<div class="flex items-center space-x-2 text-md">
				<span class="font-medium text-emerald-600 dark:text-emerald-400">Full-Stack Web Application</span>
				<span class="text-zinc-400">•</span>
				<span class="text-zinc-600 dark:text-zinc-400">Team Lead & Designer</span>
			</div>
		</div>

		<!-- Project Description -->
		<div class="bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800/50 dark:via-gray-800/50 dark:to-slate-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
			<div class="flex items-start space-x-3 border-l-4 border-sky-300 pl-4 rounded-sm">
				
				<div>
					<p class="font-semibold text-gray-900 dark:text-white mb-2">Project Overview</p>
					<p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed ">
						A comprehensive plant information and management system featuring detailed species information, care guidelines, disease identification, user experience sharing, and plant identification capabilities with integrated gardening supply access.
					</p>
				</div>
			</div>
		</div>

		<!-- Runner Up Award Highlight -->
		<div class="flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-3 border border-orange-200 dark:border-orange-800">
			<div class="flex items-center space-x-2">

				<div>
					<p class="text-sm font-semibold text-orange-800 dark:text-orange-200">
						🥈 1st Runner Up - CSE Project Showcase 232
					</p>
					<p class="text-xs text-orange-600 dark:text-orange-400">
						United International University
					</p>
				</div>
			</div>
		</div>

		<!-- Technology Stack -->
		<div class="space-y-2">
			<p class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Technology Stack</p>
			<div class="flex flex-wrap gap-2">
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
						Svelte
					</span>
				<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
						TypeScript
					</span>
				<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
						MongoDB
					</span>
				<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
						MongoDB Atlas
					</span>
				<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
						Vercel
					</span>
			</div>
		</div>

		<!-- Project Details -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
			<div class="space-y-2">
				<div>
					<span class="font-medium text-zinc-700 dark:text-zinc-300">Role:</span>
					<span class="text-zinc-600 dark:text-zinc-400">Team Leader & UI Designer</span>
				</div>
				<div>
					<span class="font-medium text-zinc-700 dark:text-zinc-300">Award:</span>
					<span class="text-zinc-600 dark:text-zinc-400">1st Runner Up (2nd Place)</span>
				</div>
				<div>
					<span class="font-medium text-zinc-700 dark:text-zinc-300">Duration:</span>
					<span class="text-zinc-600 dark:text-zinc-400">5 months</span>
				</div>
			</div>
			<div class="flex items-end justify-end">
				<a
						href="https://github.com/tinykishore/Plantify"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:bg-zinc-900/50 transition-colors duration-200"
						onclick={(e) => e.stopPropagation()}
				>
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
					</svg>
					View on GitHub
				</a>
			</div>
		</div>
	</div>
{/snippet}

<Card {date} {onshowmodal}>
    {@render cardContent()}
</Card>