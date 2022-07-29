/*
 * @author: Archy
 * @Date: 2022-07-15 15:39:26
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 19:38:40
 * @FilePath: \ant-design-vue-pro\components\formPro\index.tsx
 * @description:
 */
import FormPro from './formPro';
import FormProItem from './formProItem';

FormPro.install = function (app, options) {
  app.component(options.prefix + FormPro.name, FormPro);
  app.component(options.prefix + FormProItem.name, FormProItem);
  return app;
};

export default FormPro;