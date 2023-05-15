<script>
    import '../styles/global.css'
    import Sidebar from "../components/Sidebar.svelte";
    import TimeLine from "../components/TimeLine.svelte";
</script>


<main class="flex min-h-full flex-col bg-white dark:bg-gray-950">
    <Sidebar/>

    <div class="relative flex-auto">
        <div class="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
            <TimeLine/>
        </div>

        <slot class="antialiased">
            This is where timeline sits
        </slot>
    </div>

</main>