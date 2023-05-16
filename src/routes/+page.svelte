<script>
    import University from "../components/University.svelte";
    import GitHub from "../components/GitHub.svelte";
    import Java from "../components/LangAndFramework/Java.svelte";
    import PHP from "../components/LangAndFramework/PHP.svelte";
    import CSS from "../components/LangAndFramework/CSS.svelte";
    import Tailwind from "../components/LangAndFramework/Tailwind.svelte";
</script>

<main class="space-y-10 md:space-y-14 py-20 sm:space-y-32 sm:py-32">

    <GitHub date="Mar 17, 2023"
            type="Collaborated"
            repository="mariamuna04/LandSphere"
            link="https://github.com/mariamuna04/LandSphere"
            contribution="Created User Interface and Backend"
            addition="40,271 ++"
            subtraction="23,680 --">
        <PHP/>
        <Tailwind/>


    </GitHub>

    <GitHub date="Nov 16th, 2022"
            type="Collaborated"
            repository="mariamuna04/MomentTap"
            link="https://github.com/mariamuna04/MomentTap"
            contribution="Created User Interface and Backend"
            addition="9,239 ++"
            subtraction="6,579 --">
        <Java/> <CSS/>
    </GitHub>

    <GitHub date="Apr 25th, 2022"
            type="Contributed"
            repository="hunter-dibs/donation-plus"
            link="https://github.com/hunter-dibs/donation-plus"
            contribution="Created User Interface and Design"
            addition="4,937 ++"
            subtraction="1,240 --">
        <PHP/> <CSS/>
    </GitHub>

    <University/>
</main>
