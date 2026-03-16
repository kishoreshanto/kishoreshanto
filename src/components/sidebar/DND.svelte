<script lang="ts">
	import data from '$lib/data_en.json';
	import DNDIcon from '../visuals/icons/DNDIcon.svelte';

	const show_dnd: boolean = data.request_do_not_disturb;
	let dnd_message = $state<string | undefined>();
	if (show_dnd) {
		dnd_message = data.request_do_not_disturb_message;
	}
</script>

{#if show_dnd}
	<div class="flex flex-nowrap items-center">
		<div class="w-fit">
			<DNDIcon />
		</div>
		<h1 class="text-xs font-semibold text-amber-500 select-none dark:text-amber-500">
			{dnd_message}
		</h1>
	</div>
{/if}
