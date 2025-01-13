// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

const HIDDEN_ROUTES = [
  // "/docs/lessons/lesson01",
  // "/docs/lessons/lesson02",
  // "/docs/lessons/lesson03",
  // "/docs/lessons/lesson04",
  // "/docs/lessons/lesson05",
  // "/docs/lessons/lesson06",
  // "/docs/lessons/lesson07",
  // "/docs/lessons/lesson08",
  // "/docs/lessons/lesson09",
  "/docs/lessons/lesson10",
  "/docs/lessons/lesson11",

  // "/docs/notes/devtools",
  // "/docs/notes/editors",
  "/docs/notes/next",

  "/docs/summary",
];

function filterSidebarItems(items) {
  if (process.env.NODE_ENV === "development") {
    return items;
  }

  return items
    .filter((item) => !HIDDEN_ROUTES.includes(`/docs/${item.id}`)) // hide toplevel
    .map((potentiallyACategory) => {
      if (potentiallyACategory.type === "category") {
        return {
          ...potentiallyACategory,
          // hide sub-category items
          items: potentiallyACategory.items.filter(
            (item) => !HIDDEN_ROUTES.includes(`/docs/${item.id}`)
          ),
        };
      }

      return potentiallyACategory;
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

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en", "de"], // language codes
        excludeRoutes: HIDDEN_ROUTES,
        highlightResult: true,
        disableVersioning: true,
      },
    ],
  ],

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
