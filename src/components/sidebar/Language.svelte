<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data_en.json';

	const show_language: string[] | undefined = data.language;
</script>

{#if show_language}
	<h1
		class="mt-4 select-none cursor-default my-1 font-bold text-sky-800 dark:text-sky-600 font-mono"
	>
		Languages
	</h1>
	<div class="select-none my-1 flex gap-x-2 gap-y-2 flex-wrap dark:text-white text-sm">
		{#each show_language as subject}
			<h1
				class=" bg-sky-100 text-center font-semibold cursor-default text-zinc-600 hover:bg-sky-200 transition-all shadow
        duration-300 dark:dark:hover:bg-sky-800 dark:text-zinc-200 dark:bg-sky-950 px-3 py-0.5 rounded-2xl"
			>
				{subject}
			</h1>
		{/each}
	</div>
{/if}
