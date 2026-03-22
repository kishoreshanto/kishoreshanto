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
		<div class="footer-card px-10 py-10 md:px-20 overflow-hidden rounded-t-4xl border border-amber-800/16 shadow-[0_-14px_36px_-30px_rgba(44,24,16,0.2)] ">
			<div class="flex flex-col items-start justify-between gap-5 md:flex-row md:container mx-auto md:px-12">
				<div class="space-y-2">
					<p class="font-mono text-[0.78rem] font-semibold tracking-widest uppercase text-amber-700/80">{data.name}</p>

					<p class="max-w-2xl font-lora leading-relaxed text-gray-700 text-base md:text-lg">
						This portfolio is designed as a warm, readable home for my work, stories, and
						experiments.
					</p>


					<div class="flex flex-wrap gap-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-amber-800/84">
						<span class="rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2">Based in {data.current_city}</span>
						<span class="rounded-full border border-amber-800/14 bg-amber-100/82 px-3 py-2">Updated {data.last_updated}</span>
					</div>
				</div>

				<div class="space-y-2">
					<p class="font-mono text-[0.76rem] font-semibold tracking-wider uppercase text-amber-700/80">Connect</p>
					<div class="flex flex-row flex-wrap gap-4 md:flex-col md:gap-1">
						{#each connectLinks as link (link.label)}
							<a
								class="flex items-center gap-1 rounded-full border border-amber-800/12 bg-amber-50/70 px-1.5 hover:bg-amber-200/90 transition-colors duration-200"
								href={link.href}
								target={link.external ? '_blank' : undefined}
								rel={link.external ? 'noopener noreferrer' : undefined}
							>
								<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100/20">
									{#if link.icon}
										<link.icon />
									{/if}
								</span>
								<span class="font-lora text-amber-800 pr-3.5 text-sm md:text-base">{link.label}</span>
							</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="font-lora text-sm text-gray-600 mt-10 border-t border-amber-300 pt-4 text-center">
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
