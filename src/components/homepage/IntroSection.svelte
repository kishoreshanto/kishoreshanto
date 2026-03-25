<script>
	import { onMount } from 'svelte';
	import ContactBox from './ContactBox.svelte';
	import DisplayImage from './DisplayImage.svelte';

	let animated = $state(false);

	onMount(() => {
		const timer = setTimeout(() => {
			animated = true;
		}, 100);
		return () => clearTimeout(timer);
	});
</script>

<div class="flex items-center justify-center xl:justify-start">
	<div
		class="flex flex-col items-center gap-4 text-center lg:gap-8 lg:text-start xl:flex-row 2xl:gap-18"
	>
		<div
			class="flex flex-col items-center gap-4 text-center lg:flex-row lg:gap-8 lg:text-start 2xl:gap-18"
		>
			<DisplayImage />

			<div class="flex flex-col gap-2">
				<h1 class="font-crimson-text text-5xl lg:text-6xl 2xl:text-8xl">
					Hey, <span class="name-highlight font-bold" class:name-highlight--animate={animated}
						>Kishore</span
					> here!
				</h1>

				<h3 class="font-crimson-text text-2xl font-semibold md:text-3xl xl:text-4xl">
					Software and AI Engineer, Researcher
				</h3>

				<p
					class="lg mt-2 flex flex-col gap-3 text-center font-lora text-lg text-gray-700 lg:max-w-xl lg:text-justify xl:max-w-4xl"
				>
					<span
						>Software and AI engineer here. I love building beautiful and functional softwares and
						training AI systems that solve real problems. I also enjoy writing about my experiences
						and sharing my knowledge with others.</span
					>
					<em>I believe in open source, open knowledge, and the power of community.</em>
				</p>
			</div>
		</div>

		<ContactBox />
	</div>
</div>
