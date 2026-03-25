<script lang="ts">
	import { parseDateWithOrdinal } from '$lib/utils/datetime';

	interface Props {
		date: string;
	}

	const { date }: Props = $props();

	const parsedDate = $derived(parseDateWithOrdinal(date));
</script>

<div id="date" class="mb-4 flex -translate-x-11 items-center gap-4">
	<div class="h-[0.1625rem] w-8 rounded-2xl bg-amber-600 lg:-mr-3.5 xl:mr-0"></div>
	<span class="font-mono text-sm font-bold text-amber-600 md:text-base">
		{#if parsedDate}
			{parsedDate.day}<sup>{parsedDate.suffix}</sup>{parsedDate.rest}
		{:else}
			{date}
		{/if}
	</span>
</div>
