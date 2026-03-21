<script lang="ts">
	import data from '$lib/data_en.json';

	const image_url: string = data.display_image_url;
	const alt_text: string = data.display_image_alt;
</script>

<img
	src={image_url}
	alt={alt_text}
	width="864"
	height="864"
	decoding="async"
	fetchpriority="high"
	class="h-36 w-36 rounded-full border-4 border-amber-700 shadow-lg lg:h-48 lg:w-48"
/>
