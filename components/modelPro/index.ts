/*
 * @Author: Archy
 * @Date: 2022-07-29 21:07:05
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 21:21:31
 * @FilePath: \ant-design-vue-pro\components\modelPro\index.ts
 * @description: 
 */
import type { App, Plugin } from 'vue'
import ModelPro from './modelPro'
import VueFullscreen from 'vue-fullscreen'
import type { Options } from '../'

ModelPro.install = (app: App, options: Options) => {
  app.use(VueFullscreen)
  app.component(options.prefix + ModelPro.name, ModelPro)
  return app
}

export default ModelPro as typeof ModelPro & Plugin
