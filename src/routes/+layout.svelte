<script lang="ts">
    import '../styles/global.css'
    import Sidebar from "../components/Sidebar.svelte";
    import TimeLine from "../components/visuals/TimeLine.svelte";

    import data from "$lib/data.json";

    let page_title = data.name
</script>

<svelte:head>
    <title>{page_title} | Portfolio</title>
</svelte:head>


<main class="flex min-h-full flex-col bg-white dark:bg-gray-950">
    <Sidebar/>

    <div class="relative flex-auto">
        <div class="pointer-events-none absolute inset-0 z-50 overflow-hidden
                    lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]
                    lg:overflow-visible">
            <TimeLine/>
        </div>

        <slot class="antialiased"/>
    </div>

</main>