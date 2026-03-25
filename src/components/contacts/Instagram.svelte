<script lang="ts">
	import data from '$lib/data/personal.json';
	import InstagramIcon from '../visuals/icons/InstagramIcon.svelte';

	const show_instagram: boolean = data.show_instagram;
	let instagram_url = $state<string>('');
	let instagram_username = $state<string>('');

	if (show_instagram) {
		instagram_url = data.instagram_url;
		instagram_username = data.instagram_username;
	}
</script>

{#if show_instagram}
	<a
		target="_blank"
		href={instagram_url}
		class="flex translate-x-px items-center gap-1 align-middle xs:translate-x-0"
	>
		<InstagramIcon />
		<h1
			class="font-mono text-sm text-amber-700 transition-all duration-300 hover:text-gray-900 md:text-base"
		>
			/ {instagram_username}
		</h1>
	</a>
{/if}
