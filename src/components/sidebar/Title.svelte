<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data/personal.json';

	const items: string[] | undefined = data.titles;
</script>

{#if items}
	<h1
		class="font-display my-2 flex flex-wrap font-mono text-xl font-semibold text-black select-none xs:mt-0.5 xs:text-2xl dark:text-white"
	>
		{#each items as item, index}
			{#if index === items.length - 1}
				<span class="text-sky-900 dark:text-sky-600">{item}</span>
			{:else if index === items.length - 2}
				<span class="text-sky-900 dark:text-sky-600">{item}&nbsp;</span>and&nbsp;
			{:else}
				<span class="text-sky-900 dark:text-sky-600">{item}</span>,&nbsp;
			{/if}
		{/each}
	</h1>
{:else}
	<h1 class="font-display mt-4 font-mono font-semibold text-black select-none dark:text-white">
		<span class="text-red-600">No title(s) provided</span>
	</h1>
{/if}
