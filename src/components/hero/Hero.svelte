<script lang="ts">
    import Grid from "../library/layout/Grid.svelte";

    import type { HomeHeroRecord } from "../../repositories/homeHero";

    interface Props {
        hero?: HomeHeroRecord | null;
        content?: string | null;
    }

    let { hero, content }: Props = $props();

    let hasMedia = $derived(Boolean(hero?.mediaUrl));
    let isVideo = $derived(hero?.mediaType?.startsWith("video/") ?? false);
</script>

{#if hero}
    <section class="wrapper hero-section flex">
        <div class="container mx-auto py-16 lg:py-12">
            <Grid
                class={[
                    "grid-cols-1 items-center gap-12",
                    hasMedia ? "lg:grid-cols-2" : "lg:grid-cols-3",
                ].join(" ")}
            >
                <!-- Hero Content -->
                <div class={["space-y-8", !hasMedia && "lg:col-span-2"]}>
                    <h1 class="display-heading text-content text-3xl sm:text-4xl xl:text-5xl">
                        {hero.title}
                    </h1>
                    <div class="marked-content text-content space-y-1 text-lg leading-relaxed">
                        {@html content}
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col gap-4 sm:flex-row">
                        {#if hero.primaryCtaText && hero.primaryCtaLink}
                            <a
                                href={hero.primaryCtaLink}
                                class="text-on-primary bg-primary hover:bg-primary-hover inline-block rounded-full border-0 px-8 py-4 text-center font-semibold whitespace-nowrap transition-all duration-200 hover:opacity-90"
                            >
                                {hero.primaryCtaText}
                            </a>
                        {/if}
                        {#if hero.secondaryCtaText && hero.secondaryCtaLink}
                            <a
                                href={hero.secondaryCtaLink}
                                class="text-content hover:bg-content/10 inline-block rounded-full border-0 px-8 py-4 text-center font-semibold whitespace-nowrap transition-all duration-200 hover:opacity-90"
                            >
                                {hero.secondaryCtaText}
                            </a>
                        {/if}
                    </div>
                </div>

                <!-- Hero Illustration -->
                {#if hasMedia}
                    <div class="relative flex justify-center lg:justify-end">
                        <div class="relative aspect-668/510 w-full max-w-xl">
                            {#if isVideo}
                                <video
                                    src={hero.mediaUrl}
                                    autoplay
                                    muted
                                    loop
                                    playsinline
                                    class="h-full w-full object-contain"
                                ></video>
                            {:else}
                                <img
                                    src={hero.mediaUrl}
                                    alt={hero.title}
                                    class="h-full w-full object-contain"
                                />
                            {/if}
                        </div>
                    </div>
                {/if}
            </Grid>
        </div>
    </section>
{/if}
