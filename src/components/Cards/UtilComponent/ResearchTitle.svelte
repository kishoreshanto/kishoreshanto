<script lang="ts">
    interface Props {
        card_title: string;
    }

    let { card_title }: Props = $props();

</script>

<div class="space-y-2">
    <h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
        {card_title}
    </h1>
</div>