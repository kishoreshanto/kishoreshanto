<script lang="ts">
	import BackToTop from "$component/shared/BackToTop.svelte";
	let { children } = $props();
</script>

<div class="page-container">
	<h1 class="page-heading">A glimpse of what I have done over the time...</h1>
	<h3 class="page-subheading">
		Scroll down, filter, or search for specific experiences/projects/publications
	</h3>
</div>

{@render children()}

<BackToTop />
