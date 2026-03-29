<script lang="ts">
	import UpArrowIcon from './svg/UpArrowIcon.svelte';

	let scrollY = $state(0);

	let showBackToTop = $derived(scrollY > 760);

	function scrollToTop() {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		window.scrollTo({
			top: 0,
			behavior: prefersReducedMotion ? 'auto' : 'smooth'
		});
	}
</script>

<svelte:window bind:scrollY />

<button
	type="button"
	class="timeline-back-to-top fixed right-8 bottom-8 z-80 inline-flex transform-[translateY(1rem)_scale(0.96)] items-center gap-2 rounded-full border-2 border-amber-600/20 bg-amber-100/20 p-3.5 text-amber-600/70 uppercase opacity-0 shadow-sm backdrop-blur-sm hover:border-amber-600 hover:text-amber-600 md:right-7 md:bottom-7 md:px-3.5 md:py-4"
	class:timeline-back-to-top--visible={showBackToTop}
	onclick={scrollToTop}
	aria-label="Back to top"
>
	<UpArrowIcon />
	<span class="hidden cursor-pointer font-lora font-bold md:block">Back to Top</span>
</button>

<style>
	.timeline-back-to-top {
		transition:
			opacity var(--motion-fast) var(--easing-standard),
			transform var(--motion-base) var(--easing-pill),
			border-color var(--motion-fast) var(--easing-standard),
			box-shadow var(--motion-fast) var(--easing-standard),
			color var(--motion-fast) var(--easing-standard);
	}

	.timeline-back-to-top--visible {
		opacity: 1;
		pointer-events: auto;
		transform: translateY(0) scale(1);
	}

	.timeline-back-to-top:hover {
		border-color: var(--stroke-strong);
		box-shadow:
			0 24px 40px -24px var(--elevation-strong),
			0 0 0 1px rgb(255 255 255 / 0.62) inset;
		color: var(--accent-primary);
	}

	@media (prefers-reduced-motion: reduce) {
		.timeline-back-to-top {
			transition: opacity 1ms;
		}
	}
</style>
