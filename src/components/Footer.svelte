<script lang="ts">
	import data from '$lib/data_en.json';
	import EmailIcon from '$component/visuals/icons/EmailIcon.svelte';
	import GithubIcon from '$component/visuals/icons/GithubIcon.svelte';
	import LinkedInIcon from '$component/visuals/icons/LinkedInIcon.svelte';
	import InstagramIcon from '$component/visuals/icons/InstagramIcon.svelte';
	import ResumeIcon from '$component/visuals/icons/ResumeIcon.svelte';

	type FooterLink = {
		label: string;
		href: string;
		show: boolean;
		icon?: typeof EmailIcon;
		external?: boolean;
	};

	const currentYear = new Date().getFullYear();

	const navLinks: FooterLink[] = [
		{ label: 'Home', href: '/', show: true },
		{ label: 'Timeline', href: '/timeline', show: true },
		{ label: 'Stories', href: '/story', show: true },
		{ label: 'Contact', href: '/contact', show: true },
		{ label: 'Chat', href: '/chat-with-me', show: true }
	];

	const connectLinks: FooterLink[] = [
		{
			label: 'Email',
			href: `mailto:${data.mail}`,
			show: data.show_mail,
			icon: EmailIcon
		},
		{
			label: 'GitHub',
			href: data.github_url,
			show: data.show_github,
			icon: GithubIcon,
			external: true
		},
		{
			label: 'LinkedIn',
			href: data.linkedin_url,
			show: data.show_linkedin,
			icon: LinkedInIcon,
			external: true
		},
		{
			label: 'Instagram',
			href: data.instagram_url,
			show: data.show_instagram,
			icon: InstagramIcon,
			external: true
		},
		{
			label: 'Resume',
			href: data.resume_url,
			show: data.show_resume,
			icon: ResumeIcon,
			external: true
		}
	].filter((link) => link.show);
</script>

<footer class="footer-shell">
	<div class="w-full">
		<div class="footer-card">
			<div class="flex flex-col items-start justify-between gap-10 md:flex-row">
				<div class="space-y-5">
					<p class="footer-kicker">{data.name}</p>
					<div class="space-y-4">
						<p class="max-w-2xl font-ivy-text text-lg leading-relaxed text-gray-700">
							This portfolio is designed as a warm, readable home for my work, stories, and
							experiments.
						</p>
					</div>

					<div class="flex flex-wrap gap-3 text-sm text-gray-600">
						<span class="footer-pill">Based in {data.current_city}</span>
						<span class="footer-pill">Updated {data.last_updated}</span>
					</div>
				</div>

				<div class="space-y-4">
					<p class="footer-column-title">Connect</p>
					<div class="flex flex-row flex-wrap gap-3">
						{#each connectLinks as link (link.label)}
							<a
								class="footer-contact-link"
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
							>
								<span class="footer-contact-icon">
									{#if link.icon}
										<link.icon />
									{/if}
								</span>
								<span class="font-crimson-text text-xl font-semibold text-amber-800"
									>{link.label}</span
								>
							</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<p>Copyright © {currentYear} {data.name}. All rights reserved.</p>
				<p class="font-mono text-xs tracking-[0.18em] text-amber-700/70 uppercase">
					Designed with Svelte 5 and SvelteKit
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-shell {
		position: relative;
		border-top: 1px solid rgb(196 154 60 / 0.2);
	}

	.footer-card {
		position: relative;
		overflow: hidden;
		border-radius: 2rem 2rem 0 0;
		border: 1px solid rgb(132 85 34 / 0.16);
		background:
			radial-gradient(circle at top right, rgb(255 210 117 / 0.2), transparent 28%),
			linear-gradient(180deg, rgb(255 250 240 / 0.9), rgb(245 237 217 / 0.82));
		padding: 2rem 1.5rem 1.25rem;
		box-shadow: 0 -14px 36px -30px rgb(44 24 16 / 0.2);
	}

	.footer-card::before {
		content: '';
		position: absolute;
		inset: 0 auto auto 0;
		height: 1px;
		width: 100%;
		background: linear-gradient(90deg, transparent, rgb(196 154 60 / 0.55), transparent);
	}

	.footer-kicker {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: rgb(168 103 0 / 0.82);
	}

	.footer-pill {
		border-radius: 9999px;
		border: 1px solid rgb(132 85 34 / 0.14);
		background: rgb(255 250 240 / 0.72);
		padding: 0.55rem 0.9rem;
		font-family: var(--font-mono);
		font-size: 0.73rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgb(132 85 34 / 0.84);
	}

	.footer-column-title {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 600;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: rgb(168 103 0 / 0.8);
	}

	.footer-contact-link {
		display: flex;
		align-items: center;
		gap: 0.9rem;
		border-radius: 1.1rem;
		border: 1px solid rgb(132 85 34 / 0.12);
		background: rgb(255 250 240 / 0.68);
		padding: 0.85rem 1rem;
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			background-color 180ms ease;
	}

	.footer-contact-link:hover {
		transform: translateY(-1px);
		border-color: rgb(132 85 34 / 0.26);
		background: rgb(255 250 240 / 0.9);
	}

	.footer-contact-icon {
		display: flex;
		height: 2.5rem;
		width: 2.5rem;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		border-radius: 0.95rem;
		background: rgb(196 154 60 / 0.14);
	}

	.footer-contact-icon :global(svg) {
		margin: 0;
		height: 1.2rem;
		width: 1.2rem;
		fill: rgb(132 85 34);
	}

	.footer-bottom {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-top: 1px solid rgb(132 85 34 / 0.12);
		padding-top: 1.25rem;
		font-family: var(--font-ivy-text);
		font-size: 1rem;
		color: rgb(111 91 68);
	}

	@media (min-width: 768px) {
		.footer-card {
			padding: 2.5rem 2rem 1.4rem;
		}

		.footer-bottom {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
