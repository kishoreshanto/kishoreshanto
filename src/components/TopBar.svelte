<script lang="ts">
	interface Props {
		searchTerm?: string;
		onclearSearch?: () => void;
		onsearchInput?: (event: CustomEvent<{value: string}>) => void;
	}

	let { searchTerm = '', onclearSearch, onsearchInput }: Props = $props();

	function clearSearch() {
		onclearSearch?.();
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const customEvent = new CustomEvent('searchInput', { 
			detail: { value: target.value } 
		}) as CustomEvent<{value: string}>;
		onsearchInput?.(customEvent);
	}
</script>

<!-- Fixed navigation controls - bottom for <1024px, top for >=1024px -->
<div class="fixed bottom-6 lg:top-6 lg:bottom-auto left-0 right-0 z-50">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
				<div class="flex flex-row-reverse gap-6 justify-center lg:justify-end items-center">
					<button class="flex-shrink-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full p-3 shadow-lg shadow-gray-500/20 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 transition-all duration-300 ease-out group"
							onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						aria-label="Scroll to top">
						<svg xmlns="http://www.w3.org/2000/svg"
							 height="30px"
							 viewBox="0 -960 960 960"
							 width="30px"
							 class="fill-gray-700 dark:fill-sky-400 group-hover:fill-gray-900 dark:group-hover:fill-sky-300 group-hover:-translate-y-0.5 transition-all duration-200">
							<path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z"/>
						</svg>
					</button>

					<div class="relative flex-1 min-w-0">
						<input 
							value={searchTerm}
							oninput={handleInput}
							placeholder="Search Anything..."
							class="font-mono w-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full pl-4 pr-12 py-3 shadow-lg shadow-gray-500/20 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 focus:bg-white/20 dark:focus:bg-white/10 hover:-translate-y-0.5 focus:-translate-y-0.5 hover:shadow-xl focus:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 focus:shadow-gray-500/30 dark:focus:shadow-blue-500/40 transition-all duration-300 ease-out text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"/>
						
						{#if searchTerm}
							<button 
								onclick={clearSearch}
								aria-label="Clear search"
								class="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-200 flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" 
									 width="20" 
									 height="20" 
									 viewBox="0 0 24 24" 
									 fill="none" 
									 stroke="currentColor" 
									 stroke-width="2" 
									 stroke-linecap="round" 
									 stroke-linejoin="round"
									 class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>
						{:else}
							<div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" 
									 width="20" 
									 height="20" 
									 viewBox="0 0 24 24" 
									 fill="none" 
									 stroke="currentColor" 
									 stroke-width="2" 
									 stroke-linecap="round" 
									 stroke-linejoin="round"
									 class="text-gray-400 dark:text-gray-500">
									<circle cx="11" cy="11" r="8"></circle>
									<path d="m21 21-4.35-4.35"></path>
								</svg>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>