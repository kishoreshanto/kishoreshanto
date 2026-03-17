<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { mountWelcomeScene } from '$lib/client/welcome-loader';

	const WELCOME_DURATION_MS = 1600;
	const WELCOME_FADE_MS = 120;

	onMount(() => {
		const loader = document.getElementById('app-loader');
		const canvasHost = document.getElementById('app-loader-canvas');

		if (!loader || loader.classList.contains('hidden')) {
			return;
		}

		let cleanupScene: (() => void) | undefined;
		let cancelled = false;
		let hideTimer = 0;
		let removeTimer = 0;

		const startedAt = Number(loader.dataset.startedAt ?? Date.now());
		loader.dataset.startedAt = String(startedAt);

		const hideLoader = () => {
			if (cancelled || loader.classList.contains('hidden')) {
				return;
			}

			loader.classList.add('hidden');
			loader.setAttribute('aria-busy', 'false');
			removeTimer = window.setTimeout(() => {
				try {
					loader.remove();
				} catch {
					// Ignore DOM removal races during hot reloads.
				}
			}, WELCOME_FADE_MS + 120);
		};

		const remaining = Math.max(0, WELCOME_DURATION_MS - (Date.now() - startedAt));
		hideTimer = window.setTimeout(hideLoader, remaining);

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (canvasHost && !prefersReducedMotion) {
			void mountWelcomeScene(canvasHost)
				.then((teardown) => {
					if (cancelled) {
						teardown();
						return;
					}

					cleanupScene = teardown;
				})
				.catch(() => {
					// Keep the CSS fallback loader if WebGL or the import is unavailable.
				});
		}

		return () => {
			cancelled = true;
			window.clearTimeout(hideTimer);
			window.clearTimeout(removeTimer);
			cleanupScene?.();
		};
	});

	let { children } = $props();

	const navItems = [
		{ label: 'Hey', href: '/' },
		{ label: 'Timeline', href: '/timeline' },
		{ label: 'Stories', href: '/story' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Chat', href: '/chat-with-me' }
	];

	let tabEls: HTMLAnchorElement[] = $state([]);
	let pillX = $state(0);
	let pillW = $state(0);
	let ready = $state(false);

	let activeIndex = $derived.by(() => {
		const path = page.url.pathname;
		const idx = navItems.findIndex((item) =>
			item.href === '/' ? path === '/' : path.startsWith(item.href)
		);
		return idx === -1 ? 0 : idx;
	});

	$effect(() => {
		const el = tabEls[activeIndex];
		if (!el) return;
		pillX = el.offsetLeft;
		pillW = el.offsetWidth;
		if (!ready) requestAnimationFrame(() => (ready = true));
	});

	onNavigate((navigation) => {
		const doc = document as Document & {
			startViewTransition?: (update: () => Promise<void> | void) => void;
		};

		if (!doc.startViewTransition) return;

		return new Promise<void>((resolve) => {
			doc.startViewTransition!(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<nav class="universal-navbar">
	<div class="universal-navbar-container">
		<div
			class="navbar-pill"
			class:navbar-pill--ready={ready}
			style="transform: translateX({pillX}px); width: {pillW}px;"
		></div>

		{#each navItems as item, i (item.href)}
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

<div class="route-transition-shell">
	<div class="route-transition-stage">
		{@render children()}
	</div>
</div>

<div id="footer" class="bottom-0 w-full rounded-t-3xl bg-[#f9d8b0] py-18 text-center text-gray-600">
	<p>Copyright © 2026 Kishore Shanto. All rights reserved.</p>
</div>
