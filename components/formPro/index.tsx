/*
 * @author: Archy
 * @Date: 2022-07-15 15:39:26
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 15:43:38
 * @FilePath: \ant-design-vue-pro\components\formPro\index.tsx
 * @description: 
 */
import type { App, Plugin } from 'vue'
import Form from './formPro'
import type { Options } from '../'

Form.install = (app: App, options: Options) => {
  app.component(options.prefix + Form.name, Form)
  return app
}

export default Form as typeof Form & Plugin