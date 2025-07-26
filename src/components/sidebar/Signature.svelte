<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data_en.json";

    const signature: boolean = data.show_signature;

    import signature_black from "$lib/assets/signature-black.png"
    import signature_white from "$lib/assets/signature-white.png"
</script>

{#if signature}
    <div>
        <img src="{signature_black}" alt="verification signature"
             class="h-14 dark:hidden select-none">
        <img src="{signature_white}" alt="verification signature"
             class="h-[4.2rem] hidden dark:block select-none -translate-x-2">
    </div>
{/if}
