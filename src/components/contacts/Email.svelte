<script lang="ts">
	import data from '$lib/data/personal.json';
	import EmailIcon from '../visuals/icons/EmailIcon.svelte';
	import { isEmailValid } from '$lib/utils/base';

	const show_mail: boolean = data.show_mail;

	let email = $state<string>('');
	let email_is_valid = $state<boolean>(false);

	$effect(() => {
		if (show_mail) {
			email = data.mail;
			if (email) email_is_valid = isEmailValid(email);
		}
	});
</script>

<a class=" flex items-center gap-1" href="mailto:{email}">
	<EmailIcon />

	{#if email}
		{#if email_is_valid}
			<span
				class="font-mono text-sm text-amber-700 transition-all duration-300 hover:text-gray-900 md:text-base"
				>{email}</span
			>
		{:else}
			<span class="font-mono text-red-500 dark:text-red-400">Invalid email</span>
		{/if}
	{/if}
</a>
