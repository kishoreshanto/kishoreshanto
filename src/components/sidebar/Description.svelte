<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data_en.json';

	const description: string | undefined = data.description;
</script>

{#if description}
	<p
		class="xs:text-sm cursor-default text-justify text-xs tracking-tight text-gray-600 select-none dark:text-gray-400"
	>
		{@html description}
	</p>
{:else}
	<p
		class="xs:text-sm mt-4 cursor-default text-justify font-mono text-xs tracking-tight text-red-600 select-none dark:text-red-300"
	>
		No description provided
	</p>
{/if}
