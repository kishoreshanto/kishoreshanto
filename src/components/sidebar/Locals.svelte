<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data_en.json";
    import {getLocalTimeFromUTCOffset} from "$lib/utils";
    import LocationIcon from "../visuals/icons/LocationIcon.svelte";
    import TimeIcon from "../visuals/icons/TimeIcon.svelte";
    import NotificationOffIcon from "../visuals/icons/NotificationOffIcon.svelte";

    const show_locals: boolean = data.show_locals;
    const current_city: string | undefined = data.current_city;
    const current_gmt_offset: number = data.current_gmt_offset;

    let LT_GMT: { local_time: string, GMT: string };

    $: LT_GMT = getLocalTimeFromUTCOffset(current_gmt_offset);

    // Update time every second (adjust interval as needed)
    setInterval(() => {
        LT_GMT = getLocalTimeFromUTCOffset(current_gmt_offset);
    }, 60000);

</script>

{#if show_locals}
    <div class="my-4 text-xs xs:text-sm flex flex-wrap xs:gap-8 gap-4 select-none cursor-default">
        {#if current_city}
            <div class="flex items-center">
                <LocationIcon/>
                <h1 class=" font-mono font-light text-gray-500 dark:text-gray-400">{current_city}</h1>
            </div>
        {/if}

        {#if current_gmt_offset}
            <div class="flex items-center">
                <TimeIcon/>
                <h1 class="font-mono font-light text-gray-500 dark:text-gray-400"> {LT_GMT.local_time}
                    <span class="text-zinc-400 dark:text-zinc-500">(UTC {LT_GMT.GMT})</span></h1>
                <NotificationOffIcon current_time={LT_GMT.local_time}/>
            </div>
        {/if}
    </div>
{/if}