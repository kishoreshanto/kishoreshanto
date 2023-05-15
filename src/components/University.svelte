<script>
    import Date from "./timeline/Date.svelte";
</script>


<article class="scroll-mt-16">
    <Date date="Jan 26th, 2020"/>

    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto border-b-2 dark:border-sky-800 border-sky-300
                            typography p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-lg dark:shadow-sky-500/40 shadow-sky-300/40">
                <div class="flex gap-4 align-middle items-center">
                    <img alt="united international university" src="/src/lib/assets/img/uiu.png"
                         class="h-12 w-12 md:h-10 md:w-10 rounded-full"/>
                    <h2 class="font-extrabold text-sky-900 dark:text-sky-200 text-lg lg:text-xl">
                        Student at <a href="http://www.uiu.ac.bd/" class="hover:underline">United International
                        University</a>
                    </h2>
                </div>

                <p class="ml-16 md:ml-14 font-bold text-gray-600 dark:text-gray-300">
                    Bachelor of Computer Science And Engineering<br>
                    <span class="font-medium text-gray-400">
                            Major in
                            <span class="text-sky-600">Data Science</span> and
                            <span class="text-sky-600">Computational Engineering</span>
                        </span>
                </p>

                <div class="mt-2 flex mx-2 ml-16 md:ml-14 ">
                    <p class="font-medium font-mono text-gray-500">Jan 2020 - present</p>
                </div>
            </div>
        </div>
    </div>
</article>