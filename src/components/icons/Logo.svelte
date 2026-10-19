<script lang="ts">
    import { twMerge, type ClassNameValue } from "tailwind-merge";

    let { class: classes }: { class?: ClassNameValue } = $props();
</script>

<img
    class={twMerge("h-20", classes)}
    src="/images/brand/DTFcrowd_exact_artwork_transparent.png"
    alt="DTFcrowd by Goteo"
/>
