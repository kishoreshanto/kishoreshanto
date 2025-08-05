<script lang="ts">
	interface Props {
		status: string;
		description: string;
	}

	let { status, description }: Props = $props();
</script>

<div
	class="flex items-center justify-between bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-3 border border-cyan-200 dark:border-cyan-800"
>
	<div class="flex items-center space-x-2">
		<svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
			<path
				fill-rule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
		<div>
			<p class="text-sm font-semibold text-cyan-800 dark:text-cyan-200">
				{status}
			</p>
			<p class="text-xs text-cyan-600 dark:text-cyan-400">
				{description}
			</p>
		</div>
	</div>
</div>
