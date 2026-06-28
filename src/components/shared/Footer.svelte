<script lang="ts">
	import data from '$lib/data/personal.json';

	// Latest commit hash injected at build time from Vite config.
	const latestCommitHash = __COMMIT_HASH__;

	// Build number or version injected at build time from Vite config.
	const buildVersion = __BUILD_VERSION__;

	// Get the current yuear and date for display in the footer
	const currentYear = new Date().getFullYear();
	const currentDate = new Date().toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric'
	});

</script>

<footer class="relative mt-auto">
	<div class="w-full">
		<div
			class="relative overflow-hidden rounded-t-4xl border border-amber-800/16 bg-[radial-gradient(circle_at_top_right,rgba(255,210,117,0.2),transparent_28%),linear-gradient(180deg,rgba(255,250,240,0.9),rgba(245,237,217,0.82))] px-10 py-10 shadow-[0_-14px_36px_-30px_rgba(44,24,16,0.2)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(196,154,60,0.55),transparent)] before:content-[''] md:px-20"
		>
			<div
				class="mx-auto flex flex-col items-start justify-between gap-5 md:container xl:flex-row md:px-12"
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
						class="flex flex-col gap-2 font-mono tracking-wider text-amber-800/84 text-xs md:text-sm"
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
