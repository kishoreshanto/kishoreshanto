<script lang="ts">
	import data from '$lib/data_en.json';
	import EmailIcon from '$component/visuals/icons/EmailIcon.svelte';
	import GithubIcon from '$component/visuals/icons/GithubIcon.svelte';
	import LinkedInIcon from '$component/visuals/icons/LinkedInIcon.svelte';
	import InstagramIcon from '$component/visuals/icons/InstagramIcon.svelte';
	import LocationIcon from '$component/visuals/icons/LocationIcon.svelte';
	import TimeIcon from '$component/visuals/icons/TimeIcon.svelte';
	import ResumeIcon from '$component/visuals/icons/ResumeIcon.svelte';

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
	const timezoneLabel = `UTC${data.current_gmt_offset >= 0 ? '+' : '-'}${Math.abs(data.current_gmt_offset)}`;
	const quietHoursLabel = `${String(data.inactive_start_time).padStart(2, '0')}:00-${String(
		data.inactive_end_time
	).padStart(2, '0')}:00`;

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
		{
			id: 'linkedin',
			label: 'LinkedIn',
			value: `/ ${data.linkedin_username}`,
			href: data.linkedin_url,
			show: data.show_linkedin,
			external: true,
			icon: LinkedInIcon,
			eyebrow: 'Professional updates',
			description:
				'The easiest place to connect around roles, introductions, and professional context.'
		},
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
	const conversationTags = ['Research', 'Product ideas', 'Open roles', 'Friendly hello'];
	const primaryMessage = data.request_do_not_disturb
		? 'I am usually deep in research blocks, so email is the fastest way to reach me.'
		: 'I am always happy to hear from kind people building interesting things.';
	const responseNote = data.request_do_not_disturb
		? `Quiet hours are usually around ${quietHoursLabel}. Social messages may take longer than email.`
		: 'I usually reply best when the message has a little context and a clear reason for reaching out.';
</script>

<main class="mx-5 mb-20 md:container md:mx-auto md:px-10">
	<!-- <section class="grid">
		<div class="hero-card surface-card-soft rounded-4xl px-6 py-8 sm:px-8 lg:px-10 font-lora">
			<p class="contact-kicker">Reach out</p>
			<h2
				class="mt-3 text-2xl leading-tight font-semibold text-amber-600 md:text-3xl"
			>
				Let&apos;s make something thoughtful, useful, and a little memorable.
			</h2>


			<div class="mt-8 flex flex-wrap gap-3">
				{#each conversationTags as tag (tag)}
					<span class="contact-tag">{tag}</span>
				{/each}
			</div>
		</div>
	</section> -->

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
								<h3 class="font-crimson-text text-2xl font-semibold text-amber-800">
									{card.label}
								</h3>
							</div>
						</div>

						<p class="font-ivy-text text-lg leading-relaxed text-gray-700">{card.description}</p>
					</div>

					{#if card.external}
						<svg
							class="h-4 w-4 shrink-0 text-amber-600/55 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-700"
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

				<div class="mt-8 flex items-center justify-between gap-4 border-t border-amber-700/15 pt-4">
					<span class="font-mono text-sm tracking-[0.18em] text-amber-700 uppercase"
						>{card.value}</span
					>
					
				</div>
			</a>
		{/each}
	</section>
</main>

<style>
	.contact-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 1.75rem;
		border: 1px solid rgb(132 85 34 / 0.16);
		background: linear-gradient(180deg, rgb(255 250 240 / 0.84), rgb(245 237 217 / 0.72));
		padding: 1.5rem;
		box-shadow: 0 22px 44px -34px rgb(44 24 16 / 0.26);
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			box-shadow 180ms ease,
			background-color 180ms ease;
	}

	.contact-card:hover {
		transform: translateY(-2px);
		border-color: rgb(132 85 34 / 0.28);
		box-shadow: 0 26px 52px -32px rgb(44 24 16 / 0.32);
	}

	.contact-card-kicker {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: rgb(168 103 0 / 0.72);
	}

	.contact-icon-wrap {
		display: flex;
		height: 3rem;
		width: 3rem;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		background: rgb(196 154 60 / 0.14);
		border: 1px solid rgb(132 85 34 / 0.12);
	}

	.contact-icon-wrap :global(svg) {
		width: 1.35rem;
		height: 1.35rem;
		fill: rgb(132 85 34);
	}

	@media (min-width: 768px) {
		.contact-card {
			padding: 1.75rem;
		}
	}
</style>
