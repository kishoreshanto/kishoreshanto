<script lang="ts">
	import data from '$lib/data_en.json';
	import GithubIcon from '../visuals/icons/GithubIcon.svelte';

	const show_github: boolean = data.show_github;
	let github_url = $state<string>('');
	let github_username = $state<string>('');

	if (show_github) {
		github_url = data.github_url;
		github_username = data.github_username;
	}
</script>

{#if show_github}
	<a target="_blank" href={github_url} class="flex items-center gap-1 align-middle">
		<GithubIcon />
		<h1 class="font-mono text-sm md:text-base text-amber-700 transition-all duration-300 hover:text-gray-900">
			/ {github_username}
		</h1>
	</a>
{/if}
