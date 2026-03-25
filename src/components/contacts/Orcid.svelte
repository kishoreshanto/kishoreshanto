<script lang="ts">
	import data from '$lib/data/personal.json';
	// import orcid_svg from '$lib/assets/icons/orcid.svg';

	const show_orcid: boolean = data.show_orcid;
	let orcid_url: string;
	if (show_orcid) {
		orcid_url = data.orcid_url;
	}
	const username = data.orcid_url.split('/')[3];
</script>

<a
	target="_blank"
	href={data.orcid_url}
	class="mt-4 flex w-fit items-center justify-center gap-1 rounded-full align-middle xs:mt-4"
>
	<!-- <img src={orcid_svg} alt="orcid_image" class="mr-1 h-5 select-none" /> -->
	<span
		class="font-mono text-xs font-light text-gray-500 transition-all duration-300 hover:text-gray-900 xs:text-sm dark:hover:text-gray-300"
		>{username}</span
	>
</a>
