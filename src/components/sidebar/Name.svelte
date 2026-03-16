<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data_en.json';

	const name: string = data.name;
	const show_legal_name: boolean = data.show_leagal_name;
	const show_ipa: boolean | undefined = data.show_ipa;

	let first_name = $state<string>('');
	let last_name = $state<string>('');
	let first_legal_name = $state<string>('');
	let last_legal_name = $state<string>('');

	if (name) {
		first_name = name.split(' ')[0];
		last_name = name.split(' ').slice(1).join(' ');
		if (show_legal_name) {
			first_legal_name = data.legal_name.split(' ')[0];
			last_legal_name = data.legal_name.split(' ').slice(1).join(' ');
		}
	}
</script>

{#if name}
	<div class="flex flex-col gap-0.5">
		<h1 class=" my-0.5 text-4xl font-black text-black xs:text-5xl dark:text-white">
			{#if show_legal_name}
				{first_legal_name}
			{:else}
				{first_name}
			{/if}
			<span class="text-sky-300">
				{#if show_legal_name}
					{last_legal_name}
				{:else}
					{last_name}
				{/if}
			</span>
		</h1>
		<h1 class="text-sm font-semibold text-zinc-400">
			{#if show_legal_name}
				{data.legal_ipa}
			{:else if show_ipa}
				{data.ipa_name}
			{/if}
		</h1>
	</div>
{:else}
	<h1 class=" font-mono font-bold text-red-600 dark:text-red-300">No name provided</h1>
{/if}
