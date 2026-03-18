<script lang="ts">
	import data from '$lib/data_en.json';
	import EmailIcon from '$component/visuals/icons/EmailIcon.svelte';
	import GithubIcon from '$component/visuals/icons/GithubIcon.svelte';
	import LinkedInIcon from '$component/visuals/icons/LinkedInIcon.svelte';
	import InstagramIcon from '$component/visuals/icons/InstagramIcon.svelte';
	import LocationIcon from '$component/visuals/icons/LocationIcon.svelte';
	import TimeIcon from '$component/visuals/icons/TimeIcon.svelte';
	import ResumeIcon from '$component/visuals/icons/ResumeIcon.svelte';

	let visible = $state(true);

	const orcidId = data.orcid_url.split('/').pop() ?? '';

	// Compute local time string from GMT offset
	const gmtSign = data.current_gmt_offset >= 0 ? '+' : '−';
	const gmtAbs = Math.abs(data.current_gmt_offset);
	const timezoneLabel = `GMT ${gmtSign}${gmtAbs}`;

	const cards: ContactCard[] = [
		{
			id: 'email',
			label: 'Email',
			value: data.mail,
			href: `mailto:${data.mail}`,
			show: data.show_mail,
			external: false,
			icon: EmailIcon
		},
		{
			id: 'github',
			label: 'GitHub',
			value: `/ ${data.github_username}`,
			href: data.github_url,
			show: data.show_github,
			external: true,
			icon: GithubIcon
		},
		{
			id: 'linkedin',
			label: 'LinkedIn',
			value: `/ ${data.linkedin_username}`,
			href: data.linkedin_url,
			show: data.show_linkedin,
			external: true,
			icon: LinkedInIcon
		},
		{
			id: 'orcid',
			label: 'ORCID',
			value: orcidId,
			href: data.orcid_url,
			show: data.show_orcid,
			external: true,
			icon: EmailIcon
		},
		{
			id: 'instagram',
			label: 'Instagram',
			value: `/ ${data.instagram_username}`,
			href: data.instagram_url,
			show: data.show_instagram,
			external: true,
			icon: InstagramIcon
		},
		{
			id: 'resume',
			label: 'Resume',
			value: 'View Resume',
			href: data.resume_url,
			show: data.show_resume,
			external: true,
			icon: ResumeIcon
		}
	];

	const visibleCards = cards.filter((c) => c.show);
</script>

<main class="container mx-auto mt-12 mb-16 max-w-3xl px-6 md:px-0">
	<!-- Contact Cards -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each visibleCards as card, i (card.id)}
			<a
				id="contact-{card.id}"
				href={card.href}
				target={card.external ? '_blank' : undefined}
				rel={card.external ? 'noopener noreferrer' : undefined}
				class="contact-card group"
				class:contact-visible={visible}
				style="transition-delay: {100 + i * 80}ms"
			>
				<div class="mb-3 flex items-center gap-3">
					<div class="contact-icon-wrap">
						{#if card.id === 'orcid'}
							<!-- ORCID uses a custom inline SVG instead of a shared icon component -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
								class="h-5 w-5 fill-amber-700"
							>
								<path
									d="M256,128c0,70.7-57.3,128-128,128S0,198.7,0,128S57.3,0,128,0S256,57.3,256,128z"
									fill="none"
								/>
								<path
									d="M86.3,186.2H70.9V79.1h15.4V186.2z M78.6,53.5c-5.7,0-10.3,4.6-10.3,10.3s4.6,10.3,10.3,10.3 c5.7,0,10.3-4.6,10.3-10.3S84.3,53.5,78.6,53.5z"
									class="fill-amber-700"
								/>
								<path
									d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5 c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"
									class="fill-amber-700"
								/>
							</svg>
						{:else}
							<card.icon />
						{/if}
					</div>
					<span class="font-crimson-text text-sm font-bold tracking-wider text-amber-800 uppercase"
						>{card.label}</span
					>
				</div>
				<span
					class="font-mono text-sm text-amber-700 transition-colors duration-200 group-hover:text-amber-900"
				>
					{card.value}
				</span>
				{#if card.external}
					<svg
						class="absolute top-4 right-4 h-4 w-4 text-amber-600/40 transition-all duration-200 group-hover:text-amber-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				{/if}
			</a>
		{/each}
	</div>

	<!-- Location & Timezone -->
	<div
		class="contact-card mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-around"
		class:contact-visible={visible}
		style="transition-delay: {100 + visibleCards.length * 80 + 80}ms"
	>
		<div class="flex items-center gap-3">
			<div class="contact-icon-wrap">
				<LocationIcon />
			</div>
			<div>
				<span
					class="block font-crimson-text text-xs font-bold tracking-wider text-amber-800 uppercase"
					>Location</span
				>
				<span class="font-mono text-sm text-amber-700">{data.current_city}</span>
			</div>
		</div>
		<div class="hidden h-8 w-px bg-amber-700/20 sm:block"></div>
		<div class="flex items-center gap-3">
			<div class="contact-icon-wrap">
				<TimeIcon />
			</div>
			<div>
				<span
					class="block font-crimson-text text-xs font-bold tracking-wider text-amber-800 uppercase"
					>Timezone</span
				>
				<span class="font-mono text-sm text-amber-700">{timezoneLabel}</span>
			</div>
		</div>
	</div>


</main>

<style>
	/* Card base */
	.contact-card {
		position: relative;
		padding: 1.25rem 1.5rem;
		border-radius: 1rem;
		border: 1px solid rgb(146 100 52 / 0.35);
		background: rgb(249 216 176 / 0.4);
		box-shadow: 0 1px 3px rgb(146 100 52 / 0.08);
	}

	/* Icon wrapper */
	.contact-icon-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 0.625rem;
		background: rgb(146 100 52 / 0.12);
		flex-shrink: 0;
	}

	.contact-icon-wrap :global(svg) {
		width: 1.15rem;
		height: 1.15rem;
		fill: rgb(180 83 9);
	}

</style>
