<script lang="ts">
    import data from "$lib/data_en.json"
    import LinkedInIcon from "../visuals/icons/LinkedInIcon.svelte";

    const show_linkedin: boolean = data.show_linkedin;
    let linkedin_url = $state<string>('');
    let linkedin_username = $state<string>('');

    if (show_linkedin) {
        linkedin_url = data.linkedin_url;
        linkedin_username = data.linkedin_username;
    }
</script>

{#if show_linkedin}
    <a target="_blank" href="{linkedin_url}"
       class="flex align-middle items-center gap-1">
        <LinkedInIcon/>
        <h1 class="text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">
            / {linkedin_username}</h1>
    </a>
{/if}