<script lang="ts">
	import IntroSection from '$component/hero-page/IntroSection.svelte';
	import profile from '$lib/data_en.json';
	import researchData from '$lib/research.json';
	import workExperienceData from '$lib/work_experience.json';

	const timezoneLabel = `UTC${profile.current_gmt_offset >= 0 ? '+' : '-'}${Math.abs(profile.current_gmt_offset)}`;
	const publicationCount = researchData.filter((entry) =>
		entry.props.category.includes('Publication')
	).length;
	const q1PublicationCount = researchData.filter((entry) => entry.props.rank === 'Q1').length;
	const experienceCount = workExperienceData.length;


	const quickNotes = [
		{
			label: 'Currently pursuing',
			value: "Master's/PhD opportunities centered on meaningful AI research."
		},
		{
			label: 'Working from',
			value: `${profile.current_city} (${timezoneLabel})`
		},
		{
			label: 'Usually best reached through',
			value: 'Email first, then GitHub or LinkedIn.'
		},
		{
			label: 'Portfolio refreshed',
			value: profile.last_updated
		}
	];

	const workingPrinciples = [
		{
			title: 'Research that can ship',
			description:
				'I like work that starts with careful thinking and still makes it all the way to something usable, testable, and practical.'
		},
		{
			title: 'Comfort across the stack',
			description:
				'My projects regularly move between product UI, backend APIs, model experimentation, and deployment details without treating those as separate worlds.'
		},
		{
			title: 'Calm, teaching-minded collaboration',
			description:
				'Lab support, survey work, and team projects pushed me toward clear explanations, structured handoffs, and patience when the details get messy.'
		}
	];

	const recurringThemes = [
		{
			title: 'Vision in noisy environments',
			description:
				'From anomaly detection in surveillance footage to automated fabric defect detection, I keep returning to visual systems where the signal is subtle and the constraints are real.'
		},
		{
			title: 'Signals, biology, and human context',
			description:
				'snoRNA-disease prediction and EEG-based motor movement classification both reflect a broader pull toward biomedical signal processing and applied intelligence.'
		},
		{
			title: 'Efficiency with real tradeoffs',
			description:
				'Energy footprint measurement, cloud architecture, and reproducible ML workflows all come from the same instinct: build things that are not only impressive, but responsible.'
		}
	];

	const capabilityGroups = [
		{
			title: 'Web and product engineering',
			items: ['SvelteKit', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs', 'SSR / CSR']
		},
		{
			title: 'Machine learning and experimentation',
			items: ['PyTorch', 'scikit-learn', 'TensorFlow / Keras', 'NumPy', 'Pandas', 'Jupyter']
		},
		{
			title: 'Computer vision and signal work',
			items: [
				'Vision Transformers',
				'YOLOv8',
				'Video anomaly detection',
				'EEG modeling',
				'Feature extraction'
			]
		},
		{
			title: 'Data, cloud, and infrastructure',
			items: ['MongoDB', 'Postgres', 'MySQL', 'Docker', 'AWS', 'Vercel']
		},
		{
			title: 'Writing, delivery, and craft',
			items: ['LaTeX', 'GitHub Actions', 'Git', 'Figma', 'Material Design', 'Documentation']
		}
	];
</script>

<main class="mx-5 mt-12 mb-8 py-8 sm:px-10 md:container md:mx-auto md:px-10">
	<!-- Intro Section -->
	<IntroSection />
	<hr class="my-8 w-full border-amber-gold pb-2" />

	<section
		aria-labelledby="home-at-a-glance"
		class="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
	>
		<article class="home-hero-card surface-card-soft rounded-4xl px-6 py-8 sm:px-8 lg:px-10">
			<p class="home-kicker">At a glance</p>
			<h2
				id="home-at-a-glance"
				class="mt-3 max-w-3xl font-lora text-2xl leading-tight font-semibold text-amber-800 md:text-3xl"
			>
				I care about building thoughtful systems that feel rigorous, useful, and grounded in the
				real world.
			</h2>
			<p class="mt-3 max-w-3xl font-ivy-text md:text-xl leading-relaxed text-gray-700">
				{profile.description} My work usually lives somewhere between research and implementation, moving
				through computer vision, biomedical signal processing, cloud-backed systems, and carefully crafted
				interfaces.
			</p>

			<div class="mt-3 flex flex-wrap gap-3">
				{#each profile.interest_and_passion as interest (interest)}
					<span class="rounded-full border border-amber-600 bg-amber-100/75 px-4 py-2 font-mono text-xs md:text-sm uppercase">{interest}</span>
				{/each}
			</div>
		</article>

		<aside class="surface-card rounded-4xl px-6 py-7 sm:px-8">
			<p class="home-kicker">Highest Academic Education</p>
			<div class="mt-5 space-y-4">
				<h2
				id="home-at-a-glance"
				class="mt-3 max-w-3xl font-lora text-2xl leading-tight font-semibold text-amber-800 md:text-3xl"
			>
				Bachelor of Science in Computer Science and Engineering, with a major in Data Science
			</h2>
			<h3 class="mt-3 max-w-3xl font-ivy-text md:text-xl leading-relaxed text-gray-700">
				United International University * 
				
			</h3>
			</div>
		</aside>
	</section>

	<section
		aria-labelledby="home-how-i-work"
		class="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
	>
		<article class="surface-card rounded-4xl px-6 py-7 sm:px-8">
			<p class="home-kicker">How I work</p>
			<h2
				id="home-how-i-work"
				class="mt-3 max-w-2xl font-lora text-3xl leading-tight font-semibold text-amber-800 md:text-4xl"
			>
				Curious for research, practical for production, and patient in teamwork.
			</h2>

			<div class="mt-6 space-y-3">
				{#each workingPrinciples as principle (principle.title)}
					<article class="home-detail-card">
						<h3 class="font-crimson-text text-2xl font-semibold text-amber-800">
							{principle.title}
						</h3>
						<p class="mt-2 font-ivy-text text-lg leading-relaxed text-gray-700">
							{principle.description}
						</p>
					</article>
				{/each}
			</div>
		</article>

		<section id="right-panel-skillsets" class="surface-card rounded-4xl px-6 py-7 sm:px-8">
			<p class="home-kicker">Capabilities</p>
			<h2 class="mt-3 font-lora text-3xl font-semibold text-amber-800 md:text-4xl">
				Things that I can do
			</h2>
			<p class="mt-4 max-w-3xl font-ivy-text text-lg leading-relaxed text-gray-700">
				A curated slice of the stack I work with most often, pulled from the broader experience
				across the site.
			</p>

			<div class="mt-6 grid gap-3 md:grid-cols-2">
				{#each capabilityGroups as group (group.title)}
					<article class="home-capability-card">
						<h3 class="font-crimson-text text-2xl font-semibold text-amber-800">{group.title}</h3>
						<div class="mt-4 flex flex-wrap gap-2">
							{#each group.items as item (`${group.title}-${item}`)}
								<span class="research-tag">{item}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</section>
	</section>

	<section aria-labelledby="home-recurring-themes" class="mt-6">
		<div class="home-themes-panel surface-card-soft rounded-4xl px-6 py-8 sm:px-8 lg:px-10">
			<p class="home-kicker">Recurring themes</p>
			<div class="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
				<h2
					id="home-recurring-themes"
					class="max-w-3xl font-lora text-3xl leading-tight font-semibold text-amber-800 md:text-4xl"
				>
					Problems I keep coming back to, even when the medium changes.
				</h2>
				<p class="max-w-xl font-ivy-text text-lg leading-relaxed text-gray-700">
					The titles and methods change, but these threads keep connecting the work.
				</p>
			</div>

			<div class="mt-6 grid gap-4 md:grid-cols-3">
				{#each recurringThemes as theme (theme.title)}
					<article class="home-theme-card">
						<h3 class="font-crimson-text text-2xl font-semibold text-amber-800">{theme.title}</h3>
						<p class="mt-3 font-ivy-text text-lg leading-relaxed text-gray-700">
							{theme.description}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	.home-hero-card,
	.home-themes-panel {
		position: relative;
		overflow: hidden;
		background:
			radial-gradient(circle at top right, rgb(255 210 117 / 0.24), transparent 34%),
			linear-gradient(145deg, rgb(255 250 240 / 0.88), rgb(245 237 217 / 0.82));
	}

	.home-hero-card::after,
	.home-themes-panel::after {
		content: '';
		position: absolute;
		inset: auto -4.5rem -4.5rem auto;
		width: 12rem;
		height: 12rem;
		border-radius: 9999px;
		background: radial-gradient(circle, rgb(196 154 60 / 0.14), transparent 68%);
		pointer-events: none;
	}

	.home-kicker {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: rgb(168 103 0 / 0.85);
	}

	.home-chip {
		@apply rounded-full border border-amber-600;
		background: rgb(255 250 240 / 0.75);
		padding: 0.55rem 0.95rem;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgb(132 85 34 / 0.86);
	}

	.home-stat-card,
	.home-fact-row,
	.home-detail-card,
	.home-capability-card,
	.home-theme-card {
		border-radius: 1.5rem;
		border: 1px solid rgb(132 85 34 / 0.16);
		background: linear-gradient(180deg, rgb(255 250 240 / 0.84), rgb(245 237 217 / 0.72));
		box-shadow: 0 22px 44px -34px rgb(44 24 16 / 0.22);
	}

	.home-stat-card {
		padding: 1rem 1.1rem;
	}

	.home-stat-value {
		font-family: var(--font-crimson-text);
		font-size: clamp(2rem, 4vw, 2.6rem);
		line-height: 1;
		color: var(--ks-text-heading);
	}

	.home-stat-label {
		margin-top: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgb(132 85 34 / 0.8);
	}

	.home-fact-row {
		padding: 1rem 1.1rem;
	}

	.home-fact-label {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgb(168 103 0 / 0.8);
	}

	.home-fact-value {
		margin-top: 0.4rem;
		font-family: var(--font-ivy-text);
		font-size: 1.08rem;
		line-height: 1.55;
		color: var(--ks-text-body);
	}

	.home-detail-card,
	.home-capability-card,
	.home-theme-card {
		padding: 1.2rem 1.25rem;
	}

	@media (max-width: 767px) {
		.home-chip {
			letter-spacing: 0.12em;
		}
	}
</style>
