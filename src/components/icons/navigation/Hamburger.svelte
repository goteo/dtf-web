<script lang="ts">
    import { twMerge, type ClassNameValue } from "tailwind-merge";

    interface Props {
        class?: ClassNameValue;
        barClass?: ClassNameValue;
        close?: boolean;
        width?: string | number;
        height?: string | number;
    }

    let {
        class: classes = "",
        barClass = "",
        width = "40",
        height = "40",
        close = false,
    }: Props = $props();
</script>

<svg
    {width}
    {height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    class={twMerge("text-secondary", classes)}
>
    {#if close}
        <path d="m6 6 12 12M6 18 18 6" class={barClass} />
    {:else}
        <path d="M4 6h16M4 12h16M4 18h16" class={barClass} />
    {/if}
</svg>
