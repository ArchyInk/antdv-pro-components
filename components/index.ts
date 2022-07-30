/*
 * @author: Archy
 * @Date: 2022-07-15 15:43:12
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-30 11:46:59
 * @FilePath: \ant-design-vue-pro\components\index.ts
 * @description: 
 */
import type { App } from 'vue'
import * as Components from './components'
export * from './components'

export type Options = {
  prefix: string
}

export const install = (app: App, options: Options = { prefix: 'a' }) => {
  Object.keys(Components).forEach(key => {
    const component = (Components as Record<string, any>)[key]
    if (component.install) {
      app.use(component, options)
    }
  })
  return app
}

export default {
  install
}