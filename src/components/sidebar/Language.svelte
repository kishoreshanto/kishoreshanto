<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data/personal.json';

	const language: string[] | undefined = data.language;
	const showLanguage: boolean | undefined = data.show_language;
</script>

{#if language && showLanguage}
	<h1
		class="my-1 mt-4 cursor-default font-mono font-bold text-sky-800 select-none dark:text-sky-600"
	>
		Languages
	</h1>
	<div class="my-1 flex flex-wrap gap-x-2 gap-y-2 text-sm select-none dark:text-white">
		{#each language as subject}
			<h1
				class=" cursor-default rounded-2xl bg-sky-100 px-3 py-0.5 text-center font-semibold text-zinc-600
        shadow transition-all duration-300 hover:bg-sky-200 dark:bg-sky-950 dark:text-zinc-200 dark:dark:hover:bg-sky-800"
			>
				{subject}
			</h1>
		{/each}
	</div>
{/if}
