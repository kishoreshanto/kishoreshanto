<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto max-w-4xl px-5 py-10 sm:px-8">
	{@render children()}
</div>
