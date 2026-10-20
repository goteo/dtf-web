<script lang="ts">
    import { twMerge, type ClassNameValue } from "tailwind-merge";

    let { class: classes }: { class?: ClassNameValue } = $props();
</script>

<img
    class={twMerge("w-56", classes)}
    src="/images/brand/DTFcrowd_orange_red.svg"
    alt="DTFcrowd by Goteo"
/>
