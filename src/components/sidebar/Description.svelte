<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data_en.json';

	const description: string | undefined = data.description;
</script>

{#if description}
	<p
		class="text-xs select-none cursor-default xs:text-sm text-gray-600 dark:text-gray-400 tracking-tight text-justify"
	>
		{@html description}
	</p>
{:else}
	<p
		class="text-xs select-none font-mono cursor-default mt-4 xs:text-sm text-red-600 dark:text-red-300 tracking-tight text-justify"
	>
		No description provided
	</p>
{/if}
