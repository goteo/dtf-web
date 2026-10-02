import Mastodon from "../components/icons/social/Mastodon.svelte";

import type { FooterConfig } from "../types/footer";

export const FOOTER_DATA: FooterConfig = {
    funding: [
        { src: "/images/partners/PLATONIQ.png", alt: "Platoniq Foundation" },
        { src: "/images/partners/FKI.svg", alt: "Free Knowledge Institute" },
        { src: "/images/partners/COMMONSNETWORK.jpeg", alt: "Commons Network" },
        { src: "/images/partners/OPENTECH.png", alt: "OpenTech AUC" },
    ],
    partOf: [],
    navColumns: [
        {
            titleKey: "About",
            links: [
                {
                    href: "/about",
                    labelKey: "What is Goteo?",
                },
                {
                    href: "/about-dtf",
                    labelKey: "What is DTF?",
                },
            ],
        },
    ],
    legalLinks: [
        { href: "/terms", labelKey: "common.footer.legal.termsOfUse" },
        { href: "/privacy", labelKey: "common.footer.legal.privacyPolicy" },
        { href: "/licenses", labelKey: "common.footer.legal.licenses" },
        { href: "/stats", labelKey: "common.footer.legal.stats" },
    ],
    social: [
        {
            icon: Mastodon,
            href: "https://mastodon.social/@platoniq",
            labelKey: "Mastodon",
        },
    ],
    brand: {
        backgroundImage: "/images/brand/path2.svg",
        logo: { src: "/images/brand/goteo-white-logo.svg", alt: "Goteo logo" },
        platoniq: { src: "/images/brand/platoniq.png", alt: "Platoniq Foundation logo" },
    },
};
