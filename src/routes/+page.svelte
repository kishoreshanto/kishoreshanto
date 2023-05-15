<script>
    import data from '/src/data/intro.json';

    const full_name = data.full_name;
    const first_name = full_name.split(' ')[0];
    const last_name = full_name.split(' ')[1];
    const title = data.title;
    const description = data.description;
    const email = data.mail;



</script>

<main class="flex min-h-full flex-col bg-white dark:bg-gray-950">
    <div class="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden dark:bg-gray-950 bg-white lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
            <svg class="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
                 aria-hidden="true">
                <defs>
                    <radialGradient id=":R1d6:-desktop" cx="100%">
                        <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                        <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
                        <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
                    </radialGradient>
                    <radialGradient id=":R1d6:-mobile" cy="100%">
                        <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                        <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
                        <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
                    </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#:R1d6:-desktop)" class="hidden lg:block"></rect>
                <rect width="100%" height="100%" fill="url(#:R1d6:-mobile)" class="lg:hidden"></rect>
            </svg>
        </div>

        <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]
         lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
            <div class="mx-auto mt-14 lg:mt-0 lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:justify-center">

                <h1 class="dark:text-white font-black text-5xl text-black">
                    {first_name}
                    <span class="text-sky-300">{last_name}</span>
                </h1>


                <h1 class="mt-4 font-display text-2xl font-semibold dark:text-white text-black font-mono">
                    <span class="text-sky-900 dark:text-sky-600">{title[0]}</span> and <span
                        class="text-sky-900 dark:text-sky-600">{title[1]}</span>
                </h1>

                <p class="mt-4 text-sm text-gray-600 dark:text-gray-400 tracking-tight text-justify">
                    {description}
                </p>
                <hr class="border my-4 dark:border-zinc-700">

                <h1 class="font-bold text-sky-800 dark:text-sky-600 font-mono">Interests and Passion</h1>
                <div class="mt-2 flex gap-x-4 gap-y-2 flex-wrap dark:text-white text-sm">
                    {#each data.interest_and_passion as subject}
                        <h1 class="bg-sky-100 text-zinc-600 dark:text-zinc-200 dark:bg-sky-950 font-medium px-3 py-0.5 rounded-2xl">{subject}</h1>
                    {/each}
                </div>


                <div class="mt-12 dark:text-white">
                    <div class="mb-4 flex gap-12 text-black dark:text-white">
                        <a class="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500 font-medium"
                           href="mailto:{email}">{email}</a>
                        <a class="text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500 font-medium"
                        href="/static/resume.pdf">
                            View Resume</a>
                    </div>
                    <div class="flex gap-8 mt-1">
                        <a target="_blank" href="https://www.instagram.com/tinykishore/"
                           class="flex align-middle items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"
                                 class="dark:fill-gray-400 lg:translate-y-[0.050rem]">
                                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                            </svg>
                            <h1 class="text-sm font-light text-gray-500">tinykishore</h1>
                        </a>

                        <a target="_blank" href="https://www.github.com/tinykishore/"
                           class="flex align-middle items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="22px" height="22px"
                                 class="dark:fill-gray-400 lg:translate-y-[0.050rem]">
                                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/>
                            </svg>
                            <h1 class="text-sm font-light text-gray-500">tinykishore</h1>
                        </a>

                        <a target="_blank" class="flex align-middle items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22px" height="22px"
                                 class="dark:fill-gray-400 lg:translate-y-[0.050rem]">
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
                            </svg>
                            <h1 class="text-sm font-light text-gray-500">tinykishore</h1>
                        </a>


                    </div>
                </div>


                <h1 class="mt-4 font-display text-sm dark:text-gray-700 text-gray-400/80 font-medium">
                    Dhaka, Bangladesh &bull; <span class="font-light dark:text-gray-200/20 text-gray-300">
                    Updated on 15th March, 2023
                </span>
                </h1>

            </div>
        </div>
    </div>

    <div class="relative flex-auto">
        <div class="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
            <svg class="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 mt-14 lg:mt-0 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
                 aria-hidden="true">
                <defs>
                    <pattern id=":R1t6:" width="6" height="8" patternUnits="userSpaceOnUse">
                        <path d="M0 0H6M0 8H6" class="stroke-sky-900/70 dark:stroke-white/30 xl:stroke-sky-900/70"
                              fill="none"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:R1t6:)"></rect>
            </svg>
        </div>

        <main class="space-y-20 py-20 sm:space-y-32 sm:py-32">

            <article class="scroll-mt-16">
                <div>
                    <header class="relative mb-10 xl:mb-0">
                        <div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                            <a class="inline-flex">
                                <time class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium text-zinc-600 dark:text-gray-200">
                                    Apr 6, 2023
                                </time>
                            </a>
                            <div class="h-[0.0625rem] w-3.5 bg-sky-800 lg:-mr-3.5 xl:mr-0 xl:bg-gray-900 dark:xl:bg-sky-400"></div>
                        </div>
                        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                            <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                                <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                                    <div class="flex">
                                        <a class="inline-flex">
                                            <time datetime="2023-04-06T00:00:00.000Z"
                                                  class="text-2xs/4 font-medium text-zinc-600 dark:text-gray-200 xl:hidden">
                                                Apr 6, 2023
                                            </time>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto
                            typography p-4 rounded-2xl bg-white dark:bg-zinc-950 drop-shadow-2xl shadow shadow-amber-400">
                                <h2 class="font-extrabold text-sky-900 dark:text-sky-200 text-2xl">
                                    United International University</h2>
                                <hr class="border-2 border-sky-200 rounded-full my-2">
                                <h2 class="font-bold text-gray-500 pb-4">2018 - present</h2>
                                <p>
                                    Description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

            <article class="scroll-mt-16 invisible">
                <div>
                    <header class="relative mb-10 xl:mb-0">
                        <div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                            <a class="inline-flex">
                                <time class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-black/50 dark:xl:text-white/50">
                                    Apr 6, 2023
                                </time>
                            </a>
                            <div class="h-[0.0625rem] w-3.5 bg-gray-900 lg:-mr-3.5 xl:mr-0 xl:bg-gray-900 dark:xl:border-sky-200"></div>
                        </div>
                        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                            <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                                <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                                    <div class="flex">
                                        <a class="inline-flex">
                                            <time datetime="2023-04-06T00:00:00.000Z"
                                                  class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">
                                                Apr 6, 2023
                                            </time>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto
                            typography p-4 rounded-2xl bg-sky-100 dark:bg-sky-950/50 drop-shadow-2xl">
                                <h2 class="font-extrabold text-sky-900 dark:text-sky-200 text-2xl">United International
                                    University</h2>
                                <hr class="border-2 border-sky-200 rounded-full my-2">
                                <h2 class="font-bold text-gray-500 pb-4">2018 - present</h2>
                                <p>
                                    Description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

            <article class="scroll-mt-16 invisible">
                <div>
                    <header class="relative mb-10 xl:mb-0">
                        <div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                            <a class="inline-flex">
                                <time class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-black/50 dark:xl:text-white/50">
                                    Apr 6, 2023
                                </time>
                            </a>
                            <div class="h-[0.0625rem] w-3.5 bg-gray-900 lg:-mr-3.5 xl:mr-0 xl:bg-gray-900 dark:xl:border-sky-200"></div>
                        </div>
                        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                            <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                                <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                                    <div class="flex">
                                        <a class="inline-flex">
                                            <time datetime="2023-04-06T00:00:00.000Z"
                                                  class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">
                                                Apr 6, 2023
                                            </time>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto
                            typography p-4 rounded-2xl bg-sky-100 dark:bg-sky-950/50 drop-shadow-2xl">
                                <h2 class="font-extrabold text-sky-900 dark:text-sky-200 text-2xl">United International
                                    University</h2>
                                <hr class="border-2 border-sky-200 rounded-full my-2">
                                <h2 class="font-bold text-gray-500 pb-4">2018 - present</h2>
                                <p>
                                    Description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

            <article class="scroll-mt-16 invisible">
                <div>
                    <header class="relative mb-10 xl:mb-0">
                        <div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                            <a class="inline-flex">
                                <time class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-black/50 dark:xl:text-white/50">
                                    Apr 6, 2023
                                </time>
                            </a>
                            <div class="h-[0.0625rem] w-3.5 bg-gray-900 lg:-mr-3.5 xl:mr-0 xl:bg-gray-900 dark:xl:border-sky-200"></div>
                        </div>
                        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                            <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                                <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                                    <div class="flex">
                                        <a class="inline-flex">
                                            <time datetime="2023-04-06T00:00:00.000Z"
                                                  class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">
                                                Apr 6, 2023
                                            </time>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto
                            typography p-4 rounded-2xl bg-sky-100 dark:bg-sky-950/50 drop-shadow-2xl">
                                <h2 class="font-extrabold text-sky-900 dark:text-sky-200 text-2xl">United International
                                    University</h2>
                                <hr class="border-2 border-sky-200 rounded-full my-2">
                                <h2 class="font-bold text-gray-500 pb-4">2018 - present</h2>
                                <p>
                                    Description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </article>

            <article class="scroll-mt-16 invisible">
                <div>
                    <header class="relative mb-10 xl:mb-0">
                        <div class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                            <a class="inline-flex">
                                <time class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-black/50 dark:xl:text-white/50">
                                    Apr 6, 2023
                                </time>
                            </a>
                            <div class="h-[0.0625rem] w-3.5 bg-gray-900 lg:-mr-3.5 xl:mr-0 xl:bg-gray-900 dark:xl:border-sky-200"></div>
                        </div>
                        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                            <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                                <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                                    <div class="flex">
                                        <a class="inline-flex">
                                            <time datetime="2023-04-06T00:00:00.000Z"
                                                  class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden">
                                                Apr 6, 2023
                                            </time>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                            <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto
                            typography p-4 rounded-2xl bg-sky-100 dark:bg-sky-950/50 drop-shadow-2xl">
                                <h2 class="font-extrabold text-sky-900 dark:text-sky-200 text-2xl">United International
                                    University</h2>
                                <hr class="border-2 border-sky-200 rounded-full my-2">
                                <h2 class="font-bold text-gray-500 pb-4">2018 - present</h2>
                                <p>
                                    Description
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </article>


        </main>
    </div>

</main>


<style>

</style>
