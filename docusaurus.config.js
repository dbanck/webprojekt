// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

function filterSidebarItems(items) {
  if (process.env.NODE_ENV === "development") {
    return items;
  }

  return items
    .filter((item) => item.className !== "hidden") // hide toplevel
    .map((item) => {
      if (item.type === "category") {
        return {
          ...item,
          items: item.items.filter((item) => item.className !== "hidden"), // hide sub-category items
        };
      }
      return item;
    });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Webprojekt",
  tagline: "Einstieg in die Webentwicklung",
  url: "https://www.webprojekt.link",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dbanck", // Usually your GitHub org/user name.
  projectName: "webprojekt", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return filterSidebarItems(sidebarItems);
          },
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/dbanck/webprojekt/edit/main",
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
        title: "Webprojekt",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Infos",
          },
          {
            position: "left",
            label: "GitHub Code",
            href: "https://github.com/dbanck/webprojekt-wise24",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Made by Basti & Daniel. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
