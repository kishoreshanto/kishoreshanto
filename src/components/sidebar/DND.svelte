<script lang="ts">
    import data from "$lib/data.json";
    import DNDIcon from "../visuals/icons/DNDIcon.svelte";

    const show_dnd: boolean = data.request_do_not_disturb;
    let dnd_message: string | undefined;
    if (show_dnd) {
        dnd_message = data.request_do_not_disturb_message;
    }
</script>

{#if show_dnd}
    <div class="flex mt-4 flex-nowrap items-center">
        <div class="w-fit">
            <DNDIcon/>
        </div>
        <h1 class="text-xs font-semibold text-gray-500 dark:text-gray-400">{dnd_message}</h1>
    </div>
{/if}