<script lang="ts">
	import contactData from '$lib/data/contact.json';
	import EmailIcon from '$component/shared/svg/EmailIcon.svelte';
	import GithubIcon from '$component/shared/svg/GithubIcon.svelte';
	import LinkedInIcon from '$component/shared/svg/LinkedInIcon.svelte';

	const emailHref = contactData.email.url.startsWith('mailto:')
		? contactData.email.url
		: `mailto:${contactData.email.url}`;
</script>

<div
	id="contact"
	class="mt-4 flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-4xl bg-yellow-700/16 px-5 py-3 shadow-xl lg:items-start xl:flex-col 2xl:px-10 2xl:py-6"
>
	<a href={emailHref} target="_blank" rel="noopener noreferrer" class="contact-link-text">
		<span class="inline-flex items-center gap-2">
			<EmailIcon />
			<span>Email</span>
		</span>
	</a>

	<a
		href={contactData.github.url}
		target="_blank"
		rel="noopener noreferrer"
		class="contact-link-text"
	>
		<span class="inline-flex items-center gap-2">
			<GithubIcon />
			<span>GitHub</span>
		</span>
	</a>

	<a
		href={contactData.linkedin.url}
		target="_blank"
		rel="noopener noreferrer"
		class="contact-link-text"
	>
		<span class="inline-flex items-center gap-2">
			<LinkedInIcon />
			<span>LinkedIn</span>
		</span>
	</a>
</div>
