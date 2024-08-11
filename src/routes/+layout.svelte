<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";
    import '../styles/global.css'
    import Sidebar from "../components/Sidebar.svelte";
    import TimeLine from "../components/visuals/TimeLine.svelte";

    const page_title = data.page_title;
</script>

<svelte:head>
    <title> {page_title} </title>
</svelte:head>

<main class="flex min-h-full flex-col bg-white dark:bg-gray-950 antialiased">
    <!-- Left panel goes here, modify the files to change content -->
    <Sidebar/>

    <div class="relative flex-auto">
        <div class="pointer-events-none absolute inset-0 z-50 overflow-hidden
                    lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]
                    lg:overflow-visible">
            <TimeLine/>
        </div>
        <!-- Right Panel Goes here, modify `+page.svelte` to change contents -->
        <slot/>
    </div>
</main>