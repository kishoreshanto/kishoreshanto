<script lang="ts">
	interface Props {
		onclearSearch?: () => void;
	}

	let { onclearSearch }: Props = $props();

	function clearSearch() {
		onclearSearch?.();
	}
</script>

<section class="scroll-mt-16 focus-visible:outline-none">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div
				class="select-none mx-auto max-w-lg rounded-xl border border-zinc-300 bg-white/50 p-4 drop-shadow-xl backdrop-blur-md transition-transform duration-300 dark:border-zinc-700 dark:bg-zinc-800/30 lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto cursor-pointer hover:scale-[1.01] alighn-center text-center"
			>
			<div class="space-y-4 py-4">
				<svg xmlns="http://www.w3.org/2000/svg" 
					 width="48" 
					 height="48" 
					 viewBox="0 0 24 24" 
					 fill="none" 
					 stroke="currentColor" 
					 stroke-width="2" 
					 stroke-linecap="round" 
					 stroke-linejoin="round"
					 class="mx-auto text-gray-400 dark:text-gray-500">
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.35-4.35"></path>
				</svg>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">No projects found</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Try a different search term or 
							<button onclick={clearSearch} class="text-sky-600 dark:text-sky-400 hover:underline">
						clear the search
					</button>
				</p>
			</div>
			</div>
		</div>
	</div>
</section>