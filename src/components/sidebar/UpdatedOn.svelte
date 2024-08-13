<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";
    import {parseDate} from "$lib/utils";
    import UpdatedOnIcon from "../visuals/icons/UpdatedOnIcon.svelte";

    const show_last_updated: boolean = data.show_last_updated;
    const last_updated: string = data.last_updated;
    const parsed_date = parseDate(last_updated);
</script>

{#if show_last_updated}
    <div class="flex gap-2 items-center">
        <UpdatedOnIcon/>
        {#if parsed_date}
            <h1 class=" text-xs font-light font-mono dark:text-gray-200/50 text-gray-400">Updated on
                {parsed_date.month} {parsed_date.date}<sup>{parsed_date.prefix}</sup>, {parsed_date.year}
            </h1>
        {:else}
            <h1 class=" text-xs font-light font-mono dark:text-red-300 text-red-600">
                Invalid date format (eg. July 12th, 2021)
            </h1>
        {/if}
    </div>
{/if}