<script>
    import data from "../data/intro.json";
    import RadialGlowBackground from "./Sidebar/RadialGlowBackground.svelte";
    import ContactInfo from "./Sidebar/ContactInfo.svelte";
    import Footer from "./Sidebar/Footer.svelte";
    import InterestAndPassion from "./Sidebar/InterestAndPassion.svelte";
    import Description from "./Sidebar/Description.svelte";
    import NameSection from "./Sidebar/NameSection.svelte";
    import TitleSection from "./Sidebar/TitleSection.svelte";

    const full_name = data.full_name;
    const first_name = full_name.split(' ')[0];
    const last_name = full_name.split(' ')[1];
    const title = data.title;
    const description = data.description;
    const email = data.mail;
</script>

<div class="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
    <div class="absolute inset-0 -z-10 overflow-hidden dark:bg-gray-950 bg-white lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
        <RadialGlowBackground/>
    </div>

    <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]
         lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
        <div class="mx-auto mt-14 lg:mt-0 lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:justify-center">

            <NameSection first_name="{first_name}" last_name="{last_name}"/>

            <TitleSection title="{title}"/>

            <Description description="{description}"/>

            <hr class="border my-4 dark:border-zinc-700">

            <InterestAndPassion/>

            <ContactInfo email="{email}"/>

            <Footer/>

        </div>
    </div>
</div>