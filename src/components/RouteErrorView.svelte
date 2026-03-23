<script lang="ts">
	type Action = {
		href: string;
		label: string;
		variant?: 'primary' | 'secondary';
	};

	type Props = {
		status: number;
		title: string;
		message: string;
		description: string;
		eyebrow?: string;
		section?: string;
		actions?: Action[];
	};

	let {
		status,
		title,
		message,
		description,
		eyebrow = 'Error boundary',
		section = 'Site',
		actions = []
	}: Props = $props();
</script>

<main class="mx-5 mt-12 mb-8 py-12 sm:px-10 md:container md:mx-auto md:px-10">
	<article class="px-6 py-8 sm:px-8 lg:px-10">
		<h1
			class="mt-5 text-center font-lora text-3xl leading-tight font-semibold text-amber-600 md:text-5xl"
		>
			{title}
		</h1>

		<div class="mt-4 flex flex-wrap items-center justify-center gap-3">
			<span class="error-section-chip">{section}/{eyebrow}</span>
			<span class="error-status-chip">Code {status}: {message}</span>
		</div>

		<p class="mt-8 text-center font-lora text-lg leading-relaxed text-gray-700 md:text-xl">
			{description}
		</p>

		{#if actions.length > 0}
			<div class="mt-12 flex flex-wrap justify-center gap-3">
				{#each actions as action (action.href)}
					<a
						class={[
							'error-action rounded-full px-5 py-3.5 font-mono text-xs tracking-[0.2em] uppercase',
							action.variant === 'secondary'
								? 'error-action-secondary'
								: 'brand-button text-amber-50'
						]}
						href={action.href}
					>
						{action.label}
					</a>
				{/each}
			</div>
		{/if}
	</article>
</main>

<style>
	.error-section-chip,
	.error-status-chip {
		border: 1px solid rgb(44 24 16 / 0.12);
		border-radius: 999px;
		background: rgb(255 250 240 / 0.78);
		padding: 0.7rem 1rem;
		font-family: var(--font-mono);
		font-size: 0.76rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgb(44 24 16 / 0.82);
	}

	.error-status-chip {
		background: rgb(255 210 117 / 0.34);
	}

	.error-action {
		text-decoration: none;
		transition:
			background-color var(--motion-fast) var(--easing-standard),
			color var(--motion-fast) var(--easing-standard),
			border-color var(--motion-fast) var(--easing-standard),
			transform var(--motion-fast) var(--easing-standard);
	}

	.error-action-secondary {
		border: 1px solid rgb(132 85 34 / 0.24);
		background: rgb(255 250 240 / 0.84);
		color: var(--ink-title);
		box-shadow: 0 16px 28px -20px var(--elevation-soft);
	}

	.error-action-secondary:hover {
		border-color: rgb(132 85 34 / 0.42);
		background: rgb(255 210 117 / 0.34);
		color: var(--ink-title-strong);
	}
</style>
