<script lang="ts">
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
	class="timeline-back-to-top"
	class:timeline-back-to-top--visible={showBackToTop}
	onclick={scrollToTop}
	aria-label="Back to top"
>
	<span class="timeline-back-to-top__label">Back to Top</span>
</button>

<style>
	.timeline-back-to-top {
		position: fixed;
		right: clamp(1rem, 3vw, 2.5rem);
		bottom: clamp(1.25rem, 4vw, 2.25rem);
		z-index: 80;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.82rem 1rem;
		border: 1px solid var(--stroke-soft);
		border-radius: 9999px;
		background: linear-gradient(145deg, rgb(255 250 240 / 0.96), rgb(245 237 217 / 0.92));
		box-shadow:
			0 18px 32px -22px var(--elevation-strong),
			0 0 0 1px rgb(255 255 255 / 0.45) inset;
		color: var(--ink-title);
		font-family: var(--font-lora);
		font-size: 0.88rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		opacity: 0;
		pointer-events: none;
		text-transform: uppercase;
		transform: translateY(1rem) scale(0.96);
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

	.timeline-back-to-top__arrow {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.7rem;
		height: 1.7rem;
		border-radius: 9999px;
		background: linear-gradient(180deg, rgb(255 210 117 / 0.95), rgb(196 154 60 / 0.92));
		color: var(--tone-ink-900);
		font-size: 1rem;
		line-height: 1;
	}

	@media (max-width: 640px) {
		.timeline-back-to-top {
			right: 0.85rem;
			bottom: 1rem;
			padding-inline: 0.9rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.timeline-back-to-top {
			transition: opacity 1ms;
		}
	}
</style>
