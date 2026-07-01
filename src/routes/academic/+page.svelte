<script>
	import AcademicContact from '$component/academic/AcademicContact.svelte';
	import AcademicDisplayImage from '$component/academic/AcademicDisplayImage.svelte';
</script>

<main class="mx-auto max-w-4xl px-5 py-2 sm:px-8 md:max-w-7xl">
	<!-- Intro Section -->
	<section id="intro-section" class="mt-6 mb-12 flex flex-col justify-between lg:flex-row">
		<div id="left-section">
			<div class="flex flex-row items-start gap-8 pr-6 md:items-center">
				<!-- Display Image -->
				<AcademicDisplayImage />

				<!-- Introduction -->
				<div class="flex flex-col">
					<h1 class="font-lora text-3xl font-bold text-amber-600 md:text-5xl">Shanta Biswas</h1>
					<h2 class="font-lora text-lg font-semibold text-gray-600 md:text-xl">
						Software Engineer & Researcher
					</h2>
					<h3 class="mt-1 max-w-2xl text-justify md:mt-2">
						Software and AI engineer here. I love building beautiful and functional softwares and
						training AI systems that solve real problems. I also enjoy writing about my experiences
						and sharing my knowledge with others. Software and AI engineer here. I love building
						beautiful and functional softwares and training AI systems that solve real problems.
					</h3>
				</div>
			</div>
		</div>

		<!-- Contact Information -->
		<AcademicContact />
	</section>

	<!-- <hr class="my-8 w-full border-amber-700/50 pb-2" /> -->

	<section id="preface" class="mb-6 max-w-6xl">
		<div id="preface-heading">
			<h2 class="font-lora text-xl font-bold text-amber-700 md:text-2xl">Preface</h2>
			<!-- Horizontal Rule -->
			<hr class="mb-2 w-1/2 border border-amber-700" />

			<!-- Preface Content -->
			<div class="mt-2">
				<p class="text-justify">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum ac ligula a
					interdum. Aenean justo turpis, vestibulum sit amet diam nec, consequat lacinia neque.
					Suspendisse potenti. Suspendisse vitae tempus magna. Mauris efficitur vitae enim eu
					mollis. Cras semper tempor vestibulum. Integer vestibulum turpis tortor, nec mollis urna
					varius et. Fusce id libero volutpat, commodo lacus vitae, dignissim diam. Fusce
					condimentum, sapien et malesuada ullamcorper, leo magna vehicula velit, et sollicitudin
					lorem nibh vel risus.
				</p>
			</div>
		</div>
	</section>

	<section id="research-interests" class="mb-6 max-w-6xl">
		<div id="preface-heading">
			<h2 class="font-lora text-xl font-bold text-amber-700 md:text-2xl">Research Interests</h2>
			<!-- Horizontal Rule -->
			<hr class="mb-2 w-1/2 border border-amber-700" />

			<!-- Preface Content -->
			<div class="mt-2">
				<p class="text-justify">
					Computer vision, biomedical signal processing, cloud-backed systems, and carefully crafted
					interfaces.
				</p>
			</div>
		</div>
	</section>

	<!-- Education -->
	<section id="education" class="mb-6 max-w-6xl">
		<div id="preface-heading">
			<h2 class="font-lora text-xl font-bold text-amber-700 md:text-2xl">Education</h2>
			<!-- Horizontal Rule -->
			<hr class="mb-2 w-1/2 border border-amber-700" />

			<!-- Timeline Content -->
			<div class="mt-2">
				<div class="flex gap-4">
					<!-- Date -->
					<div class="min-w-[180px] pt-1 text-right text-sm whitespace-nowrap text-gray-600">
						January 2020 &mdash; November 2024
					</div>

					<!-- Timeline: dot + vertical line -->
					<div class="flex flex-col items-center">
						<div class="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-amber-700"></div>
						<div class="w-px flex-1 bg-amber-700"></div>
					</div>

					<!-- Content -->
					<div class="pb-6">
						<!-- Logo + Degree + University -->
						<div class="mb-3 flex items-center gap-3">
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded border border-gray-300 text-xs text-gray-400"
							>
								LOGO
							</div>
							<div>
								<p class="font-semibold text-gray-800">
									Bachelor of Science and Engineering &ndash; Computer Science
								</p>
								<p class="text-gray-600">United International University</p>
							</div>
						</div>

						<!-- Details -->
						<div class="space-y-0.5 text-sm text-gray-700">
							<p>GPA: 3.59 out of 4.00; Major in Data Science (Major GPA: 3.85 out of 4.00)</p>
							<p>
								Thesis Title: Multi-layer Embedded Video Anomaly Detection Using Attention Driven
								Recurrence
							</p>
							<p>
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
</main>
