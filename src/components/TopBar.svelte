<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		searchTerm?: string;
		isAskMode?: boolean;
		onclearSearch?: () => void;
		onsearchInput?: (event: CustomEvent<{ value: string }>) => void;
		onaskQuestion?: (question: string) => void;
		ontoggleMode?: () => void;
	}

	let {
		searchTerm = '',
		isAskMode = false,
		onclearSearch,
		onsearchInput,
		onaskQuestion,
		ontoggleMode
	}: Props = $props();

	// Animation state for iOS slider
	let isTransitioning = $state(false);

	// Dynamic placeholder cycling with typewriter effect
	const placeholderMessages = [
		'Hi there...',
		'Search Anything...',
		'Or toggle AI mode to ask anything!'
	];

	let currentPlaceholderIndex = 0;
	let dynamicPlaceholder = $state('');
	let typewriterInterval: number;
	let cycleTimeout: number;
	let isTyping = $state(false);

	function typewriterEffect(text: string, callback?: () => void) {
		let currentText = '';
		let charIndex = 0;
		isTyping = true;

		// Clear any existing interval
		if (typewriterInterval) {
			clearInterval(typewriterInterval);
		}

		typewriterInterval = setInterval(() => {
			if (charIndex < text.length) {
				currentText += text[charIndex];
				dynamicPlaceholder = currentText;
				charIndex++;
			} else {
				clearInterval(typewriterInterval);
				isTyping = false;
				// Wait 3 seconds before starting to erase
				setTimeout(() => {
					eraseText(callback);
				}, 3000);
			}
		}, 100); // Typing speed
	}

	function eraseText(callback?: () => void) {
		if (isTyping) return;

		const currentText = dynamicPlaceholder;
		let charIndex = currentText.length;

		typewriterInterval = setInterval(() => {
			if (charIndex > 0) {
				dynamicPlaceholder = currentText.substring(0, charIndex - 1);
				charIndex--;
			} else {
				clearInterval(typewriterInterval);
				// Small pause before starting next message
				setTimeout(() => {
					callback?.();
				}, 500);
			}
		}, 50); // Faster erase speed
	}

	function startTypewriterCycle() {
		const currentMessage = placeholderMessages[currentPlaceholderIndex];
		typewriterEffect(currentMessage, () => {
			// Move to next message
			currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholderMessages.length;
			// Schedule next cycle
			cycleTimeout = setTimeout(startTypewriterCycle, 300);
		});
	}

	onMount(() => {
		// Start the typewriter animation
		startTypewriterCycle();
	});

	onDestroy(() => {
		if (typewriterInterval) {
			clearInterval(typewriterInterval);
		}
		if (cycleTimeout) {
			clearTimeout(cycleTimeout);
		}
	});

	function clearSearch() {
		onclearSearch?.();
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const customEvent = new CustomEvent('searchInput', {
			detail: { value: target.value }
		}) as CustomEvent<{ value: string }>;
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

	// Handle toggle with animation
	function handleToggle() {
		isTransitioning = true;
		ontoggleMode?.();
		// Reset transition state after animation completes
		setTimeout(() => {
			isTransitioning = false;
		}, 300);
	}
</script>

<!-- Fixed navigation controls - bottom for <1024px, top for >=1024px -->
<div class="fixed bottom-6 lg:top-6 lg:bottom-auto left-0 right-0 z-50">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
				<div class="flex flex-row-reverse gap-6 justify-center lg:justify-end items-center">
					<!-- <button class="inset-shadow-sm inset-shadow-zinc-500/20 flex-shrink-0 bg-white/40 dark:bg-black/20 backdrop-blur-lg border-[0.5px] border-white/10 dark:border-white/10 rounded-full p-3 shadow-lg shadow-gray-500/20 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 hover:-translate-y-[1px] hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 transition-all duration-300 ease-out group"
							onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						aria-label="Scroll to top">
						<svg xmlns="http://www.w3.org/2000/svg"
							 height="30px"
							 viewBox="0 -960 960 960"
							 width="30px"
							class="fill-gray-700 dark:fill-sky-400 group-hover:fill-gray-900 dark:group-hover:fill-sky-300 group-hover:-translate-y-[-.5px] transition-all duration-200">
							<path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z"/>
						</svg>
					</button> -->
					<!-- Mode Toggle Button -->

					<div class="relative flex-1 min-w-0">
						<input
							value={searchTerm}
							oninput={handleInput}
							onkeypress={handleKeyPress}
							placeholder={isAskMode
								? 'AI mode, ask anything about me...'
								: '> ' + dynamicPlaceholder}
							class="font-mono w-full inset-shadow-sm inset-shadow-zinc-500/20 bg-white/50 dark:bg-black/20 backdrop-blur-lg border-[0.5px] border-white/40 dark:border-white/10 rounded-full pl-4 pr-12 py-3 shadow-lg shadow-gray-600/30 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 focus:bg-white/20 dark:focus:bg-white/10 hover:shadow-xl focus:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 focus:shadow-gray-500/30 dark:focus:shadow-blue-500/40 transition-all duration-300 ease-out text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none typewriter-placeholder"
						/>

						{#if isAskMode}
							<!-- AI Icon always visible in ask mode -->
							{#if searchTerm}
								<!-- Clickable AI Icon when there's text -->
								<button
									onclick={handleAskClick}
									aria-label="Ask question"
									class="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-all duration-200 flex items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
									>
										<path
											d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"
											fill="currentColor"
											stroke="none"
										/>
										<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
									</svg>
								</button>
							{:else}
								<!-- Static AI Icon when empty -->
								<div
									class="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="text-blue-500 dark:text-blue-400"
									>
										<path
											d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"
											fill="currentColor"
											stroke="none"
										/>
										<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
									</svg>
								</div>
							{/if}
						{:else}
							<!-- Search mode icons -->
							{#if searchTerm}
								<!-- Clear Button for search mode -->
								<button
									onclick={clearSearch}
									aria-label="Clear search"
									class="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
									>
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>
								</button>
							{:else}
								<!-- Search Icon for search mode -->
								<div
									class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="text-gray-400 dark:text-gray-500"
									>
										<circle cx="11" cy="11" r="8"></circle>
										<path d="m21 21-4.35-4.35"></path>
									</svg>
								</div>
							{/if}
						{/if}
					</div>

					<!-- iOS Style Toggle Switch -->
					<div class="ios-toggle-container">
						<button
							onclick={handleToggle}
							class="ios-toggle {isAskMode ? 'ai-mode' : 'search-mode'} {isTransitioning
								? 'transitioning'
								: ''}"
							aria-label={isAskMode ? 'Switch to search mode' : 'Switch to ask AI mode'}
						>
							<!-- Background track -->
							<div class="toggle-track"></div>

							<!-- Sliding thumb -->
							<div class="toggle-thumb">
								{#if isAskMode}
									<!-- AI Icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="toggle-icon"
									>
										<path
											d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"
											fill="currentColor"
											stroke="none"
										/>
										<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
									</svg>
								{:else}
									<!-- Search Icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="toggle-icon"
									>
										<circle cx="11" cy="11" r="8" />
										<path d="m21 21-4.35-4.35" />
									</svg>
								{/if}
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Ensure proper placeholder styling for typewriter effect */
	.typewriter-placeholder::-webkit-input-placeholder {
		color: rgb(107 114 128);
		font-family:
			ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
	}

	.typewriter-placeholder::-moz-placeholder {
		color: rgb(107 114 128);
		opacity: 1;
		font-family:
			ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
	}

	/* Dark mode placeholder colors */
	:global(.dark) .typewriter-placeholder::-webkit-input-placeholder {
		color: rgb(156 163 175);
	}

	:global(.dark) .typewriter-placeholder::-moz-placeholder {
		color: rgb(156 163 175);
		opacity: 1;
	}

	/* iOS Style Toggle Switch */
	.ios-toggle-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.ios-toggle {
		position: relative;
		width: 60px;
		height: 34px;
		background: transparent;
		border: none;
		cursor: pointer;
		border-radius: 17px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
		padding: 0;
	}

	.toggle-track {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 17px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(12px);
		border: 0.5px solid rgba(255, 255, 255, 0.1);
		box-shadow:
			inset 0 1px 2px rgba(0, 0, 0, 0.1),
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	.toggle-thumb {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 30px;
		height: 30px;
		background: white;
		border-radius: 50%;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06),
			0 1px 3px 0 rgba(0, 0, 0, 0.1);
		transform: translateX(0);
	}

	.toggle-icon {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		color: #6b7280;
		opacity: 1;
		transform: scale(1);
	}

	/* Search mode styling */
	.ios-toggle.search-mode .toggle-track {
		background: rgba(107, 114, 128, 0.2);
	}

	.ios-toggle.search-mode .toggle-thumb {
		transform: translateX(0);
		/* background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); */
	}

	.ios-toggle.search-mode .toggle-icon {
		color: #6b7280;
	}

	/* AI mode styling */
	.ios-toggle.ai-mode .toggle-track {
		background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
		box-shadow:
			inset 0 1px 2px rgba(59, 130, 246, 0.2),
			0 4px 6px -1px rgba(59, 130, 246, 0.3),
			0 2px 4px -1px rgba(139, 92, 246, 0.2);
	}

	.ios-toggle.ai-mode .toggle-thumb {
		transform: translateX(26px);
		background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
		box-shadow:
			0 4px 12px -2px rgba(59, 130, 246, 0.4),
			0 2px 4px -1px rgba(139, 92, 246, 0.3);
	}

	.ios-toggle.ai-mode .toggle-icon {
		color: #3b82f6;
	}

	/* Dark mode styles */
	:global(.dark) .ios-toggle.search-mode .toggle-track {
		background: rgba(75, 85, 99, 0.3);
	}

	:global(.dark) .ios-toggle.search-mode .toggle-thumb {
		background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
	}

	:global(.dark) .ios-toggle.search-mode .toggle-icon {
		color: #9ca3af;
	}

	:global(.dark) .ios-toggle.ai-mode .toggle-track {
		background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
	}

	:global(.dark) .ios-toggle.ai-mode .toggle-thumb {
		background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
	}

	:global(.dark) .ios-toggle.ai-mode .toggle-icon {
		color: #60a5fa;
	}

	.ios-toggle:hover .toggle-thumb {
		transform: translateX(0) scale(1.15);
		box-shadow:
			0 6px 20px -4px rgba(0, 0, 0, 0.15),
			0 4px 8px -2px rgba(0, 0, 0, 0.1);
	}

	.ios-toggle.ai-mode:hover .toggle-thumb {
		transform: translateX(26px) scale(1.15);
		box-shadow:
			0 6px 20px -4px rgba(59, 130, 246, 0.5),
			0 4px 8px -2px rgba(139, 92, 246, 0.4);
	}

	/* Active/pressed state */
	.ios-toggle:active {
		transform: scale(0.98);
	}

	.ios-toggle:active .toggle-thumb {
		transform: translateX(0) scale(0.95);
	}

	.ios-toggle.ai-mode:active .toggle-thumb {
		transform: translateX(26px) scale(0.95);
	}

	/* Transition animation during mode switch */
	.ios-toggle.transitioning .toggle-thumb {
		transform: translateX(13px) scale(1.1);
	}

	.ios-toggle.transitioning .toggle-icon {
		opacity: 0;
		transform: scale(0.8);
	}

	/* Focus styles for accessibility */
	.ios-toggle:focus-visible {
		outline: 2px solid #3b82f6;
		outline-offset: 2px;
	}

	:global(.dark) .ios-toggle:focus-visible {
		outline-color: #60a5fa;
	}
</style>
