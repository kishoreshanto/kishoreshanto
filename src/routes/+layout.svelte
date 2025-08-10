<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import data from '$lib/data_en.json';
	import '../styles/global.css';
	import TimeLine from '../components/visuals/TimeLine.svelte';
	import LeftPanel from '../components/LeftPanel.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import BottomSwitch from '../components/BottomSwitch.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	injectSpeedInsights();

	const page_title = data.page_title;

	onMount(() => {
		// Signal that the app is hydrated and initial UI is ready
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new Event('app:ready'));
			// Defensive: hide loader directly if still present
			const el = document.getElementById('app-loader');
			if (el) {
				el.classList.add('hidden');
				setTimeout(() => {
					try {
						el.remove();
					} catch {}
				}, 320);
			}
		}
	});
</script>

<svelte:head>
	{#if page_title}
		<title>{page_title}</title>
	{:else}
		<title>Portfolio</title>
	{/if}
</svelte:head>

<main>
	<LeftPanel />

	<div class="right-panel">
		<div class="right-panel-container">
			<TimeLine />
		</div>

		<BottomSwitch />

		{@render children()}
	</div>
</main>
