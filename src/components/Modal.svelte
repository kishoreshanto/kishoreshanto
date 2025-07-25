
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	function closeModal() {
		dispatch('close');
	}
</script>

<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
	on:click={closeModal}
	transition:fade={{ duration: 300 }}
>
	<div
		class="relative w-full max-w-2xl rounded-xl border border-zinc-100 bg-white/50 p-8 shadow-lg backdrop-blur-lg dark:border-zinc-700 dark:bg-zinc-800/50"
		on:click|stopPropagation
	>
		<button
			class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
		<div class="flex items-center justify-between">
			<h2 class="text-2xl font-bold">
				<slot name="title" />
			</h2>
		</div>
		<div class="mt-4">
			<slot name="content" />
		</div>
	</div>
</div>
