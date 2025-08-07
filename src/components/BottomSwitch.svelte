<script lang="ts">
	import { isSimplifiedView, isAskMode } from '$lib/appStore';

	function toggleView() {
		isSimplifiedView.update((value) => !value);
		// Scroll to top smoothly when switching views
		scrollToTop();
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<!-- Fixed navigation controls - bottom for <1024px, top for >=1024px -->
<!-- Hide when AI mode is active -->
{#if !$isAskMode}
	<div class="fixed lg:bottom-10 bottom-22 left-0 right-0 z-50">
		<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
			<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
				<div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
					<div class="flex flex-row-reverse gap-6 justify-center items-center">
						<button
							onclick={toggleView}
							class="px-10 text-sky-800 font-semibold inset-shadow-sm inset-shadow-zinc-500/20 flex-shrink-0 bg-gradient-to-bl from-sky-200/20 to-violet-100/30 dark:bg-black/20 backdrop-blur-xl border-2 border-sky-500/20 dark:border-white/10 rounded-full p-3 shadow-xl shadow-gray-500/50 dark:shadow-blue-500/30 dark:hover:bg-white/10 hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 transition-all duration-300 ease-out cursor-pointer group"
						>
							{$isSimplifiedView ? 'Switch to Detailed View' : 'Switch to Simplified View'}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="fixed lg:bottom-10 bottom-22 left-0 right-0 z-50">
		<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
			<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
				<div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
					<div class="flex flex-row-reverse gap-6 justify-center items-center">
						<a
							href="https://openai.com/index/introducing-gpt-oss/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="OpenAI GPT-OSS 20B Model"
							class="px-10 text-sky-800 text-sm inset-shadow-sm inset-shadow-zinc-500/40 flex-shrink-0 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-3 shadow-lg shadow-gray-500/30 dark:shadow-blue-500/30 dark:hover:bg-white/10 hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 font-mono transition-all duration-300 ease-out hover:bg-white"
						>
							Using Model: <span class="font-semibold">OpenAI GPT-OSS 20B</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
