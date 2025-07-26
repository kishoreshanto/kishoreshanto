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
            <div class="text-xs bg-amber-200 w-fit px-2 py-0.5 rounded-full font-bold text text-amber-600 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300">
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