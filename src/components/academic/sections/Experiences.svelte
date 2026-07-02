<script>
	import AcademicDateMark from '../AcademicDateMark.svelte';
	import AcademicTimeLine from '../AcademicTimeLine.svelte';
	import UIUlogo from '$lib/assets/icons/uiu.webp';
	import BRACUlogo from '$lib/assets/icons/bracu-logo.png';
</script>

<section id="experiences" class="mb-3 max-w-6xl">
	<div id="experiences-heading">
		<h2 class="font-lora text-xl font-bold text-amber-700 md:text-2xl">Experiences</h2>
		<!-- Horizontal Rule -->
		<hr class="mb-2 w-1/2 border border-amber-700" />

		<!-- Preface Content -->
		<div
			class="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[10.75rem_0.75rem_minmax(0,1fr)]"
		>
			<div class="col-start-2 row-start-1 self-start md:col-start-1">
				<AcademicDateMark date="Jan 2026 — Present" />
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
						<img src={BRACUlogo} alt="BRACU Logo" class="h-full w-full rounded-md object-contain" />
					</div>
					<div class="flex flex-col">
						<p
							class="line-clamp-none` leading-5 font-semibold text-gray-800 md:text-[1.2rem] md:leading-6"
						>
							Voluntary Academic Assessment Assistant
						</p>
						<p class="line-clamp-none block text-sm text-gray-600 md:text-base">
							<a
								href="https://www.bracu.ac.bd/"
								target="_blank"
								rel="noopener noreferrer"
								class="font-medium text-gray-600">BRAC University</a
							>, <span class="hidden md:inline">Badda, Dhaka, Bangladesh</span><span
								class="inline md:hidden">DAC, BD</span
							>
						</p>
					</div>
				</div>

				<!-- Details -->
				<div class="space-y-0.5 text-sm text-gray-700">
					<p class="font-semibold">Key Responsibilities:</p>
					<ul class="list-outside list-disc space-y-1 pl-5">
						<li>
							Supporting a BRAC University course instructor by independently grading lab quizes and
							assignments
						</li>
						<li>
							Submits finalized marks for instructor use in official course assessment records
						</li>
						<li>
							Handles assessment work accuracy, fairness, and confidentiality due to its impact on
							students’ course outcomes
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="mt-4 md:mt-2">
			<div
				class="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[10.75rem_0.75rem_minmax(0,1fr)]"
			>
				<div class="col-start-2 row-start-1 self-start md:col-start-1">
					<AcademicDateMark date="Feb 2023 — Mar 2024" />
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
								Teaching Assistant — Department of CSE
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
						<p class="font-semibold">Key Responsibilities:</p>
						<ul class="list-outside list-disc space-y-1 pl-5">
							<li>
								Led laboratory sessions across 5 CS lab courses; conducted quizzes, delivered
								solution walkthroughs, administered quizzes, and answered students’ technical
								questions, graded submissions and managed attendance records
							</li>
							<li>
								Supervised 15 teams (total 75 students) through six-week development cycles, guiding
								them in delivering functional projects for industry-judged competitions
							</li>
							<li>
								Co-developed and calibrated quiz questions with faculty for students with varying
								levels of proficiency
							</li>
						</ul>
						<p>
							<span class="font-semibold">Course Supervised:</span> Object Oriented Programming, Data
							Structures & Algorithms I & II, Database and System Management, Artificial Intelligence
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
