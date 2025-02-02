<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    export let date: string;
    import DateComponent from "./timeline/DateComponent.svelte";
</script>

<section class="scroll-mt-16">
    <DateComponent date_string={date}/>

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


<!--<div class="mx-auto max-w-lg lg:mx-0 lg:w-0 l
                        g:max-w-xl lg:flex-auto typography border-2
                        p-4 rounded-xl bg-linear-to-br to-30% from-gray-50 to-zinc-100
                        shadow-xl drop-shadow-2xl dark:border-red-500

                        dark:bg-zinc-700">
                <slot>
                    <p class="text-gray-400">Place your content here...</p>
                </slot>
            </div>-->