<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	export let date: string;
	import DateComponent from './timeline/DateComponent.svelte';

	const dispatch = createEventDispatcher();

	function showModal() {
		dispatch('showmodal');
	}
</script>

<section
	class="scroll-mt-16"
	in:fade={{ duration: 500 }}
	on:click={showModal}
	on:keydown={(e) => e.key === 'Enter' && showModal()}
	role="button"
	tabindex="0"
>
	<DateComponent date_string={date} />

	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div
				class="select-none mx-auto max-w-lg rounded-xl border border-zinc-300 bg-white/30 p-4 drop-shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 dark:border-zinc-700 dark:bg-zinc-800/30 lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto"
			>
				<slot>
					<p class="text-gray-400">Place your content here...</p>
				</slot>
			</div>
		</div>
	</div>
</section>