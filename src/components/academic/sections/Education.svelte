<script>
	import LinkIcon from '$component/shared/svg/LinkIcon.svelte';
	import AcademicDateMark from '../AcademicDateMark.svelte';
	import AcademicTimeLine from '../AcademicTimeLine.svelte';

	// Import Images
	import UIUlogo from '$lib/assets/icons/uiu.webp';
</script>

<section id="education" class="mb-3 max-w-5xl">
	<div id="preface-heading">
		<h1 class="font-lora text-xl font-bold text-amber-700 md:text-2xl">Education</h1>
		<!-- Horizontal Rule -->
		<hr class="mb-2 w-1/2 border border-amber-700" />

		<!-- Timeline Content -->
		<div class="mt-2 space-y-2">
			<div
				class="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-x-4 gap-y-1 md:grid-cols-[10.75rem_0.75rem_minmax(0,1fr)]"
			>
				<div class="col-start-2 row-start-1 self-start md:col-start-1">
					<AcademicDateMark date="Jan 2020 — Nov 2024" />
				</div>

				<div
					class="relative col-start-1 row-span-2 row-start-1 self-stretch md:col-start-2 md:row-span-1"
				>
					<AcademicTimeLine />
				</div>

				<div class="col-start-2 row-start-2 mt-2 md:col-start-3 md:row-start-1">
					<!-- Logo + Degree + University -->
					<div class="mb-1 flex items-center gap-3">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded">
							<img src={UIUlogo} alt="UIU Logo" class="h-full w-full object-contain" />
						</div>
						<div class="flex flex-col">
							<p
								class="line-clamp-none` leading-5 font-semibold text-gray-800 md:text-[1.2rem] md:leading-6"
							>
								Bachelor of Science and Engineering — Computer Science
							</p>
							<p class="line-clamp-none block text-sm text-gray-600 md:text-base">
								<a
									href="https://www.uiu.ac.bd/"
									target="_blank"
									rel="noopener noreferrer"
									class="font-medium text-gray-600">United International University</a
								>, <span class="hidden md:inline">Madani Avenue, Dhaka, Bangladesh</span><span
									class="inline md:hidden">DAC, BD</span
								>
							</p>
						</div>
					</div>

					<!-- Details -->
					<div class="space-y-0.5 text-sm text-gray-700">
						<p>
							<strong>GPA:</strong>
							<span class="bg-yellow-200 px-0.5 font-medium underline underline-offset-2">3.59</span
							>
							out of 4.00; Specialization in
							<span class="bg-yellow-200 px-0.5 font-medium underline underline-offset-2"
								>Data Science</span
							>
							(Major GPA: <span class="font-medium">3.85</span> out of 4.00)
						</p>
						<p>
							<strong>Thesis Title:</strong>
							<a
								href="https://kishoreshanto.github.io/projects/ug-thesis/"
								rel="noopener noreferrer"
								target="_blank"
								class="italic underline-offset-2 hover:underline"
								>Multi-layer Embedded Video Anomaly Detection Using Attention Driven Recurrence <span
									><LinkIcon /></span
								></a
							>
						</p>
						<p>
							<strong>Advisors:</strong>
							<a
								href="https://www.bracu.ac.bd/about/people/swakkhar-shatabda-phd"
								rel="noopener noreferrer"
								target="_blank"
								class="italic underline-offset-2 hover:underline">Dr. Swakkhar Shatabda</a
							>,
							<a
								href="https://scholar.google.com.my/citations?user=H3PienUAAAAJ&hl=en"
								rel="noopener noreferrer"
								target="_blank"
								class="italic underline-offset-2 hover:underline">Dr. Al-Sakib Khan Pathan</a
							>,
							<a
								href="https://cse.uiu.ac.bd/faculty/motaharul/"
								rel="noopener noreferrer"
								target="_blank"
								class="italic underline-offset-2 hover:underline">Dr. Md. Motaharul Islam</a
							>,
							<a
								href="https://cse.uiu.ac.bd/faculty/azim-riasat/"
								rel="noopener noreferrer"
								target="_blank"
								class="italic underline-offset-2 hover:underline">Dr. Riasat Azim</a
							>
						</p>
						<p class="text-stone-500/90">
							Courseworks: Artificial Intelligence, Machine Learning, Introduction to
							Bioinformatics, Digital Image Processing, Human Computer Interaction, Software
							Engineering, System Analysis and Design, Database Management, Data Mining
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
