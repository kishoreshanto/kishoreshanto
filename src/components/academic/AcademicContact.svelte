<script lang="ts">
	import contactData from '$lib/data/contact.json';
	import EmailIcon from '$component/shared/svg/EmailIcon.svelte';
	import GithubIcon from '$component/shared/svg/GithubIcon.svelte';
	import GoogleScholarIcon from '$component/shared/svg/GoogleScholarIcon.svelte';
	import LinkedInIcon from '$component/shared/svg/LinkedInIcon.svelte';
	import OrcidIcon from '$component/shared/svg/OrcidIcon.svelte';
	import ResumeIcon from '$component/shared/svg/ResumeIcon.svelte';

	const emailHref = contactData.email.url.startsWith('mailto:')
		? contactData.email.url
		: `mailto:${contactData.email.url}`;

	const emailLink = { href: emailHref, target: '_blank', rel: 'noopener noreferrer' } as const;
	const linkedinLink = {
		href: contactData.linkedin.url,
		target: '_blank',
		rel: 'noopener noreferrer'
	} as const;
	const githubLink = {
		href: contactData.github.url,
		target: '_blank',
		rel: 'noopener noreferrer'
	} as const;
	const scholarLink = {
		href: contactData.google_scholar.url,
		target: '_blank',
		rel: 'noopener noreferrer'
	} as const;
	const orcidLink = {
		href: contactData.orcid.url,
		target: '_blank',
		rel: 'noopener noreferrer'
	} as const;
	const resumeLink = {
		href: contactData.cv_resume.url,
		target: '_blank',
		rel: 'noopener noreferrer'
	} as const;
</script>

<!-- Desktop View -->
<div
	id="contact-desktop"
	class="hidden items-center justify-center border-l-2 border-amber-700 pl-4 align-middle lg:flex"
>
	<div class="grid min-w-[300px] grid-cols-1 gap-1">
		<a
			{...emailLink}
			class="flex items-center gap-3.5 align-middle font-semibold underline-offset-6 hover:text-amber-600 hover:underline"
		>
			<span>
				<EmailIcon />
			</span>
			{contactData.email.url_preview}
		</a>
		<a
			{...linkedinLink}
			class="flex items-center gap-4 align-middle font-semibold underline-offset-6 hover:text-amber-600 hover:underline"
		>
			<span>
				<LinkedInIcon />
			</span>
			{contactData.linkedin.url_preview}
		</a>
		<a
			{...githubLink}
			class="flex items-center gap-3.5 align-middle font-semibold underline-offset-6 hover:text-amber-600 hover:underline"
		>
			<span>
				<GithubIcon />
			</span>
			{contactData.github.url_preview}
		</a>

		<a
			{...scholarLink}
			class="flex items-center gap-4 align-middle font-semibold underline-offset-6 hover:text-amber-600 hover:underline"
		>
			<span>
				<GoogleScholarIcon />
			</span>
			{contactData.google_scholar.url_preview}
		</a>
		<a
			{...orcidLink}
			class="flex items-center gap-4 align-middle font-semibold underline-offset-6 hover:text-amber-600 hover:underline"
		>
			<span>
				<OrcidIcon />
			</span>
			{contactData.orcid.url_preview}
		</a>
		<a
			{...resumeLink}
			class="flex items-center gap-3.5 align-middle font-semibold underline-offset-6 hover:text-amber-600 hover:underline"
		>
			<span>
				<ResumeIcon />
			</span>
			{contactData.cv_resume.url_preview}
		</a>
	</div>
</div>

<!-- Mobile View -->
<div id="contact-mobile" class="mt-4 grid grid-cols-3 justify-items-start gap-y-2 lg:hidden">
	<a
		{...emailLink}
		aria-label={`Email: ${contactData.email.url_preview}`}
		class="flex items-center gap-2 pl-3 text-amber-700 transition hover:text-amber-600 sm:pl-10"
	>
		<EmailIcon />
		Email
	</a>
	<a
		{...linkedinLink}
		aria-label={`LinkedIn: ${contactData.linkedin.url_preview}`}
		class="flex items-center gap-2 pl-3 text-amber-700 transition hover:text-amber-600 sm:pl-10"
	>
		<LinkedInIcon />
		Linkedin
	</a>
	<a
		{...githubLink}
		aria-label={`GitHub: ${contactData.github.url_preview}`}
		class="flex items-center gap-2 pl-3 text-amber-700 transition hover:text-amber-600 sm:pl-10"
	>
		<GithubIcon />
		Github
	</a>
	<a
		{...scholarLink}
		aria-label={`Google Scholar: ${contactData.google_scholar.url_preview}`}
		class="flex items-center gap-2 pl-3 text-amber-700 transition hover:text-amber-600 sm:pl-10"
	>
		<GoogleScholarIcon />
		Scholar
	</a>
	<a
		{...orcidLink}
		aria-label={`ORCID: ${contactData.orcid.url_preview}`}
		class="flex items-center gap-2 pl-3 text-amber-700 transition hover:text-amber-600 sm:pl-10"
	>
		<OrcidIcon />
		ORCID
	</a>
	<a
		{...resumeLink}
		aria-label={`CV or Resume: ${contactData.cv_resume.url_preview}`}
		class="flex items-center gap-2 pl-3 text-amber-700 transition hover:text-amber-600 sm:pl-10"
	>
		<ResumeIcon />
		View CV
	</a>
</div>
