<script lang="ts">
	let { children } = $props();
</script>

<div class="container mx-auto mt-12 mb-8 px-6 pt-8 md:px-0">
	<h1 class="text-center font-lora text-4xl font-medium text-amber-800 lg:text-5xl xl:text-6xl">
		Get in Touch
	</h1>
	<h3 class="mt-6 mb-12 text-center font-lora text-xl text-gray-700 lg:text-2xl">
		Whether you'd like to collaborate, discuss research, or just say hello — feel free to reach out
		through any of the channels below.
	</h3>
</div>

{@render children()}
