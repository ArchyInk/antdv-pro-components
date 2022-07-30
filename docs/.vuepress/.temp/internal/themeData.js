export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"组件\",\"children\":[\"/components/table-pro.md\",\"/components/form-pro.md\",\"/components/modal-pro.md\",\"/components/water-mark.md\",\"/components/image-zoom.md\",\"/components/check-card.md\",\"/components/image-thumb.md\",\"/components/select-pro.md\",\"/components/select-table.md\",\"/components/list-pro.md\"]},{\"text\":\"更新日志\",\"link\":\"/changeLog/\"},{\"text\":\"源码\",\"children\":[{\"text\":\"github\",\"link\":\"https://github.com/ArchyInk/antdv-pro-components\"},{\"text\":\"gitee\",\"link\":\"https://gitee.com/archyInk/antv-pro-components\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
