import Facebook from "../components/icons/social/Facebook.svelte";
import Gmail from "../components/icons/social/Gmail.svelte";
import Instagram from "../components/icons/social/Instagram.svelte";
import Linkedin from "../components/icons/social/Linkedin.svelte";
import X from "../components/icons/social/X.svelte";

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
            titleKey: "common.footer.navigation.collaborate.title",
            links: [
                {
                    href: "/about",
                    labelKey: "common.footer.navigation.collaborate.createProject",
                },
                {
                    href: "/about#dtf",
                    labelKey: "common.footer.navigation.collaborate.matchfunding",
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
            icon: Gmail,
            href: "mailto:info@goteo.org",
            labelKey: "common.footer.a11y.social.email",
        },
        {
            icon: Instagram,
            href: "https://instagram.com/goteofunding",
            labelKey: "common.footer.a11y.social.instagram",
        },
        {
            icon: Facebook,
            href: "https://facebook.com/goteofunding",
            labelKey: "common.footer.a11y.social.facebook",
        },
        {
            icon: X,
            href: "https://twitter.com/goteofunding",
            labelKey: "common.footer.a11y.social.x",
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/company/platoniqlab",
            labelKey: "common.footer.a11y.social.linkedin",
        },
    ],
    brand: {
        backgroundImage: "/images/brand/path2.svg",
        logo: { src: "/images/brand/goteo-white-logo.svg", alt: "Goteo logo" },
        platoniq: { src: "/images/brand/platoniq.png", alt: "Platoniq Foundation logo" },
    },
};
