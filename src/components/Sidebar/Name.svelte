<script lang="ts">
    export let name: any;

    const first_name: string = name.split(' ')[0];
    const last_name: string = name.split(' ').slice(1).join(' ');

</script>

<h1 class=" dark:text-white font-black text-5xl text-black">
    {first_name}
    <span class="text-sky-300">{last_name}</span>
</h1>