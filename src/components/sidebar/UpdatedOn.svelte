<script lang="ts">
    import data from "$lib/data.json";

    const last_updated: string = data.last_updated;

    let parse_date = last_updated.split(',')
    let raw_date = parse_date[0]
    let month = raw_date.split(" ")[1]
    let date = raw_date.split(" ")[0].slice(0, -2)
    let prefix = raw_date.split(" ")[0].slice(-2)
    let year = parse_date[1]
</script>

<div class="flex gap-2 items-center">
    <svg class="fill-zinc-500" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M760-120q-39 0-70-22.5T647-200H440q-66 0-113-47t-47-113q0-66 47-113t113-47h80q33 0 56.5-23.5T600-600q0-33-23.5-56.5T520-680H313q-13 35-43.5 57.5T200-600q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T313-760h207q66 0 113 47t47 113q0 66-47 113t-113 47h-80q-33 0-56.5 23.5T360-360q0 33 23.5 56.5T440-280h207q13-35 43.5-57.5T760-360q50 0 85 35t35 85q0 50-35 85t-85 35ZM200-680q17 0 28.5-11.5T240-720q0-17-11.5-28.5T200-760q-17 0-28.5 11.5T160-720q0 17 11.5 28.5T200-680Z"/></svg>
    <h1 class=" text-xs font-light font-mono dark:text-gray-200/50 text-gray-400">Updated on
        {month} {date}<sup>{prefix}</sup>, {year}
    </h1>
</div>