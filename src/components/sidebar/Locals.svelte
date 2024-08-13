<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";
    import {getLocalTimeFromUTCOffset} from "$lib/utils";
    import LocationIcon from "../visuals/icons/LocationIcon.svelte";
    import TimeIcon from "../visuals/icons/TimeIcon.svelte";

    const show_locals: boolean = data.show_locals;
    const current_city: string | undefined = data.current_city;
    const current_gmt_offset: number = data.current_gmt_offset;

    let LT_GMT: { local_time: string, GMT: string };
    if (current_gmt_offset) {
        LT_GMT = getLocalTimeFromUTCOffset(current_gmt_offset);
    }
</script>

{#if show_locals}
    <div class="mt-4 flex flex-col xs:flex-row xs:gap-8  gap-2 select-none cursor-default">
        {#if current_city}
            <div class="flex items-center">
                <LocationIcon/>
                <h1 class="text-sm font-mono font-light text-gray-500 dark:text-gray-400">{current_city}</h1>
            </div>
        {/if}

        {#if current_gmt_offset}
            <div class="flex items-center">
                <TimeIcon/>
                <h1 class="text-sm font-mono font-light text-gray-500 dark:text-gray-400"> {LT_GMT.local_time}
                    <span class="text-zinc-400 dark:text-zinc-500">(UTC {LT_GMT.GMT})</span></h1>
            </div>
        {/if}
    </div>
{/if}