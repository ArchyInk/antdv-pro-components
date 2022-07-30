export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"actions\":[{\"text\":\"快速上手\",\"link\":\"/guide/getting-started.html\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"组件列表\",\"slug\":\"组件列表\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
