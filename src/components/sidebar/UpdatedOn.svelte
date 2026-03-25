<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data/personal.json';
	import { parseDate } from '$lib/utils/base';
	import UpdatedOnIcon from '../visuals/icons/UpdatedOnIcon.svelte';

	const show_last_updated: boolean = data.show_last_updated;
	const last_updated: string = data.last_updated;
	const parsed_date = parseDate(last_updated);
</script>

{#if show_last_updated}
	<div class="flex items-center gap-2">
		<UpdatedOnIcon />
		{#if parsed_date}
			<h1 class=" font-mono text-xs font-light text-gray-400 dark:text-gray-200/50">
				Updated on
				{parsed_date.month}
				{parsed_date.date}<sup>{parsed_date.prefix}</sup>, {parsed_date.year}
			</h1>
		{:else}
			<h1 class=" font-mono text-xs font-light text-red-600 dark:text-red-300">
				Invalid date format (eg. July 12th, 2021)
			</h1>
		{/if}
	</div>
{/if}
