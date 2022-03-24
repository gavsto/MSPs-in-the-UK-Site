// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MSPs in the UK",
  tagline: "A free community specifically for UK MSPs only",
  url: "https://mspsinthe.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gavsto", // Usually your GitHub org/user name.
  projectName: "mspsintheuk", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "MSPs in the UK",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "About Us",
          },
          {
            href: "https://discord.gg/xsXC2bnkRq",
            label: "Join",
            position: "left",
          },
          {
            type: "doc",
            docId: "mspcodeofconduct",
            position: "left",
            label: "MSP Code of Conduct",
          },
          {
            type: "doc",
            docId: "vendorcodeofconduct",
            position: "left",
            label: "Vendor Code of Conduct",
          },
          {
            type: "doc",
            docId: "tlp",
            position: "left",
            label: "Our TLP System",
          },
          {
            href: "https://forms.office.com/r/rvsY7pDH16",
            label: "Ask Anonymous Question",
            position: "left",
          },
          {
            href: "mailto:gavsto@gmail.com",
            label: "Contact Us",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "MSP Code of Conduct",
                to: "/docs/mspcodeofconduct",
              },
              {
                label: "Vendor Code of Conduct",
                to: "/docs/vendorcodeofconduct",
              },
              {
                label: "Our TLP System",
                to: "/docs/tlp",
              },
            ],
          },
          {
            title: "Other Communities",
            items: [
              {
                label: "CIPP",
                href: "https://cipp.app/",
              },
              {
                label: "MSPGeek",
                href: "https://mspgeek.org/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Reddit MSP",
                href: "https://reddit.com/r/msp",
              },
              {
                label: "Cyberdrain",
                href: "https://cyberdrain.com",
              },
              {
                label: "Homotechsual's Blog",
                href: "https://homotechsual.dev/",
              },
              {
                label: "Luke Whitelock's Blog (MSPP)",
                href: "https://mspp.io/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MSPs in the UK. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
