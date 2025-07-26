<script lang="ts">
    import data from "$lib/data_en.json";
    import orcid_svg from "$lib/assets/icons/orcid.svg";

    const show_orcid: boolean = data.show_orcid;
    let orcid_url: string;
    if (show_orcid) {
        orcid_url = data.orcid_url;
    }
    const username = data.orcid_url.split('/')[3];

</script>

<a target="_blank" href="{data.orcid_url}"
   class="flex gap-1 mt-4 xs:mt-4 justify-center align-middle  w-fit rounded-full items-center">
    <img src="{orcid_svg}" alt="orcid_image" class="h-5 select-none mr-1">
    <span class="font-mono text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">{username}</span>
</a>