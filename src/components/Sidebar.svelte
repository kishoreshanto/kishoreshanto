<!-- This file is for the left panel -->

<script lang="ts">
    // Imports of Personal Details Components
    import Name from "./sidebar/Name.svelte";
    import Title from "./sidebar/Title.svelte";
    import Description from "./sidebar/Description.svelte";
    import Contacts from "./sidebar/Contacts.svelte";
    import InterestAndPassion from "./sidebar/Interests.svelte";

    // Imports about Styles
    import RadialGlowBackground from "./visuals/RadialGlowBackground.svelte";
    import Signature from "./sidebar/Signature.svelte";
    import Locals from "./sidebar/Locals.svelte";
    import UpdatedOn from "./sidebar/UpdatedOn.svelte";
    import DNDIcon from "./visuals/icons/DNDIcon.svelte";
    import DND from "./sidebar/DND.svelte";

</script>

<div class="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden dark:bg-gray-950 bg-white lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
        <RadialGlowBackground/>
    </div>

    <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]
         lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
        <div class="mx-auto mt-14 lg:mt-0 lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:justify-center">

            <Name/>
            <Title/>
            <Description/>

            <hr class="border my-4 dark:border-zinc-700">

            <InterestAndPassion/>
            <Contacts/>
            <Locals/>
            <DND/>

            <!-- Last Updated -->
            <div class="select-none mt-4 font-display text-sm font-medium cursor-default">
                <Signature/>
                <UpdatedOn/>
            </div>

        </div>
    </div>
</div>