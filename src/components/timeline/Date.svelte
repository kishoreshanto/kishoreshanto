<script>
    export let date;
</script>
<header class="relative mb-10 xl:mb-0">
    <div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
        <div class="inline-flex">
            <time class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium text-zinc-600 dark:text-gray-200">
                {date}
            </time>
        </div>
        <div class="h-[0.0625rem] w-3.5 bg-sky-800 lg:-mr-3.5 xl:mr-0 dark:xl:bg-sky-400"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                <div class="flex">
                    <div class="inline-flex">
                        <time datetime="2023-04-06T00:00:00.000Z"
                              class="text-2xs/4 font-medium text-zinc-600 dark:text-gray-200 xl:hidden">
                            {date}
                        </time>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>