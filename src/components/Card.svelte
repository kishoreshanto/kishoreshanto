<script lang="ts">
	import { fade } from 'svelte/transition';
	import DateComponent from './timeline/DateComponent.svelte';
	import type { Snippet } from 'svelte';

	// Using Svelte 5 props rune instead of export let
	interface Props {
		date: string;
		onshowmodal?: () => void;
		children: Snippet;
	}

	let { date, onshowmodal, children }: Props = $props();

	function showModal() {
		onshowmodal?.();
	}
</script>

<section
	class="scroll-mt-16 focus-visible:outline-none "
	in:fade={{ duration: 300 }}
	onclick={showModal}
	onkeydown={(e) => e.key === 'Enter' && showModal()}
	role="button"
	tabindex="0"
>
	<DateComponent date_string={date} />

	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div
				class="select-none mx-auto max-w-lg rounded-xl border border-zinc-300 bg-white/50 p-4 drop-shadow-xl backdrop-blur-md transition-transform duration-300 dark:border-zinc-700 dark:bg-zinc-800/30 lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto cursor-pointer hover:scale-[1.01] "
			>
				{@render children()}
			</div>
		</div>
	</div>
</section>