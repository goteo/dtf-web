import Fediverse from "../components/icons/social/Fediverse.svelte";
import Mastodon from "../components/icons/social/Mastodon.svelte";

import type { FooterConfig } from "../types/footer";

export const FOOTER_DATA: FooterConfig = {
    funding: [
        {
            src: "/images/partners/fki.svg",
            alt: "Free Knowledge Institute",
            href: "https://freeknowledge.eu",
        },
        {
            src: "/images/partners/commons_network.svg",
            alt: "Commons Network",
            href: "https://commonsnetwork.org",
        },
        {
            src: "/images/partners/platoniq_goteo.png",
            alt: "Goteo / Platoniq",
            href: "https://www.goteo.org",
        },
        { src: "/images/partners/waag.png", alt: "Waag Futurelab", href: "https://waag.org" },
        { src: "/images/partners/ecommons.svg", alt: "eCommons", href: "https://ecommons.space" },
        {
            src: "/images/partners/coopcloud.svg",
            alt: "Co-op Cloud",
            href: "https://coopcloud.tech",
        },
        {
            src: "/images/partners/newsmast-foundation.svg",
            alt: "Newsmast Foundation",
            href: "https://newsmastfoundation.org",
        },
        {
            src: "/images/partners/OPENTECH.png",
            alt: "OpenTech (AUC)",
            href: "https://opentech-auc.org",
        },
        {
            src: "/images/partners/PLATFORMCOOPS.svg",
            alt: "Platform Coops",
            href: "https://platformcoops.de",
        },
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
        {
            icon: Fediverse,
            href: "https://social.democratictech.fund/@DemocraticTechFund",
            labelKey: "Mastodon",
        },
    ],
    brand: {
        backgroundImage: "/images/brand/path2.svg",
        logo: { src: "/images/brand/goteo-white-logo.svg", alt: "Goteo logo" },
        platoniq: { src: "/images/brand/platoniq.png", alt: "Platoniq Foundation logo" },
    },
};
