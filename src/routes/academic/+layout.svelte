<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';

	let { children } = $props();
	let isMenuOpen = $state(false);

	const pathname = $derived(page.url.pathname);

	function isActive(href: '/academic' | '/academic/research' | '/academic/projects') {
		if (href === '/academic') {
			return pathname === href;
		}

		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500;600;700&display=swap');
		@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

		/* Set font family */
		.brand-font {
			font-family: 'Cormorant SC', serif;
		}

		/* Basic styling for the layout */
		body {
			font-family: 'Lora', serif;
		}

		/* Fix the print styles */
		@media print {
		}
	</style>
</svelte:head>

<div class="m-4">
	<!-- Navigation -->
	<nav
		class="relative mb-6 flex items-center justify-between border-t-2 border-b-2 border-gray-200 px-4 py-4"
	>
		<div class="brand-font text-2xl text-gray-800">
			Hello, I'm <span class="font-bold text-amber-600">Biswas</span>
		</div>

		<button
			type="button"
			class="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/80 bg-amber-50 text-amber-700 shadow-[0_10px_30px_rgba(168,103,0,0.08)] transition hover:border-amber-300 hover:bg-amber-100/80 hover:text-amber-800 focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:outline-none md:hidden"
			aria-controls="nav-links-mobile"
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			onclick={() => (isMenuOpen = !isMenuOpen)}
		>
			<span class="sr-only">Toggle navigation</span>
			<span class="relative h-[13px] w-4">
				<span
					class={[
						'absolute left-0 h-0.5 w-4 rounded-full bg-current transition duration-200 ease-out',
						isMenuOpen ? 'top-[6px] rotate-45' : 'top-0'
					]}
				></span>
				<span
					class={[
						'absolute top-[6px] left-0 h-0.5 w-4 rounded-full bg-current transition duration-200 ease-out',
						isMenuOpen ? 'opacity-0' : 'opacity-100'
					]}
				></span>
				<span
					class={[
						'absolute left-0 h-0.5 w-4 rounded-full bg-current transition duration-200 ease-out',
						isMenuOpen ? 'top-[6px] -rotate-45' : 'top-[12px]'
					]}
				></span>
			</span>
		</button>

		<div id="nav-links" class="hidden gap-4 text-[1.125rem] font-medium md:flex">
			<a
				href={resolve('/academic')}
				class={[
					'pointer-events-auto underline-offset-6 transition hover:text-amber-600 hover:underline',
					isActive('/academic') ? 'text-amber-700 underline' : 'text-gray-600'
				]}
			>
				Home
			</a>
			<a
				href={resolve('/academic/research')}
				class={[
					'pointer-events-auto underline-offset-6 transition hover:text-amber-600 hover:underline',
					isActive('/academic/research') ? 'text-amber-700 underline' : 'text-gray-600'
				]}
			>
				Research
			</a>
			<a
				href={resolve('/academic/projects')}
				class={[
					'pointer-events-auto underline-offset-6 transition hover:text-amber-600 hover:underline',
					isActive('/academic/projects') ? 'text-amber-700 underline' : 'text-gray-600'
				]}
			>
				Projects
			</a>
		</div>

		{#if isMenuOpen}
			<div
				id="nav-links-mobile"
				class="absolute top-full right-4 z-20 mt-3 min-w-44 overflow-hidden rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-50 via-white to-amber-100/70 p-2 shadow-[0_20px_60px_rgba(44,24,16,0.14)] backdrop-blur-sm md:hidden"
				transition:fly={{ y: -8, duration: 220 }}
			>
				<div class="flex flex-col gap-1 text-base font-medium">
					<a
						href={resolve('/academic')}
						class={[
							'rounded-xl px-3 py-2 transition hover:bg-amber-100/80 hover:text-amber-700',
							isActive('/academic') ? 'bg-amber-100/70 text-amber-700 underline' : 'text-gray-700'
						]}
						onclick={() => (isMenuOpen = false)}
					>
						Home
					</a>
					<a
						href={resolve('/academic/research')}
						class={[
							'rounded-xl px-3 py-2 transition hover:bg-amber-100/80 hover:text-amber-700',
							isActive('/academic/research')
								? 'bg-amber-100/70 text-amber-700 underline'
								: 'text-gray-700'
						]}
						onclick={() => (isMenuOpen = false)}
					>
						Research
					</a>
					<a
						href={resolve('/academic/projects')}
						class={[
							'rounded-xl px-3 py-2 transition hover:bg-amber-100/80 hover:text-amber-700',
							isActive('/academic/projects')
								? 'bg-amber-100/70 text-amber-700 underline'
								: 'text-gray-700'
						]}
						onclick={() => (isMenuOpen = false)}
					>
						Projects
					</a>
				</div>
			</div>
		{/if}
	</nav>

	{@render children()}
</div>
