<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data/personal.json';

	const description: string | undefined = data.description;
</script>

{#if description}
	<p
		class="cursor-default text-justify text-xs tracking-tight text-gray-600 select-none xs:text-sm dark:text-gray-400"
	>
		{description}
	</p>
{:else}
	<p
		class="mt-4 cursor-default text-justify font-mono text-xs tracking-tight text-red-600 select-none xs:text-sm dark:text-red-300"
	>
		No description provided
	</p>
{/if}
