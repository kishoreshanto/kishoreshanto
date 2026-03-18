<script lang="ts">
	let { children } = $props();
</script>

<div class="container mx-auto mt-12 mb-8 px-6 pt-8 md:px-0">
	<h1 class="text-center font-lora text-4xl font-medium text-amber-600 lg:text-5xl xl:text-6xl">
		A glimpse of what I have done over the time...
	</h1>
	<h3 class="mt-6 mb-12 text-center font-lora text-xl text-gray-600 lg:text-2xl">
		Scroll down, filter, or search for specific experiences/projects/publications
	</h3>
</div>

{@render children()}
