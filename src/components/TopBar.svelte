<script lang="ts">
	interface Props {
		searchTerm?: string;
		isAskMode?: boolean;
		onclearSearch?: () => void;
		onsearchInput?: (event: CustomEvent<{value: string}>) => void;
		onaskQuestion?: (question: string) => void;
		ontoggleMode?: () => void;
	}

	let { searchTerm = '', isAskMode = false, onclearSearch, onsearchInput, onaskQuestion, ontoggleMode }: Props = $props();

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

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter' && isAskMode && searchTerm.trim()) {
			onaskQuestion?.(searchTerm.trim());
		}
	}

	function handleAskClick() {
		if (isAskMode && searchTerm.trim()) {
			onaskQuestion?.(searchTerm.trim());
		}
	}

	$effect(() => {
		// Add event listener for Enter key
		const input = document.querySelector('input[data-ask-input]') as HTMLInputElement;
		if (input && isAskMode) {
			input.addEventListener('keypress', handleKeyPress);
			return () => input.removeEventListener('keypress', handleKeyPress);
		}
	});
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
					<!-- Mode Toggle Button -->
					<button 
						onclick={ontoggleMode}
						class="flex-shrink-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full p-3 shadow-lg shadow-gray-500/20 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 transition-all duration-300 ease-out group"
						aria-label={isAskMode ? "Switch to search mode" : "Switch to ask AI mode"}>
						{#if isAskMode}
							<!-- Search Icon when in Ask mode -->
							<svg xmlns="http://www.w3.org/2000/svg"
								 height="30px"
								 viewBox="0 0 24 24"
								 width="30px"
								 class="fill-gray-700 dark:fill-sky-400 group-hover:fill-gray-900 dark:group-hover:fill-sky-300 group-hover:-translate-y-0.5 transition-all duration-200">
								<circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
								<path d="m21 21-4.35-4.35" fill="none" stroke="currentColor" stroke-width="2"/>
							</svg>
						{:else}
							<!-- AI Icon when in Search mode -->
							<svg xmlns="http://www.w3.org/2000/svg"
								 height="30px"
								 viewBox="0 0 24 24"
								 width="30px"
								 class="group-hover:-translate-y-0.5 transition-all duration-200">
								<defs>
									<linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
										<stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
										<stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
									</linearGradient>
								</defs>
								<path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" fill="url(#aiGradient)"/>
								<circle cx="12" cy="12" r="2" fill="url(#aiGradient)"/>
							</svg>
						{/if}
					</button>



					<div class="relative flex-1 min-w-0">
						<input 
							value={searchTerm}
							oninput={handleInput}
							data-ask-input
							placeholder={isAskMode ? "Ask anything about me..." : "Search Anything..."}
							class="font-mono w-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full pl-4 pr-12 py-3 shadow-lg shadow-gray-500/20 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 focus:bg-white/20 dark:focus:bg-white/10 hover:-translate-y-0.5 focus:-translate-y-0.5 hover:shadow-xl focus:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 focus:shadow-gray-500/30 dark:focus:shadow-blue-500/40 transition-all duration-300 ease-out text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"/>
						
						{#if searchTerm}
							{#if isAskMode}
								<!-- Ask Button for AI mode -->
								<button 
									onclick={handleAskClick}
									aria-label="Ask question"
									class="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" 
										 width="16" 
										 height="16" 
										 viewBox="0 0 24 24" 
										 fill="none" 
										 stroke="currentColor" 
										 stroke-width="2" 
										 stroke-linecap="round" 
										 stroke-linejoin="round"
										 class="text-white">
										<path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" fill="currentColor" stroke="none"/>
										<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
									</svg>
								</button>
							{:else}
								<!-- Clear Button for search mode -->
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
							{/if}
						{:else}
							<div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center">
								{#if isAskMode}
									<!-- AI Icon for ask mode -->
									<svg xmlns="http://www.w3.org/2000/svg" 
										 width="20" 
										 height="20" 
										 viewBox="0 0 24 24" 
										 fill="none" 
										 stroke="currentColor" 
										 stroke-width="2" 
										 stroke-linecap="round" 
										 stroke-linejoin="round"
										 class="text-blue-500 dark:text-blue-400">
										<path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" fill="currentColor" stroke="none"/>
										<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
									</svg>
								{:else}
									<!-- Search Icon for search mode -->
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
								{/if}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>