<script lang="ts">
	interface Props {
		onaskAnother?: () => void;
	}

	let { onaskAnother }: Props = $props();
</script>

<section class="scroll-mt-16 focus-visible:outline-none">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div
				class="bg-gradient-to-l from-blue-200 to-purple-200/70 mx-auto max-w-lg rounded-3xl border-zinc-300 p-6 drop-shadow-xl backdrop-blur-md transition-transform duration-300 dark:border-zinc-700 dark:bg-zinc-800/30 lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto"
			>
				<div class="space-y-4">
					

					<!-- Demo Content -->
					<div class="bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800/50 dark:via-gray-800/50 dark:to-slate-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
						<div class="space-y-4">
							<div class="text-center">
								<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
									Welcome to AI Mode!
								</h3>
								<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
									I'm here to help you learn more about the projects, research, and experiences. 
									Ask me questions and I'll provide detailed insights!
								</p>
							</div>

							<div class="space-y-3">
								<h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300">
									Try asking me about:
								</h4>
								<div class="grid grid-cols-1 gap-2">
									<div class="bg-white dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
										<p class="text-xs text-gray-600 dark:text-gray-400">
											💡 "What are your research interests?"
										</p>
									</div>
									<div class="bg-white dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
										<p class="text-xs text-gray-600 dark:text-gray-400">
											🔬 "Tell me about your research works in computer vision and LLMs"
										</p>
									</div>
									<div class="bg-white dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
										<p class="text-xs text-gray-600 dark:text-gray-400">
											⚡ "How do you define yourself?"
										</p>
									</div>
								</div>
							</div>

							<div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
								<p class="text-xs text-blue-700 dark:text-blue-300 text-center font-bold">
									💭 Start typing your question in the search bar above to begin!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
