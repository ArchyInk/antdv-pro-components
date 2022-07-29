"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _formPro = _interopRequireDefault(require("./formPro"));

var _formProItem = _interopRequireDefault(require("./formProItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @author: Archy
 * @Date: 2022-07-15 15:39:26
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 19:38:40
 * @FilePath: \ant-design-vue-pro\components\formPro\index.tsx
 * @description:
 */
_formPro["default"].install = function (app, options) {
  app.component(options.prefix + _formPro["default"].name, _formPro["default"]);
  app.component(options.prefix + _formProItem["default"].name, _formProItem["default"]);
  return app;
};

var _default = _formPro["default"];
exports["default"] = _default;