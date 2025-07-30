
<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		maxWidth?: string;
		maxHeight?: string;
		onclose?: () => void;
		children: Snippet;
	}

	let { maxWidth = 'max-w-4xl', maxHeight = 'max-h-[80vh]', onclose, children }: Props = $props();

	function closeModal() {
		onclose?.();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		// Only close if clicking on the backdrop itself, not the modal content
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleBackdropKeydown(event: KeyboardEvent) {
		// Handle Enter and Space keys for accessibility
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			closeModal();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div 
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" 
	transition:fade={{ duration: 200 }}
	onclick={handleBackdropClick}
	onkeydown={handleBackdropKeydown}
	role="button"
	tabindex="-1"
>
	<div
		class="relative w-full {maxWidth} {maxHeight} rounded-xl border border-zinc-100 bg-white/80 shadow-lg backdrop-blur-lg dark:border-zinc-700 dark:bg-zinc-800/50 flex flex-col"
		role="dialog"
		aria-modal="true"
	>
		<button
			class="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
			onclick={closeModal}
			aria-label="Close modal"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
		
		<!-- Scrollable content area -->
		<div class="overflow-y-auto overflow-x-hidden p-8 pr-12 hide-scrollbar">
			{@render children()}
		</div>
	</div>
</div>


<style>
	/* Class to hide scrollbars */
	.hide-scrollbar {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbars for WebKit browsers */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
