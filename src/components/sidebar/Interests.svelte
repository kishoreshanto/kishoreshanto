<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data/personal.json';

	const show_interests: string[] | undefined = data.interest_and_passion;
</script>

{#if show_interests}
	<h1 class="my-1 cursor-default font-mono font-bold text-sky-800 select-none dark:text-sky-600">
		Interests and Passion
	</h1>
	<div class="my-1 flex flex-wrap gap-x-2 gap-y-2 text-sm select-none dark:text-white">
		{#each show_interests as subject}
			<h1
				class="cursor-default rounded-2xl bg-sky-100 px-3 py-0.5 text-center font-semibold text-zinc-600
        shadow transition-all duration-300 hover:bg-sky-200 dark:bg-sky-950 dark:text-zinc-200 dark:dark:hover:bg-sky-800"
			>
				{subject}
			</h1>
		{/each}
	</div>
{/if}
