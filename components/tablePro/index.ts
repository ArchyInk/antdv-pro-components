/*
 * @author: Archy
 * @Date: 2022-07-15 15:40:57
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-15 16:00:06
 * @FilePath: \ant-design-vue-pro\components\tablePro\index.ts
 * @description: 
 */
import type { App, Plugin } from 'vue'
import Table from './tablePro'
import type { Options } from '../'

Table.install = (app: App, options: Options) => {
  console.log(options);
  app.component(options.prefix + Table.name, Table)
  return app
}

export default Table as typeof Table & Plugin