<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data_en.json";
    import '../styles/global.css'
    import TimeLine from "../components/visuals/TimeLine.svelte";
    import LeftPanel from "../components/LeftPanel.svelte";
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

    injectSpeedInsights();

    const page_title = data.page_title;
</script>

<svelte:head>
    <!-- Preload critical fonts -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    
    <!-- DNS prefetch for external resources -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    
    {#if page_title}
        <title> {page_title} </title>
    {:else}
        <title> Portfolio </title>
    {/if}
    
    <meta name="description" content="Kishore Shanto - Researcher & Developer specializing in Deep Learning, Computer Vision, and Biomedical Signal Processing">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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