/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: 'Nurul Ferdous',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: '/mw-docs/img/ferdous.jpg',
        infoLink: 'https://www.dynamicguy.com',
        pinned: true,
    },
];

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
    title: "MajorityWorld Documentation", // Title for your website.
    tagline: "MW e-commerce storefront docs",
    disableTitleTagline: false,
    url: "https://dynamicguy.github.io", // Your website URL
    baseUrl: "/mw-docs/", // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: "mw-docs",
    organizationName: "dynamicguy",
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    algolia: {
        apiKey: "5e79804ac3b7bb911008cfba457cba6a",
        indexName: "mw-docs",
        placeholder: "Search MW"
    },

    // Disable showing the title in the header next to the header icon.
    disableHeaderTitle: true,

    /* path to images for header/footer */
    headerIcon: "img/saleor-logo.svg",
    footerIcon: "img/footer-logo.png",
    twitterIcon: "img/twitter-icon.svg",
    fbIcon: "img/facebook-icon.svg",
    soIcon: "img/stackoverflow-icon.svg",
    githubIcon: "img/github-icon.svg",
    favicon: "img/saleor-icon.png",

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {doc: 'dashboard/before-you-start', label: 'Dashboard'},
        {doc: 'getting-started/intro', label: 'Server'},
        {href: '/mw-docs/docs/next/api/intro', label: 'GraphQL API'},
        {page: 'help', label: 'Help'},
        {blog: true, label: 'Blog'}
    ],

    users,
    /* Colors for website */
    colors: {
        primaryColor: "#0c7d7b",
        secondaryColor: "#5d623c"
    },

    /* Custom fonts for website */
    fonts: {
        inter: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Helvetica",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol"
        ]
    },

    editUrl: "https://github.com/dynamicguy/mw-docs/edit/master/docs/",

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Dynamic Guy`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: "atelier-sulphurpool-light"
    },

    usePrism: ["graphql"],

    markdownPlugins: [
        require("./markdown/cardgrid"),
        require("./markdown/homegrid"),
        require("./markdown/pillbutton")
    ],

    docsSideNavCollapsible: true,

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        "https://buttons.github.io/buttons.js",
        "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
        "/mw-docs/js/code-block-copy-button.js",
        "/mw-docs/js/script.js"
    ],

    // On page navigation for the current documentation page.
    onPageNav: "separate",
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: "img/undraw_online.svg",
    twitterImage: "img/undraw_tweetstorm.svg",

    // Google Analytics tracking ID to track page views.
    gaTrackingId: "",

    // Show documentation's last contributor's name.
    enableUpdateBy: true,

    // Show documentation's last update time.
    enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/dynamicguy/mw-docs',
};

module.exports = siteConfig;
