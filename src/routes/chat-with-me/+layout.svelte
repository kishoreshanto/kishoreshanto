<script lang="ts">
	let { children } = $props();
</script>

<div class="page-container">
	<h1 class="page-heading">
		Talk with an "AI-version" of me!
	</h1>
	<h3 class="page-subheading">
		Ask anything about me, it will try its best to answer.<br /> (AI can be wrong, so take it with a grain
		of salt)
	</h3>
</div>

{@render children()}
