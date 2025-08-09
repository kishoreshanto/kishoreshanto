<script lang="ts">
	import simplifiedData from '$lib/simplified_data.json';
	
	const { publications, research, projects, experience, skills } = simplifiedData;
</script>

<section class="scroll-mt-16 focus-visible:outline-none lg:-mt-20">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div class="simplified-card space-y-6">
				<!-- Publications Section -->
				<div>
					<h1 class="text-2xl font-bold text-sky-700 dark:text-sky-400 pb-3">Publications</h1>
					<div class="space-y-3">
						{#each publications as publication}
							<div
								class="border-l-4 border-sky-500 dark:border-sky-400 pl-4 py-2 bg-sky-50/50 dark:bg-sky-950/20 rounded-r-lg"
							>
								<div class="font-medium text-gray-900 dark:text-gray-100">
									{publication.title}
								</div>
								<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
									{publication.description}
								</div>
								<div class="text-xs text-sky-800 dark:text-sky-300 mt-2 font-medium">
									{publication.venue}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<hr class="border-gray-300 dark:border-gray-600" />

				<!-- Research Experiences Section -->
				<div>
					<h2 class="text-2xl font-bold text-amber-700 dark:text-amber-400 pb-3">Other Research</h2>
					<div class="space-y-3">
						{#each research as researchItem}
							<div
								class="border-l-4 border-amber-500 dark:border-amber-400 pl-4 py-2 bg-amber-50/50 dark:bg-amber-950/20 rounded-r-lg"
							>
								<div class="font-medium text-gray-900 dark:text-gray-100">
									{researchItem.title}
								</div>
								<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
									{researchItem.description}
								</div>
							</div>
						{/each}
					</div>
				</div>

				<hr class="border-gray-300 dark:border-gray-600" />

				<!-- Projects Section -->
				<div>
					<h3 class="text-2xl font-bold text-emerald-700 dark:text-emerald-400 pb-3">
						Key Projects
					</h3>
					<div class="space-y-3">
						{#each projects as project}
							<div
								class="border-l-4 border-emerald-500 dark:border-emerald-400 pl-4 py-2 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-r-lg"
							>
								<div class="font-medium text-gray-900 dark:text-gray-100">{project.title}</div>
								<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
									{project.description}
								</div>
								{#if project.technologies.length > 0}
									<div class="text-xs text-emerald-800 dark:text-emerald-300 mt-2">
										{project.technologies.join(' • ')}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>

				<hr class="border-gray-300 dark:border-gray-600" />

				<!-- Experience Section -->
				<div>
					<h4 class="text-2xl font-bold text-purple-700 dark:text-purple-400 pb-3">
						Work Experience
					</h4>
					<div class="space-y-3">
						{#each experience as exp}
							<div
								class="border-l-4 border-purple-500 dark:border-purple-400 pl-4 py-2 bg-purple-50/50 dark:bg-purple-950/20 rounded-r-lg"
							>
								<div class="font-medium text-gray-900 dark:text-gray-100">
									{exp.title}
								</div>
								<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
									{exp.description}
								</div>
								{#if exp.technologies.length > 0}
									<div class="text-xs text-purple-800 dark:text-purple-300 mt-2">
										{exp.technologies.join(' • ')}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>

				<hr class="border-gray-300 dark:border-gray-600" />

				<!-- Technical Skills Section -->
				<div>
					<h5 class="text-2xl font-bold text-rose-700 dark:text-rose-400 pb-3">Technical Skills</h5>
					<div class="space-y-3">
						{#each skills as skill}
							<div
								class="border-l-4 border-rose-500 dark:border-rose-400 pl-4 py-2 bg-rose-50/50 dark:bg-rose-950/20 rounded-r-lg"
							>
								<div class="font-medium text-gray-900 dark:text-gray-100">{skill.category}</div>
								<div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
									{skill.items}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
