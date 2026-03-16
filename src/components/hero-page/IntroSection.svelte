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

<div class="flex items-center justify-center lg:justify-start">
	<div
		class="flex flex-col items-center gap-4 text-center lg:flex-row lg:gap-8 lg:text-start 2xl:gap-18"
	>
		<DisplayImage />
		<div class="flex flex-col gap-2">
			<h1 class="font-crimson-text text-6xl xl:text-8xl">
				Hey, <span class="name-highlight font-bold" class:name-highlight--animate={animated}
					>Kishore</span
				> here!
			</h1>

			<h3 class="font-crimson-text text-2xl font-semibold md:text-3xl xl:text-4xl">
				Software Engineer, Designer, Writer
			</h3>

			<p
				class="lg mt-2 text-center font-lora text-lg text-gray-700 lg:max-w-xl lg:text-justify xl:max-w-4xl"
			>
				I'm a software engineer and designer based in New York. I have a passion for building
				beautiful and functional products that solve real problems. I also enjoy writing about my
				experiences and sharing my knowledge with others.
			</p>
		</div>
		<ContactBox />
	</div>
</div>
