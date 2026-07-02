<script lang="ts">
	import { parseDateWithOrdinal } from '$lib/utils/datetime';

	interface Props {
		date: string;
	}

	const { date }: Props = $props();

	const parsedDate = $derived(parseDateWithOrdinal(date));
</script>

<div id="date" class="pt-0.5 font-mono text-sm font-semibold text-amber-700 md:text-end">
	<span>
		{#if parsedDate}
			{parsedDate.day}<sup>{parsedDate.suffix}</sup>{parsedDate.rest}
		{:else}
			{date}
		{/if}
	</span>
</div>
