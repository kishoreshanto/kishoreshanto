<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    export let date_string: string;
    import Date from "./Date.svelte";
</script>

<section class="relative mb-10 xl:mb-0">
    <!-- When screen is large -->
    <div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4
                items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)]
                lg:min-w-[32rem] xl:h-8">

        <div class="inline-flex">
            <time class="items-end select-none font-medium font-mono
                         hidden text-zinc-600 dark:text-gray-200
                         xl:pointer-events-auto xl:flex xl:flex-col
                         xl:text-2xs/4 xl:font-medium">
                <Date raw_date_string={date_string}/>
            </time>
        </div>
        <div class="h-[0.1625rem] w-[1.5rem] lg:w-[1.5rem] lg:rounded-l-2xl bg-sky-800 lg:-mr-3.5 xl:mr-0 dark:xl:bg-sky-400"></div>

    </div>

    <!-- When screen is small -->
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                <div class="flex">
                    <div class="inline-flex">
                        <time class="select-none -mt-0.5 font-medium font-mono
                                     text-zinc-600 dark:text-gray-200 xl:hidden ml-4">
                            <Date raw_date_string={date_string}/>
                        </time>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>