<script lang="ts">
	let { children } = $props();
</script>

<!-- A fullscreen div that has a z-index of negative value (TailwindCSS class: -z-40) -->
<!-- Issue is: The background is not visible right now. -->
<!-- <div
	id="background"
	class="fixed top-0 left-0 z-10 hidden h-screen w-screen flex-col opacity-20 select-none xl:flex"
>
	<div class="mt-12 flex justify-between">
		<h1 class="-translate-x-12 font-eb-garamond text-[12rem] text-amber-500">Stories</h1>
		<h1 class="translate-16 font-ivy-text text-[16rem] text-amber-900">Facts</h1>
	</div>
	<div class="mt-12 flex justify-between">
		<h1 class="translate-22 font-mono text-[12rem] text-fuchsia-800 opacity-35">Memories</h1>
		<h1 class="mt-24 translate-16 font-lora text-[16rem] text-amber-500">Future</h1>
	</div>
</div> -->

<main class="page-container">
	{@render children()}
</main>
