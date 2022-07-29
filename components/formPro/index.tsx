/*
 * @author: Archy
 * @Date: 2022-07-15 15:39:26
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 09:28:27
 * @FilePath: \ant-design-vue-pro\components\formPro\index.tsx
 * @description: 
 */
import type { App, Plugin } from 'vue'
import FormPro from './formPro'
import type { Options } from '../'

FormPro.install = (app: App, options: Options) => {
  app.component(options.prefix + FormPro.name, FormPro)
  return app
}

export default FormPro as typeof FormPro & Plugin