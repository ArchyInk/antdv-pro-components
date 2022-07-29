"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _antDesignVue = require("ant-design-vue");

var _Form = require("ant-design-vue/es/form/Form");

var _responsiveObserve = _interopRequireWildcard(require("ant-design-vue/es/_util/responsiveObserve"));

var _constant = require("../shared/constant");

var _lodash = require("lodash");

var _Row = require("ant-design-vue/lib/grid/Row");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0, _vue.isVNode)(s);
}

var formProProps = function formProProps() {
  var _rowProps = (0, _Row.rowProps)();

  _rowProps.gutter["default"] = 24;
  return Object.assign({}, (0, _Form.formProps)(), _rowProps, {
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

var _default2 = (0, _vue.defineComponent)({
  name: 'FormPro',
  props: formProProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        expose = _ref.expose;
    var token;

    var _toRefs = (0, _vue.toRefs)(props),
        column = _toRefs.column,
        mode = _toRefs.mode,
        disabled = _toRefs.disabled,
        model = _toRefs.model,
        rules = _toRefs.rules,
        immediate = _toRefs.immediate,
        deep = _toRefs.deep,
        debounce = _toRefs.debounce,
        validateOnRuleChange = _toRefs.validateOnRuleChange;

    var screens = (0, _vue.ref)({});
    var currentColumn = (0, _vue.ref)(3);

    var _Form$useForm = _antDesignVue.Form.useForm(model.value, rules.value, {
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

    (0, _vue.provide)('disabled', disabled);
    (0, _vue.provide)('column', currentColumn);
    (0, _vue.provide)('mode', mode);
    (0, _vue.provide)('validateInfos', validateInfos);
    expose({
      clearValidate: clearValidate,
      resetFields: resetFields,
      mergeValidateInfo: mergeValidateInfo,
      validate: validate,
      modelRef: modelRef,
      rulesRef: rulesRef
    });

    var _rowProps = (0, _vue.computed)(function () {
      return (0, _lodash.pick)(props, Object.keys((0, _Row.rowProps)()));
    });

    var _formProps = (0, _vue.computed)(function () {
      return (0, _lodash.omit)(props, Object.keys((0, _Row.rowProps)()));
    });

    (0, _vue.onBeforeMount)(function () {
      token = _responsiveObserve["default"].subscribe(function (screen) {
        if (_typeof(column) !== 'object') {
          return;
        }

        screens.value = screen;
        currentColumn.value = getColumn();
      });
    });
    (0, _vue.onBeforeUnmount)(function () {
      _responsiveObserve["default"].unsubscribe(token);
    }); // 获取列数

    var getColumn = function getColumn() {
      if (column.value === 0) {
        return 3;
      }

      if (typeof column.value === 'number') {
        return column.value;
      }

      if (_typeof(column.value) === 'object') {
        var _iterator = _createForOfIteratorHelper(_responsiveObserve.responsiveArray),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var bp = _step.value;

            if (screens.value[bp] && column.value[bp] !== undefined) {
              return column.value[bp] || _constant.DEFAULT_COLUMN_MAP[bp];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var _iterator2 = _createForOfIteratorHelper(_responsiveObserve.responsiveArray),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _bp = _step2.value;

          if (screens.value[_bp]) {
            return _constant.DEFAULT_COLUMN_MAP[_bp];
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

      return (0, _vue.createVNode)(_antDesignVue.Row, _rowProps.value, _isSlot(childrenNode) ? childrenNode : {
        "default": function _default() {
          return [childrenNode];
        }
      });
    };

    return function () {
      var _slot;

      return (0, _vue.createVNode)(_antDesignVue.Form, _formProps.value, _isSlot(_slot = renderGrid()) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});

exports["default"] = _default2;