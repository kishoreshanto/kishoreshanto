<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';

	// Hide the splash loader once the Svelte 5 app has fully mounted
	onMount(() => {
		const loader = document.getElementById('app-loader');
		if (loader && !loader.classList.contains('hidden')) {
			loader.classList.add('hidden');
			loader.setAttribute('aria-busy', 'false');
			setTimeout(() => {
				try { loader.remove(); } catch (_) {}
			}, 320);
		}
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
