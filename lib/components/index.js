"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  install: true
};
exports.install = exports["default"] = void 0;

var Components = _interopRequireWildcard(require("./components"));

Object.keys(Components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === Components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return Components[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @author: Archy
 * @Date: 2022-07-15 15:43:12
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-30 11:46:59
 * @FilePath: \ant-design-vue-pro\components\index.ts
 * @description: 
 */
var install = function install(app) {
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

exports.install = install;
var _default = {
  install: install
};
exports["default"] = _default;