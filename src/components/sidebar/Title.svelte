<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data_en.json';

	const items: string[] | undefined = data.titles;
</script>

{#if items}
	<h1
		class="my-2 select-none xs:mt-0.5 flex flex-wrap font-display xs:text-2xl text-xl font-semibold dark:text-white text-black font-mono"
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
	<h1 class="select-none mt-4 font-display font-semibold dark:text-white text-black font-mono">
		<span class="text-red-600">No title(s) provided</span>
	</h1>
{/if}
