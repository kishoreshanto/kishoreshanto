<script lang="ts">
	import data from '$lib/data_en.json';
	import EmailIcon from '../visuals/icons/EmailIcon.svelte';
	import { isEmailValid } from '$lib/utils';

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

<a
	class=" flex items-center gap-1"
	href="mailto:{email}"
>
	<EmailIcon />

	{#if email}
		{#if email_is_valid}
			<span class="contact-link-text">{email}</span>
		{:else}
			<span class="font-mono text-red-500 dark:text-red-400">Invalid email</span>
		{/if}
	{/if}
</a>
