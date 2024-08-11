<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    export let raw_date_string: string;
    import {parseDate} from "$lib/utils";

    const parsed_date: {
        prefix: string,
        date: string,
        month: string,
        year: string
    } | undefined = parseDate(raw_date_string);

</script>

{#if parsed_date}
    <div class="flex flex-row xl:flex-col text-end gap-3 items-center xl:items-end xl:gap-1">
            <span class="text-sm font-light">
                {parsed_date.month} {parsed_date.date}<sup>{parsed_date.prefix}</sup>
            </span>
        <span class="text-sm lg:text-base font-bold">{parsed_date.year}</span>

    </div>
{:else}
    <div class="xl:hidden">
        <span class="text-sm text-red-500 dark:text-red-400 text-end">Invalid Date format</span>
    </div>
    <div class="hidden xl:block text-end">
        <span class="text-sm text-red-500 dark:text-red-400 text-end">Invalid <br> Date <br> format</span>
    </div>
{/if}