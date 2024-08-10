<script lang="ts">
    import Date from "./timeline/Date.svelte";

    export let date: string;

</script>

<section class="scroll-mt-16">
    <Date raw_date={date}/>

    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 l
                        g:max-w-xl lg:flex-auto typography
                        p-4 rounded-xl bg-zinc-100 dark:bg-zinc-700
                        drop-shadow-xl">
                <slot>
                    <p class="text-gray-400">Place your content here...</p>
                </slot>
            </div>
        </div>
    </div>
</section>
