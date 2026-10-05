<script lang="ts">
    import { twMerge, type ClassNameValue } from "tailwind-merge";

    let { class: classes }: { class?: ClassNameValue } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" class={twMerge("h-30 w-60", classes)} viewBox="0 0 260 110">
    <g class="fill-content">
        <g stroke="#FF4D9A" stroke-width="12" stroke-linecap="round">
            <line x1="34" y1="20" x2="34" y2="76" />
            <line x1="7" y1="48" x2="61" y2="48" />
            <line x1="14" y1="28" x2="54" y2="68" />
            <line x1="54" y1="28" x2="14" y2="68" />
        </g>
        <text
            x="82"
            y="61"
            font-family="Arial, Helvetica, sans-serif"
            font-size="54"
            font-weight="800">DTF</text
        >
        <text
            x="84"
            y="91"
            font-family="Arial, Helvetica, sans-serif"
            font-size="25"
            font-weight="700">by Goteo</text
        >
    </g>
</svg>
