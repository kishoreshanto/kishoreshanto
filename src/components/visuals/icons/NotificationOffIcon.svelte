<script lang="ts">
	let { current_time }: NotificationOffIconProps = $props();
	import data from '$lib/data_en.json';

	const show_inactive: boolean = data.show_inactive;
	const inactive_start = show_inactive ? data.inactive_start_time : undefined;
	const inactive_end = show_inactive ? data.inactive_end_time : undefined;

	const current_hour = $derived.by(() => {
		if (!show_inactive || !current_time) {
			return undefined;
		}

		const parsed_hour = Number.parseInt(current_time.split(':')[0], 10);
		return Number.isNaN(parsed_hour) ? undefined : parsed_hour;
	});

	const incorrect_time = $derived.by(() => {
		if (inactive_start === undefined || inactive_end === undefined) {
			return false;
		}

		return !(
			inactive_start >= 0 &&
			inactive_start <= 24 &&
			inactive_end >= 0 &&
			inactive_end <= 24
		);
	});

	const inactive_status = $derived.by(() => {
		if (
			inactive_start === undefined ||
			inactive_end === undefined ||
			incorrect_time ||
			current_hour === undefined
		) {
			return false;
		}

		return current_hour >= inactive_start && current_hour < inactive_end;
	});
</script>

{#if show_inactive && !incorrect_time && inactive_status}
	<svg
		class="ml-2 fill-amber-600 dark:fill-amber-500"
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		viewBox="0 -960 960 960"
		width="18px"
		fill="#e8eaed"
	>
		<path
			d="M192-216v-72h48v-240q0-41 13.5-78.5T290-677l53 53q-15 21-23 45.75T312-528v240h264L90-774l51-52 678 679-51 51-120-120H192Zm528-132-72-72v-108q0-70-49-119t-119-49q-22.84 0-43.92 6Q415-684 395-673l-52-52.51Q363-740 385.5-749q22.5-9 46.5-14v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v180Zm-276-72Zm35.79 324Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21ZM522-547Z"
		/>
	</svg>
{/if}
