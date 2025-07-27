<!-- This file is for the left panel -->

<script lang="ts">
    // Imports of Personal Details Components
    import Name from "./sidebar/Name.svelte";
    import Title from "./sidebar/Title.svelte";
    import Description from "./sidebar/Description.svelte";
    import InterestAndPassion from "./sidebar/Interests.svelte";
    import Contacts from "./sidebar/Contacts.svelte";
    import Locals from "./sidebar/Locals.svelte";
    import DND from "./sidebar/DND.svelte";
    import Signature from "./sidebar/Signature.svelte";
    import UpdatedOn from "./sidebar/UpdatedOn.svelte";

    // Imports about Styles
    import RadialGlowBackground from "./visuals/RadialGlowBackground.svelte";
    import Language from "./sidebar/Language.svelte";
    import WarningIcon from "./visuals/icons/WarningIcon.svelte";

</script>

<div class="left-panel">
    <div class="radial-glow-background-container">
        <RadialGlowBackground/>
    </div>

    <div class="left-panel-container">
        <div>

            <!-- YOU CAN REORDER IT -->
            <div class="flex items-center text-xs bg-amber-200 w-fit pl-0.5 pr-2 py-0.5 rounded-full font-bold text text-amber-600 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300">
                <svg xmlns="http://www.w3.org/2000/svg"
                     height="16px"
                     viewBox="0 -960 960 960"
                     width="24px"
                     class="fill-amber-600 dark:fill-amber-300">
                    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                </svg>
                BETA v0.2.3, Expect Bugs
            </div>
            <Name/>
            <Title/>
            <Description/>

            <hr/>

            <InterestAndPassion/>
            <Language/>
            <Contacts/>
            <Locals/>
            <DND/>

            <!-- Last Updated -->
            <div class="left-panel-footer">
                <Signature/>
                <UpdatedOn/>
            </div>

        </div>
    </div>
</div>