<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data_en.json';
	const name: string = data.name;
</script>

{#if name}
	<h1 class="text-sm font-semibold text-zinc-400">Legal Name: {data.legal_name}</h1>
{:else}
	<h1 class=" font-mono font-bold text-red-600 dark:text-red-300">No name provided</h1>
{/if}
