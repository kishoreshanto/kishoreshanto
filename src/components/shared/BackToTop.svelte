<script lang="ts">
	import UpArrowIcon from "./svg/UpArrowIcon.svelte";

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
	class="timeline-back-to-top fixed inline-flex z-80 items-center gap-2 p-3.5 md:px-3.5 md:py-4 rounded-full opacity-0 uppercase transform-[translateY(1rem)_scale(0.96)] border-amber-600/20 border-2 hover:border-amber-600 bottom-8 right-8 md:bottom-7 md:right-7 text-amber-600/70 hover:text-amber-600 bg-amber-100/20 backdrop-blur-sm shadow-sm"
	class:timeline-back-to-top--visible={showBackToTop}
	onclick={scrollToTop}
	aria-label="Back to top"
>   
    
    
    <UpArrowIcon />
	<span class="hidden md:block font-lora font-bold cursor-pointer ">Back to Top</span>
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
