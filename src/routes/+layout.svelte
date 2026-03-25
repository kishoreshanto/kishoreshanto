<script lang="ts">
	import './layout.css';
	import { browser } from '$app/environment';
	import { goto, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Footer from '$component/shared/Footer.svelte';
	import { swipe } from '$lib/actions/swipe';
	import {
		getAdjacentSwipeNavigationPath,
		getExactSwipeNavigationPath,
		getRouteTransitionDirection,
		getTopLevelNavigationIndex,
		topLevelNavigationItems,
		type SwipeStepDirection
	} from '$lib/utils/navigation';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';

	if (browser) {
		const isLocalPreview = /^(localhost|127(?:\.\d+){3}|0\.0\.0\.0)$/.test(
			window.location.hostname
		);

		if (!isLocalPreview) {
			injectSpeedInsights();
		}
	}

	function isSmartphoneTouchDevice() {
		if (!browser) {
			return false;
		}

		const mobileNavigator = navigator as Navigator & {
			userAgentData?: {
				mobile?: boolean;
			};
		};
		const mobileUserAgent =
			mobileNavigator.userAgentData?.mobile ??
			/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(mobileNavigator.userAgent);

		return (
			mobileUserAgent &&
			window.matchMedia('(max-width: 767px)').matches &&
			window.matchMedia('(hover: none) and (pointer: coarse)').matches &&
			mobileNavigator.maxTouchPoints > 0
		);
	}

	let { children } = $props();

	let tabEls: HTMLAnchorElement[] = $state([]);
	let pillX = $state(0);
	let pillW = $state(0);
	let ready = $state(false);
	let touchSwipeEnabled = $state(isSmartphoneTouchDevice());
	let swipeNavigationLocked = $state(false);

	let activeIndex = $derived.by(() => {
		return getTopLevelNavigationIndex(page.url.pathname);
	});

	let activeEl = $derived(tabEls[activeIndex]);
	let activeSwipePath = $derived(getExactSwipeNavigationPath(page.url.pathname));
	let swipeDisabled = $derived(
		!touchSwipeEnabled || activeSwipePath === null || swipeNavigationLocked
	);

	// Previous Version
	//
	// $effect(() => {
	// 	const el = tabEls[activeIndex];
	// 	if (!el) return;
	// 	pillX = el.offsetLeft;
	// 	pillW = el.offsetWidth;
	// 	if (!ready) requestAnimationFrame(() => (ready = true));
	// });

	$effect(() => {
		if (touchSwipeEnabled) {
			ready = false;
			return;
		}

		if (!activeEl) return;
		pillX = activeEl.offsetLeft;
		pillW = activeEl.offsetWidth;
		ready = true;
	});

	onMount(() => {
		const phoneViewportQuery = window.matchMedia('(max-width: 767px)');
		const coarsePointerQuery = window.matchMedia('(hover: none) and (pointer: coarse)');

		const updateTouchSwipeEnabled = () => {
			touchSwipeEnabled = isSmartphoneTouchDevice();
		};

		updateTouchSwipeEnabled();
		phoneViewportQuery.addEventListener('change', updateTouchSwipeEnabled);
		coarsePointerQuery.addEventListener('change', updateTouchSwipeEnabled);

		return () => {
			phoneViewportQuery.removeEventListener('change', updateTouchSwipeEnabled);
			coarsePointerQuery.removeEventListener('change', updateTouchSwipeEnabled);
		};
	});

	async function navigateBySwipe(direction: SwipeStepDirection) {
		if (swipeNavigationLocked) {
			return;
		}

		const nextPath = getAdjacentSwipeNavigationPath(page.url.pathname, direction);

		if (!nextPath) {
			return;
		}

		swipeNavigationLocked = true;

		try {
			await goto(nextPath);
		} finally {
			swipeNavigationLocked = false;
		}
	}

	onNavigate((navigation) => {
		const doc = document as Document & {
			startViewTransition?: (update: () => Promise<void> | void) => void;
		};
		const fromPathname = navigation.from?.url.pathname;
		const toPathname = navigation.to?.url.pathname;
		const routeDirection =
			fromPathname && toPathname ? getRouteTransitionDirection(fromPathname, toPathname) : null;

		if (routeDirection) {
			document.documentElement.dataset.routeDirection = routeDirection;
		} else {
			delete document.documentElement.dataset.routeDirection;
		}

		if (!doc.startViewTransition) {
			return;
		}

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

<main
	use:swipe={{
		onSwipeLeft: () => void navigateBySwipe(1),
		onSwipeRight: () => void navigateBySwipe(-1),
		disabled: swipeDisabled
	}}
>
	{@render children()}

	<Footer />
</main>
