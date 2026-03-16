<script lang="ts">
	import data from '$lib/data_en.json';
	import LinkedInIcon from '../visuals/icons/LinkedInIcon.svelte';

	const show_linkedin: boolean = data.show_linkedin;
	let linkedin_url = $state<string>('');
	let linkedin_username = $state<string>('');

	if (show_linkedin) {
		linkedin_url = data.linkedin_url;
		linkedin_username = data.linkedin_username;
	}
</script>

{#if show_linkedin}
	<a target="_blank" href={linkedin_url} class="flex items-center gap-1 align-middle">
		<LinkedInIcon />
		<h1
			class="font-mono font-light text-amber-700 transition-all duration-300 hover:text-gray-900 dark:hover:text-gray-300"
		>
			/ {linkedin_username}
		</h1>
	</a>
{/if}
