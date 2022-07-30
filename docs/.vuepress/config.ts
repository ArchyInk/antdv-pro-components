/*
 * @author: Archy
 * @Date: 2022-07-30 14:24:04
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-30 15:48:13
 * @FilePath: \ant-design-vue-pro\docs\.vuepress\config.ts
 * @description: 
 */
import { defineUserConfig } from "vuepress";
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Pro Components',
  description: '基于Ant Design Vue 3.x封装的高级组件库',
  theme: defaultTheme({
    navbar: [
      // 指南
      {
        text: '指南',
        link: '/guide/'
      },
      // 参考
      {
        text: '组件',
        children: [
          '/components/table-pro.md',
          '/components/form-pro.md',
          '/components/modal-pro.md',
          '/components/water-mark.md',
          '/components/image-zoom.md',
          '/components/check-card.md',
          '/components/image-thumb.md',
          '/components/select-pro.md',
          '/components/select-table.md',
          '/components/list-pro.md',
        ]
      },
      // 指南
      {
        text: '更新日志',
        link: '/changeLog/'
      },
      // 指南
      {
        text: '源码',
        children: [
          {
            text: 'github',
            link: 'https://github.com/ArchyInk/antdv-pro-components'
          },
          {
            text: 'gitee',
            link: 'https://gitee.com/archyInk/antv-pro-components'
          },
        ]
      },
    ]
  })
})