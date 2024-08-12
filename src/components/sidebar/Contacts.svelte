<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json"
    import orcid_svg from "$lib/assets/icons/orcid.svg"
    import {isEmailValid} from "$lib/utils";

    // Allow Personal Details
    const show_mail: boolean = data.show_mail;
    const show_resume: boolean = data.show_resume;
    const show_instagram: boolean = data.show_instagram;
    const show_github: boolean = data.show_github;
    const show_linkedin: boolean = data.show_linkedin;
    const show_orcid: boolean = data.show_orcid;

    // Get Personal Details
    const email: string = data.mail;
    const resume_url: string = data.resume_url;
    const instagram_url: string = data.instagram_url;
    const instagram_username: string = data.instagram_username;
    const github_url: string = data.github_url;
    const github_username: string = data.github_username;
    const linkedin_url: string = data.linkedin_url;
    const linkedin_username: string = data.linkedin_username;
    const orcid_url = data.orcid_url.split('/')[3];

    // Check if email is valid
    let email_is_valid: boolean = false;
    if (email) email_is_valid = isEmailValid(email);
</script>

<div class="mt-6 dark:text-white flex flex-col selection:bg-sky-200 selection:text-black dark:selection:text-white">
    <div class="mb-4 flex flex-col xs:flex-row xs:gap-12 gap-2 text-black dark:text-white text-sm xs:text-lg">
        {#if show_mail}
            <a class="text-sm text-sky-500 items-center flex gap-1 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500 font-medium transition-all duration-300"
               href="mailto:{email}">
            <span class="translate-y-[1px]">
                <svg class="fill-sky-500" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"
                     width="24px" fill="#e8eaed"><path
                        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            </span>
                {#if email}
                    {#if email_is_valid}
                        {email}
                    {:else}
                        <span class="text-red-500 dark:text-red-400 font-mono">Invalid email</span>
                    {/if}
                {:else}
                    <span class="text-red-500 dark:text-red-400 font-mono">No email provided</span>
                {/if}
            </a>
        {/if}
        {#if show_resume}
            <a target="_blank"
               class=" text-sm select-none flex gap-1 text-sky-500 items-center hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500 font-medium transition-all duration-300"
               href={resume_url}>
            <span class="mr-1">
            <svg class="fill-sky-500" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960"
                 width="20px" fill="#e8eaed"><path
                    d="M336-240h288v-72H336v72Zm0-144h288v-72H336v72ZM263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624v-168H264v624h432v-456H528ZM264-792v189-189 624-624Z"/></svg>
            </span>
                {#if resume_url}
                    View Resume
                {:else}
                    <span class="text-red-500 dark:text-red-400 font-mono">No resume link provided</span>
                {/if}
            </a>
        {/if}
    </div>
    <div class="flex gap-2 flex-col xs:flex-row xs:gap-8">
        {#if show_github}
            <a target="_blank" href="{github_url}"
               class="flex align-middle items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="22px" height="22px"
                     class="dark:fill-gray-400 lg:translate-y-[0.050rem]">
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/>
                </svg>
                <h1 class="text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">
                    / {github_username}</h1>
            </a>
        {/if}

        {#if show_linkedin}
            <a target="_blank" href="{linkedin_url}"
               class="flex align-middle items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="22px" height="22px"
                     class="dark:fill-gray-400 lg:translate-y-[0.050rem]">
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
                </svg>
                <h1 class="text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">
                    / {linkedin_username}</h1>
            </a>
        {/if}

        {#if show_instagram}
            <a target="_blank" href="{instagram_url}"
               class="flex align-middle items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"
                     class="dark:fill-gray-400 lg:translate-y-[0.050rem]">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                </svg>
                <h1 class="text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">
                    / {instagram_username}</h1>
            </a>
        {/if}

    </div>

    {#if show_orcid}
        <a target="_blank" href="{data.orcid_url}"
           class="flex gap-1 mt-2 xs:mt-4 justify-center align-middle  w-fit rounded-full items-center">
            <img src="{orcid_svg}" alt="orcid_image" class="h-5 select-none mr-1">
            <span class="font-mono text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">{orcid_url}</span>
        </a>
    {/if}
</div>