/*
 * @author: Archy
 * @Date: 2022-07-15 15:40:57
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 19:40:58
 * @FilePath: \ant-design-vue-pro\components\tablePro\index.ts
 * @description:
 */
import Table from './tablePro';
import VueFullscreen from 'vue-fullscreen';
import FormPro from '../formPro';

Table.install = function (app, options) {
  app.use(VueFullscreen);
  app.use(FormPro, options);
  app.component(options.prefix + Table.name, Table);
  return app;
};

export default Table;