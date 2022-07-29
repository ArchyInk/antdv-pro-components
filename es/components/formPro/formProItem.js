import { isVNode as _isVNode, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";

/*
 * @author: Archy
 * @Date: 2022-07-28 09:58:15
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 19:35:28
 * @FilePath: \ant-design-vue-pro\components\formPro\formProItem.tsx
 * @description:
 */
import { defineComponent, inject, computed } from 'vue';
import { Col, FormItem } from 'ant-design-vue';
import { colProps } from 'ant-design-vue/es/grid/Col';
import { formItemProps } from 'ant-design-vue/es/form/FormItem';
import { omit, pick } from 'lodash';
import './style/index.css';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !_isVNode(s);
}

export var formProItemProps = function formProItemProps() {
  return Object.assign({}, omit(colProps(), 'span'), formItemProps(), {
    span: {
      type: [Number, String]
    }
  });
};
export default defineComponent({
  name: 'FormProItem',
  props: formProItemProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var disabled = inject('disabled');
    var column = inject('column');
    var mode = inject('mode');
    var validateInfos = inject('validateInfos');

    var _colProps = computed(function () {
      return pick(props, Object.keys(colProps()));
    });

    var _formItemProps = computed(function () {
      return pick(props, Object.keys(formItemProps()));
    });

    var renderItem = function renderItem() {
      var _slots$default;

      return (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots).map(function (item) {
        var _item$props, _item$props2;

        return (mode === null || mode === void 0 ? void 0 : mode.value) === 'view' ? _createVNode("div", null, [((_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.checked) === undefined ? (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.value : item.props.checked ? '是' : '否']) : _createVNode(item, _mergeProps(item.props, {
          "disabled": disabled === null || disabled === void 0 ? void 0 : disabled.value
        }), null);
      });
    };

    var span = computed(function () {
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

      return _createVNode(Col, _mergeProps(_colProps.value, {
        "span": span.value
      }), {
        "default": function _default() {
          return [_createVNode(FormItem, _mergeProps(_formItemProps.value, validateInfos === null || validateInfos === void 0 ? void 0 : validateInfos[props.name]), _isSlot(_slot = renderItem()) ? _slot : {
            "default": function _default() {
              return [_slot];
            }
          })];
        }
      });
    };
  }
});