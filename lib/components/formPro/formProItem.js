"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formProItemProps = exports["default"] = void 0;

var _vue = require("vue");

var _antDesignVue = require("ant-design-vue");

var _Col = require("ant-design-vue/es/grid/Col");

var _FormItem = require("ant-design-vue/es/form/FormItem");

var _lodash = require("lodash");

require("./style/index.css");

/*
 * @author: Archy
 * @Date: 2022-07-28 09:58:15
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 19:35:28
 * @FilePath: \ant-design-vue-pro\components\formPro\formProItem.tsx
 * @description:
 */
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0, _vue.isVNode)(s);
}

var formProItemProps = function formProItemProps() {
  return Object.assign({}, (0, _lodash.omit)((0, _Col.colProps)(), 'span'), (0, _FormItem.formItemProps)(), {
    span: {
      type: [Number, String]
    }
  });
};

exports.formProItemProps = formProItemProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'FormProItem',
  props: formProItemProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var disabled = (0, _vue.inject)('disabled');
    var column = (0, _vue.inject)('column');
    var mode = (0, _vue.inject)('mode');
    var validateInfos = (0, _vue.inject)('validateInfos');

    var _colProps = (0, _vue.computed)(function () {
      return (0, _lodash.pick)(props, Object.keys((0, _Col.colProps)()));
    });

    var _formItemProps = (0, _vue.computed)(function () {
      return (0, _lodash.pick)(props, Object.keys((0, _FormItem.formItemProps)()));
    });

    var renderItem = function renderItem() {
      var _slots$default;

      return (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots).map(function (item) {
        var _item$props, _item$props2;

        return (mode === null || mode === void 0 ? void 0 : mode.value) === 'view' ? (0, _vue.createVNode)("div", null, [((_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.checked) === undefined ? (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.value : item.props.checked ? '是' : '否']) : (0, _vue.createVNode)(item, (0, _vue.mergeProps)(item.props, {
          "disabled": disabled === null || disabled === void 0 ? void 0 : disabled.value
        }), null);
      });
    };

    var span = (0, _vue.computed)(function () {
      if (!props.span) {
        var _column$value;

        return 24 / ((_column$value = column === null || column === void 0 ? void 0 : column.value) !== null && _column$value !== void 0 ? _column$value : 3);
      }

      if (props.span === 'auto') {
        return;
      }

      return props.span;
    });
    return function () {
      var _slot;

      return (0, _vue.createVNode)(_antDesignVue.Col, (0, _vue.mergeProps)(_colProps.value, {
        "span": span.value
      }), {
        "default": function _default() {
          return [(0, _vue.createVNode)(_antDesignVue.FormItem, (0, _vue.mergeProps)(_formItemProps.value, validateInfos === null || validateInfos === void 0 ? void 0 : validateInfos[props.name]), _isSlot(_slot = renderItem()) ? _slot : {
            "default": function _default() {
              return [_slot];
            }
          })];
        }
      });
    };
  }
});

exports["default"] = _default2;