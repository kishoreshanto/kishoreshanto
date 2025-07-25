
<svelte:window on:keydown={handleKeydown} />

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let maxWidth: string = 'max-w-4xl'; // Default to larger width, can be overridden
	export let maxHeight: string = 'max-h-[80vh]'; // Default max height, can be overridden

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" transition:fade={{ duration: 300 }}>
	<div
		class="relative w-full {maxWidth} {maxHeight} rounded-xl border border-zinc-100 bg-white/80 shadow-lg backdrop-blur-lg dark:border-zinc-700 dark:bg-zinc-800/50 flex flex-col"
		role="dialog"
		aria-modal="true"
	>
		<button
			class="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
			on:click={closeModal}
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
		<div class="overflow-y-auto overflow-x-hidden p-8 pr-12">
			<slot />
		</div>
	</div>
</div>
