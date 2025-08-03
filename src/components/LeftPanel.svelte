<!-- This file is for the left panel -->

<script lang="ts">
    // Imports of Personal Details Components
    import Name from "./sidebar/Name.svelte";
    import BetaPill from "./sidebar/BetaPill.svelte";
    import Title from "./sidebar/Title.svelte";
    import Description from "./sidebar/Description.svelte";
    import InterestAndPassion from "./sidebar/Interests.svelte";
    import Contacts from "./sidebar/Contacts.svelte";
    import Locals from "./sidebar/Locals.svelte";
    import DND from "./sidebar/DND.svelte";
    import UpdatedOn from "./sidebar/UpdatedOn.svelte";

    // Imports about Styles
    import RadialGlowBackground from "./visuals/RadialGlowBackground.svelte";
    import Language from "./sidebar/Language.svelte";

</script>

<div class="left-panel">
    <div class="radial-glow-background-container">
        <RadialGlowBackground/>
    </div>

    <div class="left-panel-container">
        <div>

            <!-- YOU CAN REORDER IT -->
            <BetaPill/>
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
                <UpdatedOn/>
            </div>

        </div>
    </div>
</div>