<script lang="ts">
	import './contact.css';
	import data from '$lib/data/personal.json';
	import EmailIcon from '$component/shared/svg/EmailIcon.svelte';
	import GithubIcon from '$component/shared/svg/GithubIcon.svelte';
	import InstagramIcon from '$component/shared/svg/InstagramIcon.svelte';
	import ResumeIcon from '$component/shared/svg/ResumeIcon.svelte';

	type IconComponent = typeof EmailIcon;

	type ContactCard = {
		id: string;
		label: string;
		value: string;
		href: string;
		show: boolean;
		external: boolean;
		icon: IconComponent;
		eyebrow: string;
		description: string;
	};

	const orcidId = data.orcid_url.split('/').pop() ?? '';

	const cards: ContactCard[] = [
		{
			id: 'email',
			label: 'Email',
			value: data.mail,
			href: `mailto:${data.mail}`,
			show: data.show_mail,
			external: false,
			icon: EmailIcon,
			eyebrow: 'Best for collaboration',
			description:
				'Project ideas, research conversations, freelance inquiries, or a thoughtful hello.'
		},
		{
			id: 'github',
			label: 'GitHub',
			value: `/ ${data.github_username}`,
			href: data.github_url,
			show: data.show_github,
			external: true,
			icon: GithubIcon,
			eyebrow: 'Code and experiments',
			description:
				'Browse recent builds, technical work, and the things I am currently tinkering with.'
		},
		// {
		// 	id: 'linkedin',
		// 	label: 'LinkedIn',
		// 	value: `/ ${data.linkedin_username}`,
		// 	href: data.linkedin_url,
		// 	show: data.show_linkedin,
		// 	external: true,
		// 	icon: LinkedInIcon,
		// 	eyebrow: 'Professional updates',
		// 	description:
		// 		'The easiest place to connect around roles, introductions, and professional context.'
		// },
		{
			id: 'orcid',
			label: 'ORCID',
			value: orcidId,
			href: data.orcid_url,
			show: data.show_orcid,
			external: true,
			icon: EmailIcon,
			eyebrow: 'Research identity',
			description:
				'A clean way to find publications, records, and scholarly references in one place.'
		},
		{
			id: 'instagram',
			label: 'Instagram',
			value: `/ ${data.instagram_username}`,
			href: data.instagram_url,
			show: data.show_instagram,
			external: true,
			icon: InstagramIcon,
			eyebrow: 'Occasional snapshots',
			description: 'A lighter channel for personal moments and small glimpses outside of work.'
		},
		{
			id: 'resume',
			label: 'Resume',
			value: 'View resume',
			href: data.resume_url,
			show: data.show_resume,
			external: true,
			icon: ResumeIcon,
			eyebrow: 'Background at a glance',
			description:
				'A quick summary of experience, education, and the kind of work I like to pursue.'
		}
	];

	const visibleCards = cards.filter((card) => card.show);
</script>

<main class="mx-5 mb-20 md:container md:mx-auto md:px-10">
	<section class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each visibleCards as card (card.id)}
			<a
				id={`contact-${card.id}`}
				href={card.href}
				target={card.external ? '_blank' : undefined}
				rel={card.external ? 'noopener noreferrer' : undefined}
				class="contact-card"
			>
				<div class="flex items-start justify-between gap-4">
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="contact-icon-wrap">
								{#if card.id === 'orcid'}
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

							<div>
								<p class="contact-card-kicker">{card.eyebrow}</p>
								<h3 class="font-lora text-2xl font-semibold text-amber-600">
									{card.label}
								</h3>
							</div>
						</div>

						<p class="font-lora leading-relaxed text-gray-700">{card.description}</p>
					</div>

					{#if card.external}
						<svg
							class="h-4 w-4 shrink-0 text-amber-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="1.8"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M9 7h8v8" />
						</svg>
					{/if}
				</div>

				<div class="mt-4 flex items-center justify-between gap-4 border-t border-amber-700/15 pt-4">
					<span class="font-mono text-sm tracking-[0.18em] text-amber-700 uppercase"
						>{card.value}</span
					>
				</div>
			</a>
		{/each}
	</section>
</main>
