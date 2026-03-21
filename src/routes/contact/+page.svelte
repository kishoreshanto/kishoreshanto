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

<main class="md:container md:mx-auto mx-5 mb-20 md:px-10">
	<section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.95fr)]">
		<div class="hero-card surface-card-soft rounded-[2rem] px-6 py-8 sm:px-8 lg:px-10">
			<p class="contact-kicker">Reach out</p>
			<h2
				class="mt-3 max-w-3xl font-lora text-4xl leading-tight font-semibold text-amber-800 md:text-5xl"
			>
				Let&apos;s make something thoughtful, useful, and a little memorable.
			</h2>
			<p class="mt-5 max-w-2xl font-ivy-text text-xl leading-relaxed text-gray-700">
				{primaryMessage} Whether you want to collaborate, ask about my work, talk research, or just start
				a good conversation, there is a channel below that should fit naturally.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				{#each conversationTags as tag (tag)}
					<span class="contact-tag">{tag}</span>
				{/each}
			</div>
		</div>

		<aside class="surface-card rounded-[2rem] px-6 py-7 sm:px-8">
			<div class="space-y-6">
				<div>
					<p class="contact-kicker">A few quick notes</p>
					<p class="mt-3 font-ivy-text text-lg leading-relaxed text-gray-700">{responseNote}</p>
				</div>

				<div class="space-y-4">
					{#if data.show_locals}
						<div class="detail-row">
							<div class="detail-icon">
								<LocationIcon />
							</div>
							<div>
								<p class="detail-label">Currently based in</p>
								<p class="detail-value">{data.current_city}</p>
							</div>
						</div>

						<div class="detail-row">
							<div class="detail-icon">
								<TimeIcon />
							</div>
							<div>
								<p class="detail-label">Timezone</p>
								<p class="detail-value">{timezoneLabel}</p>
							</div>
						</div>
					{/if}

					<div class="detail-row">
						<div class="detail-icon detail-icon--text">
							<span class="font-mono text-xs tracking-[0.24em] text-amber-700 uppercase">FYI</span>
						</div>
						<div>
							<p class="detail-label">Message style that works best</p>
							<p class="detail-value">
								A short intro, a bit of context, and what you are hoping to discuss.
							</p>
						</div>
					</div>
				</div>
			</div>
		</aside>
	</section>

	<section class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each visibleCards as card (card.id)}
			<a
				id={`contact-${card.id}`}
				href={card.href}
				target={card.external ? '_blank' : undefined}
				rel={card.external ? 'noopener noreferrer' : undefined}
				class={[
					'contact-card group',
					card.id === 'email' && visibleCards.length > 2 && 'md:col-span-2 xl:col-span-2'
				]}
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
					<span class="font-mono text-xs tracking-[0.24em] text-amber-700/70 uppercase">
						{card.external ? 'Open link' : 'Start email'}
					</span>
				</div>
			</a>
		{/each}
	</section>
</main>

<style>
	.hero-card {
		position: relative;
		overflow: hidden;
		background:
			radial-gradient(circle at top right, rgb(255 210 117 / 0.24), transparent 34%),
			linear-gradient(145deg, rgb(255 250 240 / 0.88), rgb(245 237 217 / 0.82));
	}

	.hero-card::after {
		content: '';
		position: absolute;
		inset: auto -4.5rem -4.5rem auto;
		width: 12rem;
		height: 12rem;
		border-radius: 9999px;
		background: radial-gradient(circle, rgb(196 154 60 / 0.14), transparent 68%);
		pointer-events: none;
	}

	.contact-kicker {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: rgb(168 103 0 / 0.85);
	}

	.contact-tag {
		border-radius: 9999px;
		border: 1px solid rgb(132 85 34 / 0.16);
		background: rgb(255 250 240 / 0.75);
		padding: 0.55rem 0.95rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgb(132 85 34 / 0.86);
	}

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

	.detail-row {
		display: flex;
		align-items: flex-start;
		gap: 0.9rem;
		border-radius: 1.25rem;
		border: 1px solid rgb(132 85 34 / 0.12);
		background: rgb(255 250 240 / 0.64);
		padding: 1rem;
	}

	.detail-icon {
		display: flex;
		height: 2.75rem;
		width: 2.75rem;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border-radius: 0.95rem;
		background: rgb(196 154 60 / 0.14);
	}

	.detail-icon :global(svg) {
		margin: 0;
		height: 1.25rem;
		width: 1.25rem;
		fill: rgb(132 85 34);
	}

	.detail-icon--text {
		width: auto;
		min-width: 2.75rem;
		padding-inline: 0.7rem;
	}

	.detail-label {
		font-family: var(--font-mono);
		font-size: 0.73rem;
		font-weight: 600;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: rgb(168 103 0 / 0.72);
	}

	.detail-value {
		margin-top: 0.25rem;
		font-family: var(--font-ivy-text);
		font-size: 1.05rem;
		line-height: 1.55;
		color: rgb(89 71 53);
	}

	@media (min-width: 768px) {
		.contact-card {
			padding: 1.75rem;
		}
	}
</style>
