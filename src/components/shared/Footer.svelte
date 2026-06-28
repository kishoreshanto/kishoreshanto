<script lang="ts">
	import data from '$lib/data/personal.json';
	import EmailIcon from '$component/shared/svg/EmailIcon.svelte';
	import GithubIcon from '$component/shared/svg/GithubIcon.svelte';
	import LinkedInIcon from '$component/shared/svg/LinkedInIcon.svelte';

	// Latest commit hash injected at build time from Vite config.
	const latestCommitHash = __COMMIT_HASH__;

	// Build number or version injected at build time from Vite config.
	const buildVersion = __BUILD_VERSION__;

	type FooterLink = {
		label: string;
		href: string;
		show: boolean;
		icon?: typeof EmailIcon;
		external?: boolean;
	};

	const currentYear = new Date().getFullYear();
	const currentDate = new Date().toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric'
	});

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
		}
	].filter((link) => link.show);
</script>

<footer class="relative">
	<div class="w-full">
		<div
			class="footer-card overflow-hidden rounded-t-4xl border border-amber-800/16 px-10 py-10 shadow-[0_-14px_36px_-30px_rgba(44,24,16,0.2)] md:px-20"
		>
			<div
				class="mx-auto flex flex-col items-start justify-between gap-5 md:container md:flex-row md:px-12"
			>
				<div class="space-y-2">
					<p
						class="font-mono text-[0.78rem] font-semibold tracking-widest text-amber-700/80 uppercase"
					>
						{data.name} ({data.ipa_name})
					</p>

					<p class="max-w-2xl font-lora text-base leading-relaxed text-gray-700 md:text-lg">
						This portfolio is designed as a warm, readable home for my work, stories, and
						experiments.
					</p>
				</div>

				<div class="space-y-2">
				<div
						class="flex flex-col gap-2 font-mono text-xs tracking-wider text-amber-800/84 sm:text-sm"
					>
						<!-- <span class="rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2"
							>Based in {data.current_city}</span
						> -->
						<span class="w-fit rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2"
							>Updated on {currentDate}, {currentYear}</span
						>
						<span class="w-fit rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2"
							>{buildVersion} ({latestCommitHash})</span
						>
					</div>
					
				</div>
			</div>

		</div>
	</div>
</footer>

<style>
	.footer-card {
		position: relative;
		background:
			radial-gradient(circle at top right, rgb(255 210 117 / 0.2), transparent 28%),
			linear-gradient(180deg, rgb(255 250 240 / 0.9), rgb(245 237 217 / 0.82));
	}

	.footer-card::before {
		content: '';
		position: absolute;
		inset: 0 auto auto 0;
		height: 1px;
		width: 100%;
		background: linear-gradient(90deg, transparent, rgb(196 154 60 / 0.55), transparent);
	}
</style>
