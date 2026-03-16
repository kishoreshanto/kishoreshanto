<script lang="ts">
	import data from '$lib/data_en.json';
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
		class="flex translate-x-[1px] items-center gap-1 align-middle xs:translate-x-0"
	>
		<InstagramIcon />
		<h1
			class="text-xs font-light text-gray-500 transition-all duration-300 hover:text-gray-900 xs:text-sm dark:hover:text-gray-300"
		>
			/ {instagram_username}
		</h1>
	</a>
{/if}
