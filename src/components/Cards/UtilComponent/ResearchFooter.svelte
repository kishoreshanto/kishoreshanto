<script lang="ts">
	interface Props {
		finished: boolean;
		isPublished?: boolean;
		time: string;
		clickable?: boolean;
		reportUrl?: string;
		linkTO?: string;
		buttonText?: string;
	}

	let { finished, time, clickable, reportUrl, linkTO, buttonText, isPublished }: Props = $props();
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
	<div class="space-y-2 flex items-center">
		<div>
			<span class="font-medium text-zinc-700 dark:text-zinc-300"
				>{finished ? 'Timeline:' : 'Started:'}</span
			>
			<span class="text-zinc-600 dark:text-zinc-400">{time}</span>
		</div>
	</div>

	<div class="flex items-end justify-end">
		{#if clickable}
			<a
				href={reportUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors duration-200"
				onclick={(e) => e.stopPropagation()}
			>
				<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
						clip-rule="evenodd"
					/>
				</svg>
				{buttonText}
			</a>
		{:else}
			<div
				class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:bg-zinc-900/50 transition-colors duration-200"
			>
				<svg class="w-3 h-3 mr-1" fill="gray" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd" />
				</svg>
				{buttonText}
			</div>
		{/if}
	</div>
</div>
