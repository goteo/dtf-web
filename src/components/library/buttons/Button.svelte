<script lang="ts">
    import { twMerge, type ClassNameValue } from "tailwind-merge";

    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

    const sizeStyles = {
        md: "px-8 py-4 rounded-xl",
        sm: "px-4 py-2 rounded-xl",
    };

    const kindStyles = {
        primary: "bg-primary text-on-primary enabled:hover:bg-primary-hover",
        secondary: "bg-variant1 text-content enabled:hover:brightness-90",
        ghost: "inset-ring-1 inset-ring-secondary text-content enabled:hover:bg-content/10",
        invert: "text-content enabled:hover:bg-content/10",
    };

    interface Props extends Omit<HTMLButtonAttributes, "class"> {
        children: Snippet;
        href?: HTMLAnchorAttributes["href"];
        class?: ClassNameValue;
        size?: keyof typeof sizeStyles;
        kind?: keyof typeof kindStyles;
    }

    let {
        children,
        href,
        type = "button",
        disabled = false,
        class: classes = "",
        size = "md",
        kind = "primary",
        ...rest
    }: Props = $props();

    const anchorProps = rest as HTMLAnchorAttributes;
    const buttonProps = rest as HTMLButtonAttributes;

    const buttonClass = $derived(
        twMerge(
            "text-white disabled:bg-grey disabled:text-content/60 disabled:cursor-not-allowed flex w-auto items-center justify-center gap-2 font-bold transition hover:cursor-pointer",
            sizeStyles[size],
            kindStyles[kind],
            href && "hover:underline",
            href && kind === "primary" && "hover:bg-primary-hover",
            href && kind === "secondary" && "hover:brightness-90",
            href && (kind === "ghost" || kind === "invert") && "hover:bg-content/10",
            classes,
        ),
    );
</script>

{#if href}
    <a {href} class={buttonClass} {...anchorProps}>
        {@render children()}
    </a>
{:else}
    <button {type} {disabled} class={buttonClass} {...buttonProps}>
        {@render children()}
    </button>
{/if}
