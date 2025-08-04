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
	class="scroll-mt-16 focus-visible:outline-none"
	in:fade={{ duration: 300 }}
	onclick={showModal}
	onkeydown={(e) => e.key === 'Enter' && showModal()}
	role="button"
	tabindex="0"
>
	{#if date !== ''}
		<!-- Render DateComponent only if date is provided -->
		<DateComponent date_string={date} />
	{/if}

	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div class="main-card">
				{@render children()}
			</div>
		</div>
	</div>
</section>
