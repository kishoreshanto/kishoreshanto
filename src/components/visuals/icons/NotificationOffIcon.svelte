<script lang="ts">
    interface Props {
        current_time: string;
    }
    
    let { current_time }: Props = $props();
    import data from "$lib/data_en.json";

    const show_inactive: boolean = data.show_inactive;
    let inactive_start: number | undefined;
    let inactive_end: number | undefined;
    let current_hour: number | undefined;

    if (show_inactive && current_time) {
        inactive_start = data.inactive_start_time;
        inactive_end = data.inactive_end_time;
        current_hour = parseInt(current_time.split(":")[0]);
    } else {
        current_hour = undefined;
    }

    let incorrect_time = $state<boolean>(false);
    let inactive_status = $state<boolean>(false);
    
    $effect(() => {
        if (inactive_start && inactive_end) {
            incorrect_time = !(inactive_start >= 0 && inactive_start <= 24 && inactive_end >= 0 && inactive_end <= 24);
        }
        
        if (inactive_start && inactive_end && !incorrect_time && current_hour) {
            inactive_status = current_hour >= inactive_start && current_hour < inactive_end;
        }
    });
</script>

{#if show_inactive && !incorrect_time && inactive_status}
    <svg class="dark:fill-amber-500 fill-amber-600 ml-2" xmlns="http://www.w3.org/2000/svg" height="20px"
         viewBox="0 -960 960 960" width="18px" fill="#e8eaed">
        <path d="M192-216v-72h48v-240q0-41 13.5-78.5T290-677l53 53q-15 21-23 45.75T312-528v240h264L90-774l51-52 678 679-51 51-120-120H192Zm528-132-72-72v-108q0-70-49-119t-119-49q-22.84 0-43.92 6Q415-684 395-673l-52-52.51Q363-740 385.5-749q22.5-9 46.5-14v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v180Zm-276-72Zm35.79 324Q450-96 429-117.15T408-168h144q0 30-21.21 51t-51 21ZM522-547Z"/>
    </svg>
{/if}