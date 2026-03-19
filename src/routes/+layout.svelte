<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Footer from '$component/Footer.svelte';

	const LOADER_MIN_DURATION_MS = 700;
	const LOADER_FADE_MS = 180;

	function waitForWindowLoad() {
		if (document.readyState === 'complete') {
			return Promise.resolve();
		}

		return new Promise<void>((resolve) => {
			window.addEventListener('load', () => resolve(), { once: true });
		});
	}

	function waitForCriticalFonts() {
		const fontSet = (document as Document & { fonts?: FontFaceSet }).fonts;
		if (!fontSet) {
			return Promise.resolve();
		}

		const criticalFonts = [
			'600 1em "JetBrains Mono"',
			'400 1em "Lora"',
			'600 1em "Lora"',
			'400 1em "Crimson Text"',
			'700 1em "Crimson Text"',
			'400 1em "IvyOra Text"',
			'700 1em "IvyOra Text"'
		];

		return Promise.all(criticalFonts.map((descriptor) => fontSet.load(descriptor))).catch(() => undefined);
	}

	function waitForFonts() {
		const fontSet = (document as Document & { fonts?: FontFaceSet }).fonts;
		if (!fontSet) {
			return Promise.resolve();
		}

		return waitForCriticalFonts().then(() => fontSet.ready.catch(() => undefined));
	}

	function waitForHydratedPaint() {
		return new Promise<void>((resolve) => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => resolve());
			});
		});
	}

	onMount(() => {
		const loader = document.getElementById('app-loader');

		if (!loader || loader.classList.contains('hidden')) {
			return;
		}

		let cancelled = false;
		let removeTimer = 0;

		const startedAt = Number(loader.dataset.startedAt ?? Date.now());
		loader.dataset.startedAt = String(startedAt);

		const hideLoader = () => {
			if (cancelled || loader.classList.contains('hidden')) {
				return;
			}

			document.body.removeAttribute('data-loader-active');
			loader.classList.add('hidden');
			loader.setAttribute('aria-busy', 'false');
			removeTimer = window.setTimeout(() => {
				try {
					loader.remove();
				} catch {
					// Ignore DOM removal races during hot reloads.
				}
			}, LOADER_FADE_MS + 140);
		};

		const remaining = Math.max(0, LOADER_MIN_DURATION_MS - (Date.now() - startedAt));

		void Promise.all([
			waitForWindowLoad(),
			waitForFonts(),
			waitForHydratedPaint(),
			new Promise<void>((resolve) => {
				window.setTimeout(() => resolve(), remaining);
			})
		]).then(() => {
			hideLoader();
		});

		return () => {
			cancelled = true;
			window.clearTimeout(removeTimer);
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

<Footer />
