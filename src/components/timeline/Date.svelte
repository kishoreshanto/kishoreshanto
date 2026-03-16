<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import { parseDate } from '$lib/utils';

	interface Props {
		raw_date_string: string;
	}

	let { raw_date_string }: Props = $props();

	const parsed_date:
		| {
				prefix: string;
				date: string;
				month: string;
				year: string;
		  }
		| undefined = $derived(parseDate(raw_date_string));
</script>

{#if parsed_date}
	<div class="flex flex-row xl:flex-col text-end gap-3 items-center xl:items-end xl:gap-1">
		<span class="text-sm font-light">
			{parsed_date.month}
			{parsed_date.date}<sup>{parsed_date.prefix}</sup>
		</span>
		<span class="text-sm lg:text-base font-bold">{parsed_date.year}</span>
	</div>
{/if}
