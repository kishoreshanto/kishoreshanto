<script>
    import Date from "../components/timeline/Date.svelte";
    import University from "../components/University.svelte";
    import GitHub from "../components/GitHub.svelte";
    import logo from "$lib/assets/img/award.png";
</script>

<main class="space-y-10 md:space-y-14 py-20 sm:space-y-32 sm:py-32">

    <article class="scroll-mt-16">
        <Date date="May 3rd, 2023"/>

        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto border-b-2 dark:border-sky-800 border-sky-300
                            typography p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-lg dark:shadow-sky-500/40 shadow-sky-300/40">
                    <div class="flex gap-4 align-middle items-center">
                        <img alt="united international university" src="{logo}"
                             class="h-12 w-12 md:h-10 md:w-10 rounded-full"/>
                        <h2 class="font-extrabold text-sky-900 dark:text-sky-200 text-lg lg:text-xl">
                            Awarded in <br><a href="https://github.com/mariamuna04/LandSphere"
                                              class="hover:underline font-light font-mono text-lg">
                            mariamuna04/LandSphere
                        </a>
                        </h2>
                    </div>

                    <p class="ml-16 md:ml-14 font-medium text-gray-600 dark:text-gray-300 text-sm mt-4">
                        <span class="text-sky-600 font-bold">Champion</span> in CSE Project Show 231 in category<br/>
                        <span class="text-sky-600 font-bold">Database Management Systems</span> at
                        United International University
                    </p>
                </div>
            </div>
        </div>

    </article>

    <GitHub date="Mar 17, 2023"
            type="Collaborated"
            repository="mariamuna04/LandSphere"
            link="https://github.com/mariamuna04/LandSphere"
            contribution="Created User Interface and Backend"
            addition="40,271 ++"
            subtraction="23,680 --"
    />

    <GitHub date="Nov 16th, 2022"
            type="Collaborated"
            repository="mariamuna04/MomentTap"
            link="https://github.com/mariamuna04/MomentTap"
            contribution="Created User Interface and Backend"
            addition="9,239 ++"
            subtraction="6,579 --"
    />

    <GitHub date="Jul 26th, 2022"
            type="Contributed"
            repository="hunter-dibs/canteen-management-system"
            link="https://github.com/hunter-dibs/uiu-canteen-management-system"
            contribution="Created User Interface and Backend"
            addition="6,235 ++"
            subtraction="3,872 --"
    />

    <GitHub date="Apr 25th, 2022"
            type="Contributed"
            repository="hunter-dibs/donation-plus"
            link="https://github.com/hunter-dibs/donation-plus"
            contribution="Created User Interface and Design"
            addition="4,937 ++"
            subtraction="1,240 --"
    />

    <University/>
</main>
