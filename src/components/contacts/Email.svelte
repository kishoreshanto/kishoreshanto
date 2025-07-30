<script lang="ts">
    import data from "$lib/data_en.json";
    import EmailIcon from "../visuals/icons/EmailIcon.svelte";
    import {isEmailValid} from "$lib/utils";

    const show_mail: boolean = data.show_mail;

    let email = $state<string>('');
    let email_is_valid = $state<boolean>(false);

    $effect(() => {
        if (show_mail) {
            email = data.mail;
            if (email) email_is_valid = isEmailValid(email);
        }
    });
</script>

<a class="text-sm mt-3 text-sky-500 items-center flex gap-1 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500 font-medium transition-all duration-300"
   href="mailto:{email}">

    <EmailIcon/>

    {#if email}
        {#if email_is_valid}
            {email}
        {:else}
            <span class="text-red-500 dark:text-red-400 font-mono">Invalid email</span>
        {/if}
    {/if}
</a>