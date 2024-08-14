<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";
    import '../styles/global.css'
    import TimeLine from "../components/visuals/TimeLine.svelte";
    import LeftPanel from "../components/LeftPanel.svelte";

    const page_title = data.page_title;
</script>

<svelte:head>
    {#if page_title}
        <title> {page_title} </title>
    {:else}
        <title> Portfolio </title>
    {/if}
</svelte:head>

<main>
    <!-- Left panel goes here, modify the files to change content -->
    <LeftPanel/>

    <div class="right-panel">
        <div class="right-panel-container">
            <TimeLine/>
        </div>
        <!-- Right Panel Goes here, modify `+page.svelte` to change contents -->
        <slot/>
    </div>
</main>