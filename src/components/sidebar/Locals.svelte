<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";
    import {getLocalTimeFromUTCOffset} from "$lib/utils";

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
                <svg class="fill-zinc-500 dark:fill-zinc-400 mr-2 h-5" xmlns="http://www.w3.org/2000/svg" height="24px"
                     viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                </svg>
                <h1 class="text-sm font-mono font-light text-gray-500 dark:text-gray-400">{current_city}</h1>
            </div>
        {/if}

        {#if current_gmt_offset}
            <div class="flex items-center">
                <svg class="fill-zinc-500 dark:fill-zinc-400 mr-2 h-5" xmlns="http://www.w3.org/2000/svg"
                     height="24px"
                     viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
                    <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                </svg>
                <h1 class="text-sm font-mono font-light text-gray-500 dark:text-gray-400"> {LT_GMT.local_time}
                    <span class="text-zinc-400 dark:text-zinc-500">(UTC {LT_GMT.GMT})</span></h1>
            </div>
        {/if}
    </div>
{/if}