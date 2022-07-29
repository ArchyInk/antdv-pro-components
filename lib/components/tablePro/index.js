"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tablePro = _interopRequireDefault(require("./tablePro"));

var _vueFullscreen = _interopRequireDefault(require("vue-fullscreen"));

var _formPro = _interopRequireDefault(require("../formPro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @author: Archy
 * @Date: 2022-07-15 15:40:57
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 19:40:58
 * @FilePath: \ant-design-vue-pro\components\tablePro\index.ts
 * @description:
 */
_tablePro["default"].install = function (app, options) {
  app.use(_vueFullscreen["default"]);
  app.use(_formPro["default"], options);
  app.component(options.prefix + _tablePro["default"].name, _tablePro["default"]);
  return app;
};

var _default = _tablePro["default"];
exports["default"] = _default;