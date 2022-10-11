const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Fivvy Docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#339DDF" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "EN",
        link: "/docs/en/",
      },
      {
        text: "ES",
        link: "/docs/es/",
      },
    ],
    sidebar: {
      "/docs/en/": [
        {
          title: "Documentation",
          collapsable: false,
          children: [
            "",
            "development-environment",
            "device-testing-configuration",
            "run-the-project",
            "libraries",
            "folder-structure",
            "standars",
          ],
        },
      ],
      "/docs/es/": [
        {
          title: "Documentación",
          collapsable: false,
          children: [
            "",
            "entorno-de-desarrollo",
            "dispositivos-de-prueba",
            "iniciar-el-proyecto",
            "dependencias",
            "arquitectura",
            "estandares",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
