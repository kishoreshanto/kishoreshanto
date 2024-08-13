<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import GitHub from "../contacts/GitHub.svelte";
    import LinkedIn from "../contacts/LinkedIn.svelte";
    import Instagram from "../contacts/Instagram.svelte";
    import Orcid from "../contacts/Orcid.svelte";
    import Email from "../contacts/Email.svelte";
    import Resume from "../contacts/Resume.svelte";
</script>

<div class="mt-6 dark:text-white flex flex-col selection:bg-sky-200 selection:text-black dark:selection:text-white">
    <div class="mb-4 flex flex-col xs:flex-row xs:gap-12 gap-2 text-black dark:text-white text-sm xs:text-lg">
        <Email/>
        <Resume/>
    </div>

    <div class="flex gap-2 xs: gap-y-2 flex-col xs:flex-row xs:gap-x-8 flex-wrap">

        <GitHub/>
        <LinkedIn/>
        <Instagram/>

    </div>

    <Orcid/>

</div>