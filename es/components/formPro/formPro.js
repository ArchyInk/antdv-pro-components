import { createVNode as _createVNode, isVNode as _isVNode } from "vue";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
 * @author: Archy
 * @Date: 2022-07-27 15:34:03
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 22:52:14
 * @FilePath: \ant-design-vue-pro\components\formPro\formPro.tsx
 * @description:
 */
import { computed, defineComponent, onBeforeMount, onBeforeUnmount, ref, toRefs, provide } from 'vue';
import { Form, Row } from 'ant-design-vue';
import { formProps } from 'ant-design-vue/es/form/Form';
import ResponsiveObserve, { responsiveArray } from 'ant-design-vue/es/_util/responsiveObserve';
import { DEFAULT_COLUMN_MAP } from '../shared/constant';
import { omit, pick } from 'lodash';
import { rowProps } from 'ant-design-vue/lib/grid/Row';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !_isVNode(s);
}

var formProProps = function formProProps() {
  var _rowProps = rowProps();

  _rowProps.gutter["default"] = 24;
  return Object.assign({}, formProps(), _rowProps, {
    mode: {
      type: String,
      "default": 'edit'
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    column: {
      type: [Number, Object]
    },
    immediate: Boolean,
    deep: Boolean,
    validateOnRuleChange: Boolean,
    debounce: Object
  });
};

export default defineComponent({
  name: 'FormPro',
  props: formProProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        expose = _ref.expose;
    var token;

    var _toRefs = toRefs(props),
        column = _toRefs.column,
        mode = _toRefs.mode,
        disabled = _toRefs.disabled,
        model = _toRefs.model,
        rules = _toRefs.rules,
        immediate = _toRefs.immediate,
        deep = _toRefs.deep,
        debounce = _toRefs.debounce,
        validateOnRuleChange = _toRefs.validateOnRuleChange;

    var screens = ref({});
    var currentColumn = ref(3);

    var _Form$useForm = Form.useForm(model.value, rules.value, {
      immediate: immediate.value,
      deep: deep.value,
      debounce: debounce.value,
      validateOnRuleChange: validateOnRuleChange.value
    }),
        clearValidate = _Form$useForm.clearValidate,
        resetFields = _Form$useForm.resetFields,
        validateInfos = _Form$useForm.validateInfos,
        mergeValidateInfo = _Form$useForm.mergeValidateInfo,
        validate = _Form$useForm.validate,
        modelRef = _Form$useForm.modelRef,
        rulesRef = _Form$useForm.rulesRef;

    provide('disabled', disabled);
    provide('column', currentColumn);
    provide('mode', mode);
    provide('validateInfos', validateInfos);
    expose({
      clearValidate: clearValidate,
      resetFields: resetFields,
      mergeValidateInfo: mergeValidateInfo,
      validate: validate,
      modelRef: modelRef,
      rulesRef: rulesRef
    });

    var _rowProps = computed(function () {
      return pick(props, Object.keys(rowProps()));
    });

    var _formProps = computed(function () {
      return omit(props, Object.keys(rowProps()));
    });

    onBeforeMount(function () {
      token = ResponsiveObserve.subscribe(function (screen) {
        if (_typeof(column) !== 'object') {
          return;
        }

        screens.value = screen;
        currentColumn.value = getColumn();
      });
    });
    onBeforeUnmount(function () {
      ResponsiveObserve.unsubscribe(token);
    }); // 获取列数

    var getColumn = function getColumn() {
      if (column.value === 0) {
        return 3;
      }

      if (typeof column.value === 'number') {
        return column.value;
      }

      if (_typeof(column.value) === 'object') {
        var _iterator = _createForOfIteratorHelper(responsiveArray),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var bp = _step.value;

            if (screens.value[bp] && column.value[bp] !== undefined) {
              return column.value[bp] || DEFAULT_COLUMN_MAP[bp];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var _iterator2 = _createForOfIteratorHelper(responsiveArray),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _bp = _step2.value;

          if (screens.value[_bp]) {
            return DEFAULT_COLUMN_MAP[_bp];
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return 3;
    };

    var renderGrid = function renderGrid() {
      var _slots$default;

      var childrenNode = (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);

      if (!childrenNode) {
        return;
      }

      return _createVNode(Row, _rowProps.value, _isSlot(childrenNode) ? childrenNode : {
        "default": function _default() {
          return [childrenNode];
        }
      });
    };

    return function () {
      var _slot;

      return _createVNode(Form, _formProps.value, _isSlot(_slot = renderGrid()) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});