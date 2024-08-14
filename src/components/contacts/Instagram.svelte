<script lang="ts">
    import data from "$lib/data.json"
    import InstagramIcon from "../visuals/icons/InstagramIcon.svelte";

    const show_instagram: boolean = data.show_instagram;
    let instagram_url: string;
    let instagram_username: string;

    if (show_instagram) {
        instagram_url = data.instagram_url;
        instagram_username = data.instagram_username;
    }
</script>

{#if show_instagram}
    <a target="_blank" href="{instagram_url}"
       class="flex align-middle items-center gap-1 translate-x-[1px] xs:translate-x-0">
        <InstagramIcon/>
        <h1 class="text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">
            / {instagram_username}</h1>
    </a>
{/if}