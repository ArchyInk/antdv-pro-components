/*
 * @author: Archy
 * @Date: 2022-07-15 15:43:12
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-30 11:46:59
 * @FilePath: \ant-design-vue-pro\components\index.ts
 * @description: 
 */
import * as Components from './components';
export * from './components';
export var install = function install(app) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    prefix: 'a'
  };
  Object.keys(Components).forEach(function (key) {
    var component = Components[key];

    if (component.install) {
      app.use(component, options);
    }
  });
  return app;
};
export default {
  install: install
};