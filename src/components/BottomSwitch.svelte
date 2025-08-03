<script lang="ts">
	import { isSimplifiedView, isAskMode } from '$lib/appStore';

	function toggleView() {
		isSimplifiedView.update(value => !value);
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
						class="px-10 text-sky-700 font-bold inset-shadow-sm inset-shadow-zinc-500/20 flex-shrink-0 bg-white/60 dark:bg-black/20 backdrop-blur-lg border-2 border-sky-500/60 dark:border-white/10 rounded-full p-3 shadow-xl shadow-gray-500/50 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 transition-all duration-300 ease-out cursor-pointer group">
						{$isSimplifiedView ? 'Switch to Detailed View' : 'Switch to Simplified View'}
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}