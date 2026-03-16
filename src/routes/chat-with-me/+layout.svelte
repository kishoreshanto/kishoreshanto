<script lang="ts">
	let { children } = $props();
</script>

<div class="container mx-auto mt-12 mb-8 px-6 pt-8 md:px-0">
	<h1 class="text-center font-lora text-4xl font-medium text-amber-800 lg:text-5xl xl:text-6xl">
		Talk with an "AI-version" of me!
	</h1>
	<h3 class="mt-6 mb-12 text-center font-lora text-xl text-gray-700 lg:text-2xl">
		Ask anything about me, it will try its best to answer.<br /> (AI can be wrong, so take it with a grain
		of salt)
	</h3>
</div>

{@render children()}
