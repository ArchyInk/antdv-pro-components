"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableProProps = exports["default"] = void 0;

var _vue = require("vue");

var _table = require("ant-design-vue/es/table");

var _lodash = require("lodash");

var _antDesignVue = require("ant-design-vue");

var _vuedraggable = _interopRequireDefault(require("vuedraggable"));

var _iconsVue = require("@ant-design/icons-vue");

var _formPro = _interopRequireDefault(require("../formPro"));

var _formProItem = _interopRequireDefault(require("../formPro/formProItem"));

require("./style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0, _vue.isVNode)(s);
}

var tableProProps = function tableProProps() {
  return Object.assign({}, (0, _lodash.omit)((0, _table.tableProps)(), 'columns'), {
    // 列
    columns: {
      type: Array
    },
    // 当前页
    pageNum: {
      type: Number,
      validator: function validator(value) {
        return value > 0;
      },
      "default": 1
    },
    // 单页数据行数
    pageSize: {
      type: Number,
      "default": 10
    },
    // 单页数据行数选择器
    pageSizeOptions: {
      type: Array,
      "default": function _default() {
        return ['10', '20', '50', '100'];
      }
    },
    // 显示单页数据行数选择器
    showSizeChanger: {
      type: Boolean,
      defualt: true
    },
    // 显示快速跳转
    showQuickJumper: {
      type: Boolean,
      "default": true
    },
    // 显示总数量
    showTotal: {
      type: Boolean,
      "default": true
    },
    // 显示分页器
    showPagination: {
      type: Boolean,
      "default": true
    },
    // 数据字段名,默认为list
    dataField: {
      type: String,
      "default": 'list'
    },
    // 数据获取函数
    data: {
      type: Function
    },
    // 排序字段参数名
    sortField: {
      type: String,
      "default": 'sort'
    },
    // 升降序值名 [正序,倒序]
    sortValues: {
      type: Array,
      "default": function _default() {
        return ['asc', 'desc'];
      }
    },
    // 排序列参数名
    orderField: {
      type: String,
      "default": 'order'
    },
    // 顶部样式
    titleStyle: {
      type: Object
    },
    // pageSize
    pageSizeField: {
      type: String,
      "default": 'pageSize'
    },
    // pageNo
    pageNoField: {
      type: String,
      "default": 'pageNo'
    },
    // totalPage
    totalPageField: {
      type: String,
      "default": 'total'
    },
    // 允许显示的列
    accessColumns: {
      type: Array
    },
    // 显示顶部工具栏
    showTools: {
      type: Boolean,
      "default": true
    },
    // 显示搜索表单
    showSearchForm: {
      type: Boolean,
      "default": false
    },
    // 卡片边框
    cardBordered: {
      type: Boolean,
      "default": true
    },
    // 卡片内容自定义样式
    cardBodyStyle: {
      type: Object
    }
  });
};

exports.tableProProps = tableProProps;

var _default2 = (0, _vue.defineComponent)({
  name: 'TablePro',
  props: tableProProps(),
  setup: function setup(props, _ref) {
    var _Object$assign3;

    var slots = _ref.slots,
        expose = _ref.expose,
        emit = _ref.emit;

    var _toRefs = (0, _vue.toRefs)(props),
        columns = _toRefs.columns,
        pagination = _toRefs.pagination,
        size = _toRefs.size,
        sortValues = _toRefs.sortValues,
        showPagination = _toRefs.showPagination,
        pageNum = _toRefs.pageNum,
        pageSize = _toRefs.pageSize,
        sortField = _toRefs.sortField,
        orderField = _toRefs.orderField,
        data = _toRefs.data,
        dataField = _toRefs.dataField,
        showTotal = _toRefs.showTotal,
        showSizeChanger = _toRefs.showSizeChanger,
        showQuickJumper = _toRefs.showQuickJumper,
        pageSizeOptions = _toRefs.pageSizeOptions,
        pageSizeField = _toRefs.pageSizeField,
        pageNoField = _toRefs.pageNoField,
        totalPageField = _toRefs.totalPageField,
        showTools = _toRefs.showTools,
        titleStyle = _toRefs.titleStyle,
        accessColumns = _toRefs.accessColumns,
        cardBodyStyle = _toRefs.cardBodyStyle,
        cardBordered = _toRefs.cardBordered,
        showSearchForm = _toRefs.showSearchForm;

    var accessCols = (0, _vue.computed)(function () {
      var _columns$value;

      return accessColumns.value ? (_columns$value = columns.value) === null || _columns$value === void 0 ? void 0 : _columns$value.filter(function (item) {
        var _accessColumns$value;

        return (_accessColumns$value = accessColumns.value) === null || _accessColumns$value === void 0 ? void 0 : _accessColumns$value.includes(item.key);
      }) : columns.value;
    });

    var _columns = (0, _vue.ref)((0, _lodash.cloneDeep)(accessCols.value));

    var fullscreenState = (0, _vue.ref)(false);
    var local = (0, _vue.reactive)({
      dataSource: [],
      loading: false,
      error: false,
      pagination: (0, _vue.unref)(Object.assign({}, pagination.value)),
      size: (0, _vue.unref)(size),
      columns: _columns.value ? _columns.value.filter(function (item) {
        return !item.hide;
      }) : []
    }); // 渲染顶部工具栏

    var dragging = (0, _vue.ref)(false);
    var formInstance = (0, _vue.ref)();

    var renderTitle = function renderTitle(currentPageData) {
      var _slots$title;

      // 渲染表格size改变下拉框
      var renderTableSizeChangeOverLay = function renderTableSizeChangeOverLay() {
        return (0, _vue.createVNode)(_antDesignVue.Menu, null, {
          "default": function _default() {
            return [(0, _vue.createVNode)(_antDesignVue.MenuItem, {
              "onClick": function onClick() {
                return local.size = 'default';
              }
            }, {
              "default": function _default() {
                return [(0, _vue.createTextVNode)("\u9ED8\u8BA4")];
              }
            }), (0, _vue.createVNode)(_antDesignVue.MenuItem, {
              "onClick": function onClick() {
                return local.size = 'middle';
              }
            }, {
              "default": function _default() {
                return [(0, _vue.createTextVNode)("\u4E2D\u7B49")];
              }
            }), (0, _vue.createVNode)(_antDesignVue.MenuItem, {
              "onClick": function onClick() {
                return local.size = 'small';
              }
            }, {
              "default": function _default() {
                return [(0, _vue.createTextVNode)("\u7D27\u51D1")];
              }
            })];
          }
        });
      };

      var renderTableColumnsSetttingOverLay = function renderTableColumnsSetttingOverLay() {
        var resetColumns = function resetColumns() {
          _columns.value = (0, _lodash.cloneDeep)(columns.value);
          local.columns = _columns.value.filter(function (item) {
            return !item.hide;
          });
        };

        var dragEnd = function dragEnd() {
          local.columns = _columns.value.filter(function (item) {
            return !item.hide;
          });
          dragging.value = false;
        };

        var dragStart = function dragStart() {
          dragging.value = true;
        };

        var dragMove = function dragMove(evt) {
          return !evt.draggedContext.element.fixed;
        };

        var indeterminate = (0, _vue.computed)(function () {
          return _columns.value.some(function (item) {
            return item.hide;
          });
        });

        var checkAll = function checkAll(e) {
          if (e.target.checked) {
            _columns.value.forEach(function (item) {
              if (!!item.fixed) return;
              item.hide = false;
            });

            local.columns = _columns.value.filter(function (item) {
              return !item.hide;
            });
          } else {
            _columns.value.forEach(function (item, index) {
              if (!!item.fixed) return;
              item.hide = index !== 0;
            });

            local.columns = _columns.value.filter(function (item) {
              return !item.hide;
            });
          }
        };

        return (0, _vue.createVNode)(_vuedraggable["default"], (0, _vue.mergeProps)({
          "onEnd": dragEnd,
          "onStart": dragStart,
          "move": dragMove,
          "modelValue": _columns.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return _columns.value = $event;
          },
          "class": 'table-pro__columns',
          "component-data": {
            type: 'transition-group',
            name: 'flip-list'
          }
        }, {
          animation: 200,
          group: 'description',
          disabled: false,
          ghostClass: 'ghost'
        }, {
          "item-key": 'key'
        }), {
          header: function header() {
            return (0, _vue.createVNode)("div", {
              "class": 'table-pro__columns__header',
              "onClick": function onClick(e) {
                return e.stopPropagation();
              }
            }, [(0, _vue.createVNode)(_antDesignVue.Checkbox, {
              "defaultChecked": true,
              "indeterminate": indeterminate.value,
              "onChange": checkAll
            }, {
              "default": function _default() {
                return [(0, _vue.createTextVNode)("\u5217\u7B5B\u9009/\u6392\u5E8F")];
              }
            }), (0, _vue.createVNode)(_antDesignVue.Button, {
              "type": 'text',
              "size": 'small',
              "onClick": resetColumns
            }, {
              "default": function _default() {
                return [(0, _vue.createTextVNode)("\u91CD\u7F6E")];
              }
            })]);
          },
          item: function item(_ref2) {
            var element = _ref2.element;
            var checked = (0, _vue.ref)(!element.hide);

            var onChange = function onChange(e) {
              if (!e.target.checked && _columns.value.filter(function (item) {
                return !item.hide;
              }).length === 1) {
                return;
              }

              element.hide = !e.target.checked;
              local.columns = _columns.value.filter(function (item) {
                return !item.hide;
              });
            };

            return (0, _vue.createVNode)("div", {
              "class": "table-pro__columns__item ".concat(!!element.fixed ? 'table-pro__columns__item--disabled' : ''),
              "onClick": function onClick(e) {
                e.stopPropagation();
              }
            }, [(0, _vue.createVNode)("li", {
              "class": "table-pro__columns__item__icon"
            }, [(0, _vue.createVNode)("i", {
              "class": "".concat(element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'),
              "onClick": function onClick() {
                return element.fixed = !element.fixed;
              },
              "aria-hidden": 'true'
            }, [' ']), element.fixed ? (0, _vue.createVNode)("div", {
              "style": {
                width: '1em',
                height: '1em'
              }
            }, null) : (0, _vue.createVNode)(_iconsVue.HolderOutlined, null, null)]), (0, _vue.createVNode)(_antDesignVue.Checkbox, {
              "class": "table-pro__columns__item__title ",
              "disabled": !!element.fixed,
              "checked": checked.value,
              "onUpdate:checked": function onUpdateChecked($event) {
                return checked.value = $event;
              },
              "onChange": onChange
            }, {
              "default": function _default() {
                return [element.title];
              }
            })]);
          }
        });
      };

      return fullscreenState.value ? null : (0, _vue.createVNode)("div", {
        "class": 'table-pro__title',
        "style": titleStyle.value
      }, [(0, _vue.createVNode)("div", null, [(_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots, currentPageData)]), showTools.value ? (0, _vue.createVNode)("div", {
        "class": 'table-pro__title__tools'
      }, [(0, _vue.createVNode)("div", null, [(0, _vue.createVNode)(_iconsVue.ReloadOutlined, {
        "onClick": function onClick() {
          refresh();
        }
      }, null)]), (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)(_antDesignVue.Dropdown, {
        "placement": 'bottom',
        "trigger": ['click']
      }, {
        "default": function _default() {
          return [(0, _vue.createVNode)(_iconsVue.ColumnHeightOutlined, null, null)];
        },
        overlay: function overlay() {
          return renderTableSizeChangeOverLay();
        }
      })]), (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)(_antDesignVue.Dropdown, {
        "placement": 'bottom',
        "trigger": ['click']
      }, {
        "default": function _default() {
          return [(0, _vue.createVNode)(_iconsVue.SettingOutlined, null, null)];
        },
        overlay: function overlay() {
          return renderTableColumnsSetttingOverLay();
        }
      })]), (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)(_iconsVue.FullscreenOutlined, {
        "onClick": function onClick() {
          return fullscreenState.value = !fullscreenState.value;
        }
      }, null)])]) : null]);
    };

    var model = (0, _vue.reactive)({});
    accessCols.value.forEach(function (item) {
      if (!item.dataIndex) return;

      if (item.formItemType === 'input') {
        model[item.dataIndex] = '';
      } else {
        model[item.dataIndex] = undefined;
      }
    });

    var loadData = function loadData(pagination, filters, sorter, extra) {
      var _Object$assign;

      if (sorter !== null && sorter !== void 0 && sorter.order) {
        sorter.order = sortValues.value[sorter.order === 'ascend' ? 0 : 1];
      }

      local.loading = true;
      var p = Object.assign((_Object$assign = {}, _defineProperty(_Object$assign, pageNoField.value, (pagination === null || pagination === void 0 ? void 0 : pagination.current) || showPagination.value && local.pagination && local.pagination.current || pageNum.value), _defineProperty(_Object$assign, pageSizeField.value, (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) || showPagination.value && local.pagination && local.pagination.current || pageSize.value), _Object$assign), (sorter === null || sorter === void 0 ? void 0 : sorter.field) && _defineProperty({}, sortField.value, sorter.column.sorter === true ? (0, _lodash.snakeCase)(sorter.field) : sorter.column.sorter) || {}, (sorter === null || sorter === void 0 ? void 0 : sorter.order) && _defineProperty({}, orderField.value, sorter.order) || {}, _objectSpread({}, filters), (0, _vue.toRaw)(model));
      var result = data.value(p);
      result.then(function (res) {
        if (!res[dataField.value]) {
          console.warn("[sgd-pro-components]".concat(dataField.value, " is undefined in record!"));
          local.dataSource = [];
          local.loading = false;
          return;
        }

        if (local.pagination !== false) {
          if (!showPagination.value || !res[totalPageField.value]) {
            local.pagination = false;
          } else {
            local.pagination = Object.assign({}, local.pagination, {
              current: res[pageNoField.value],
              total: res[totalPageField.value],
              showTotal: showTotal.value && function (total) {
                return "\u603B\u5171 ".concat(total, " \u9879");
              },
              showSizeChanger: showSizeChanger.value,
              showQuickJumper: showQuickJumper.value,
              pageSizeOptions: pageSizeOptions.value,
              pageSize: (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) || local.pagination.pageSize
            }); // 如果没有数据则返回上一页

            if (res[dataField.value].length === 0 && local.pagination.current > 1) {
              local.pagination.current--;
              loadData(pagination);
              return;
            }
          }

          local.dataSource = res[dataField.value];
          local.loading = false;
        }
      })["catch"](function () {
        local.dataSource = [];
        local.error = true;
        local.loading = false;
      });
    };

    var renderSearchForm = function renderSearchForm() {
      if (!accessCols.value) {
        return;
      }

      var renderFormItem = function renderFormItem(column) {
        var _slot;

        var _column$formItemLabel;

        return (0, _vue.createVNode)(_formProItem["default"], {
          "order": column.order,
          "label": (_column$formItemLabel = column.formItemLabel) !== null && _column$formItemLabel !== void 0 ? _column$formItemLabel : column.title,
          "name": column.dataIndex
        }, _isSlot(_slot = function () {
          var _column$selectOptions, _column$customRenderF, _column$customRenderF2, _slots$formItem;

          switch (column.formItemType) {
            case 'input':
              return (0, _vue.createVNode)(_antDesignVue.Input, {
                "value": model[column.dataIndex],
                "onUpdate:value": function onUpdateValue($event) {
                  return model[column.dataIndex] = $event;
                },
                "placeholder": "请输入"
              }, null);

            case 'select':
              return (0, _vue.createVNode)(_antDesignVue.Select, {
                "value": model[column.dataIndex],
                "onUpdate:value": function onUpdateValue($event) {
                  return model[column.dataIndex] = $event;
                },
                "placeholder": "请选择",
                "options": typeof column.selectOptions === 'function' ? (_column$selectOptions = column.selectOptions) === null || _column$selectOptions === void 0 ? void 0 : _column$selectOptions.call(column) : column.selectOptions
              }, null);

            case 'timePicker':
              return (0, _vue.createVNode)(_antDesignVue.TimePicker, {
                "value": model[column.dataIndex],
                "onUpdate:value": function onUpdateValue($event) {
                  return model[column.dataIndex] = $event;
                },
                "style": {
                  width: '100%'
                },
                "placeholder": "请选择时间",
                "valueFormat": column.timeFormat
              }, null);

            case 'datePicker':
              return (0, _vue.createVNode)(_antDesignVue.DatePicker, {
                "value": model[column.dataIndex],
                "onUpdate:value": function onUpdateValue($event) {
                  return model[column.dataIndex] = $event;
                },
                "style": {
                  width: '100%'
                },
                "placeholder": "请选择日期",
                "valueFormat": column.timeFormat
              }, null);

            default:
              return (_column$customRenderF = (_column$customRenderF2 = column.customRenderFormItem) === null || _column$customRenderF2 === void 0 ? void 0 : _column$customRenderF2.call(column, model)) !== null && _column$customRenderF !== void 0 ? _column$customRenderF : (_slots$formItem = slots.formItem) === null || _slots$formItem === void 0 ? void 0 : _slots$formItem.call(slots, {
                column: column,
                model: model
              });
          }
        }()) ? _slot : {
          "default": function _default() {
            return [_slot];
          }
        });
      };

      return (0, _vue.createVNode)(_antDesignVue.Card, {
        "bodyStyle": cardBodyStyle.value,
        "bordered": cardBordered.value,
        "style": {
          borderRadius: '0',
          width: '100%'
        }
      }, {
        "default": function _default() {
          return [(0, _vue.createVNode)(_formPro["default"], {
            "model": model,
            "ref": formInstance
          }, {
            "default": function _default() {
              return [accessCols.value.map(function (column) {
                if (!column.dataIndex) return null;
                return column.showInForm ? renderFormItem(column) : null;
              }), (0, _vue.createVNode)(_formProItem["default"], {
                "span": "auto",
                "flex": "auto"
              }, {
                "default": function _default() {
                  return [(0, _vue.createVNode)(_antDesignVue.Space, {
                    "style": {
                      "float": 'right'
                    }
                  }, {
                    "default": function _default() {
                      return [(0, _vue.createVNode)(_antDesignVue.Button, {
                        "type": "primary",
                        "onClick": function onClick() {
                          refresh();
                        }
                      }, {
                        "default": function _default() {
                          return [(0, _vue.createTextVNode)("\u641C\u7D22")];
                        }
                      }), (0, _vue.createVNode)(_antDesignVue.Button, {
                        "onClick": function onClick() {
                          var _formInstance$value;

                          (_formInstance$value = formInstance.value) === null || _formInstance$value === void 0 ? void 0 : _formInstance$value.resetFields();
                        }
                      }, {
                        "default": function _default() {
                          return [(0, _vue.createTextVNode)("\u91CD\u7F6E")];
                        }
                      })];
                    }
                  })];
                }
              })];
            }
          })];
        }
      });
    };

    var refresh = function refresh() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (bool && showPagination.value) {
        var _Object$assign2;

        local.pagination = Object.assign({}, (_Object$assign2 = {}, _defineProperty(_Object$assign2, pageNoField.value, 1), _defineProperty(_Object$assign2, pageSizeField.value, pageSize.value), _Object$assign2));
      } // local.dataSource = []


      emit('refresh');
      loadData();
    };

    expose({
      refresh: refresh
    });
    local.pagination = showPagination.value && Object.assign({}, local.pagination, (_Object$assign3 = {}, _defineProperty(_Object$assign3, pageNoField.value, pageNum.value), _defineProperty(_Object$assign3, pageSizeField.value, pageSize.value), _defineProperty(_Object$assign3, "showTotal", showTotal.value && function (total) {
      return "\u603B\u5171".concat(total, "\u9879");
    }), _defineProperty(_Object$assign3, "showSizeChanger", showSizeChanger.value), _defineProperty(_Object$assign3, "showQuickJumper", showQuickJumper.value), _defineProperty(_Object$assign3, "pageSizeOptions", pageSizeOptions.value), _Object$assign3));
    loadData();
    (0, _vue.watch)(data, function () {
      refresh();
    });
    return function () {
      var _props = Object.assign({}, props, local);

      var renderTable = (0, _vue.createVNode)(_antDesignVue.Card, {
        "bodyStyle": cardBodyStyle.value,
        "bordered": cardBordered.value,
        "style": {
          borderRadius: '0',
          width: '100%'
        }
      }, {
        "default": function _default() {
          return [(0, _vue.createVNode)(_antDesignVue.Table, (0, _vue.mergeProps)(_props, {
            "onChange": loadData
          }), _objectSpread(_objectSpread({}, slots), {}, {
            title: (slots.title || showTools.value) && function (currentPageData) {
              return renderTitle(currentPageData);
            }
          }))];
        }
      });
      return (0, _vue.createVNode)((0, _vue.resolveComponent)("fullscreen"), {
        "ref": 'fullscreenEle',
        "modelValue": fullscreenState.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return fullscreenState.value = $event;
        },
        "fullscreenClass": 'table-pro--fullscreen'
      }, {
        "default": function _default() {
          return [(0, _vue.createVNode)(_antDesignVue.Space, {
            "direction": "vertical",
            "size": "middle",
            "style": {
              width: '100%'
            }
          }, {
            "default": function _default() {
              return [showSearchForm.value ? renderSearchForm() : null, renderTable];
            }
          })];
        }
      });
    };
  }
});

exports["default"] = _default2;