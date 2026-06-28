<script lang="ts">
	import './layout.css';
	// import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Footer from '$component/shared/Footer.svelte';
	import {
		getRouteTransitionDirection,
		getTopLevelNavigationIndex,
		topLevelNavigationItems
	} from '$lib/utils/navigation';
	import { isSmartphoneTouchDevice } from '$lib/utils/misc';
	// import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	/**
	 * BLOCK: Speed Insights Integration
	 * Inject the Speed Insights script in production environments to monitor real user performance metrics. We exclude local development environments to avoid skewing our analytics with test data.
	 */
	// if (browser) {
	// 	const isLocalPreview = /^(localhost|127(?:\.\d+){3}|0\.0\.0\.0)$/.test(
	// 		window.location.hostname
	// 	);

	// 	if (!isLocalPreview) injectSpeedInsights();
	// }

	// Default props
	let { children } = $props();

	// State variables
	let tabEls: HTMLAnchorElement[] = $state([]);
	let pillX = $state(0);
	let pillW = $state(0);
	let ready = $state(false);

	// Derived state
	let activeIndex = $derived.by(() => {
		return getTopLevelNavigationIndex(page.url.pathname);
	});
	let activeEl = $derived(tabEls[activeIndex]);

	// Effects - 1
	$effect(() => {
		// If there's no active element (e.g. on a non-matching route), we can skip the pill positioning logic
		if (!activeEl) return;

		// Position and size the pill to match the active tab
		pillX = activeEl.offsetLeft;
		pillW = activeEl.offsetWidth;

		// Mark the pill as ready to animate after the initial positioning
		ready = true;
	});

	onNavigate((navigation) => {
		const doc = document as Document & {
			startViewTransition?: (update: () => Promise<void> | void) => void;
		};

		// Uncomment the below lines to disable view transitions on smartphones and touch devices, where they may cause jank and perform poorly. The route direction data attribute will still be set, allowing for CSS-based transition effects if desired.
		if (isSmartphoneTouchDevice() || !doc.startViewTransition) {
			delete document.documentElement.dataset.routeDirection;
			return;
		}

		const fromPathname = navigation.from?.url.pathname;
		const toPathname = navigation.to?.url.pathname;
		const routeDirection =
			fromPathname && toPathname ? getRouteTransitionDirection(fromPathname, toPathname) : null;

		if (routeDirection) document.documentElement.dataset.routeDirection = routeDirection;
		else delete document.documentElement.dataset.routeDirection;

		// If view transitions aren't supported, we can skip the rest of this logic
		// if (!doc.startViewTransition) {
		// 	return;
		// }

		return new Promise<void>((resolve) => {
			const transition = doc.startViewTransition!(() => {
				resolve();
				navigation.complete;
			});

			void transition.finished.finally(() => {
				delete document.documentElement.dataset.routeDirection;
			});
		});
	});
</script>

<!-- Universal Navigation Bar -->
<nav class="universal-navbar">
	<div class="universal-navbar-container">
		<div
			class="navbar-pill"
			class:navbar-pill--ready={ready}
			style="transform: translateX({pillX}px); width: {pillW}px;"
		></div>

		{#each topLevelNavigationItems as item, i (item.href)}
			<a
				href={item.href}
				class="navbar-tab"
				class:navbar-tab--active={activeIndex === i}
				bind:this={tabEls[i]}
			>
				{item.label}
			</a>
		{/each}
	</div>
</nav>

<main>
	{@render children()}

	<Footer />
</main>
