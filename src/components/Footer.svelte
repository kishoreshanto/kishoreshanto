<script lang="ts">
	import data from '$lib/data_en.json';
	import EmailIcon from '$component/visuals/icons/EmailIcon.svelte';
	import GithubIcon from '$component/visuals/icons/GithubIcon.svelte';
	import LinkedInIcon from '$component/visuals/icons/LinkedInIcon.svelte';

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

					<div
						class="flex flex-col gap-2 font-mono text-xs tracking-wider text-amber-800/84 uppercase sm:text-sm"
					>
						<!-- <span class="rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2"
							>Based in {data.current_city}</span
						> -->
						<span class="w-fit rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2"
							>Updated on {currentDate}, {currentYear}</span
						>
						<span class="w-fit rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2"
							>{data.version}</span
						>
					</div>
				</div>

				<div class="space-y-2">
					<p
						class="font-mono text-[0.76rem] font-semibold tracking-wider text-amber-700/80 uppercase"
					>
						Connect
					</p>
					<div class="flex flex-row flex-wrap gap-4 md:flex-col md:gap-1">
						{#each connectLinks as link (link.label)}
							<a
								class="flex items-center gap-1 rounded-full border border-amber-800/12 bg-amber-50/70 px-1.5 transition-colors duration-200 hover:bg-amber-200/90"
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
							>
								<span
									class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100/20"
								>
									{#if link.icon}
										<link.icon />
									{/if}
								</span>
								<span class="pr-3.5 font-lora text-sm text-amber-800 md:text-base"
									>{link.label}</span
								>
							</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="mt-10 border-t border-amber-300 pt-4 text-center font-lora text-gray-600">
				<p>Copyright © {currentYear} {data.name}. All rights reserved.</p>
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
