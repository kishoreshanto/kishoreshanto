<script>
	import AcademicContact from '$component/academic/AcademicContact.svelte';
	import AcademicDisplayImage from '$component/academic/AcademicDisplayImage.svelte';
	import Education from '$component/academic/sections/Education.svelte';
	import Experiences from '$component/academic/sections/Experiences.svelte';
	import Preface from '$component/academic/sections/Preface.svelte';
	import ResearchExperience from '$component/academic/sections/ResearchExperience.svelte';

	import personal_data from '$lib/data/personal.json';
</script>

<main class="mx-auto max-w-4xl px-5 py-2 sm:px-8 md:max-w-7xl">
	<!-- Intro Section -->
	<section id="intro-section" class="mt-3 mb-8 flex flex-col justify-between lg:flex-row">
		<div id="left-section">
			<div class="flex flex-row items-center gap-8 pr-6 md:items-start">
				<!-- Display Image -->
				<AcademicDisplayImage />

				<!-- Introduction -->
				<div class="flex flex-col">
					<h1 class="font-lora text-3xl font-bold text-amber-600 md:text-[2.3rem]">
						{personal_data.name}
					</h1>
					<h2
						class="font-lora text-lg leading-tight font-semibold text-gray-600 md:text-xl md:leading-relaxed"
					>
						Software Engineer & Researcher
					</h2>
					<h3 class="mt-1 hidden max-w-2xl text-justify md:mt-2 md:block">
						Software and AI engineer here. I love building beautiful and functional softwares and
						training AI systems that solve real problems. I also enjoy writing about my experiences
						and sharing my knowledge with others. Software and AI engineer here.
					</h3>
				</div>
			</div>
			<h3 class="mt-4 block max-w-2xl text-justify md:mt-2 md:hidden">
				Software and AI engineer here. I love building beautiful and functional softwares and
				training AI systems that solve real problems. I also enjoy writing about my experiences and
				sharing my knowledge with others. Software and AI engineer here. I love building beautiful
				and functional softwares and training AI systems that solve real problems.
			</h3>
		</div>

		<!-- Contact Information -->
		<AcademicContact />
	</section>

	<!-- <hr class="my-8 w-full border-amber-700/50 pb-2" /> -->

	<Preface />

	<!-- Research Interests -->
	<ResearchExperience />

	<!-- Education -->
	<Education />

	<!-- Experiences -->
	<Experiences />
</main>
