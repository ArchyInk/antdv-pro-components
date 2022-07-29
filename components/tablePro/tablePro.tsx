import {
  CSSProperties,
  defineComponent,
  ExtractPropTypes,
  PropType,
  reactive,
  toRefs,
  ref,
  unref,
  watch,
  computed,
  toRaw,
} from 'vue'

import {
  ColumnType,
  TablePaginationConfig,
  tableProps,
} from 'ant-design-vue/es/table'

import { cloneDeep, omit, snakeCase } from 'lodash'
import {
  DefaultRecordType,
  PanelRender,
} from 'ant-design-vue/es/vc-table/interface'
import { DefaultOptionType } from 'ant-design-vue/lib/select'
import {
  Checkbox,
  Dropdown,
  Menu,
  MenuItem,
  PaginationProps,
  Table,
  Button,
  Card,
  Space,
  Input,
  Select,
  TimePicker,
} from 'ant-design-vue'
import { FilterValue } from 'ant-design-vue/es/table/interface'
import Draggable from 'vuedraggable'

import './style/index.less'
import {
  ColumnHeightOutlined,
  FullscreenOutlined,
  ReloadOutlined,
  SettingOutlined,
  HolderOutlined,
} from '@ant-design/icons-vue'
import FormPro from '../formPro'
import FormProItem from '../formPro/formProItem'
import { FormProInstance } from '../formPro/formPro'

export const tableProProps = () =>
  Object.assign({}, omit(tableProps(), 'columns'), {
    // 列
    columns: { type: Array as PropType<ColumnsProType> },

    // 当前页
    pageNum: {
      type: Number,
      validator: (value: number) => value > 0,
      default: 1,
    },

    // 单页数据行数
    pageSize: { type: Number, default: 10 },

    // 单页数据行数选择器
    pageSizeOptions: {
      type: Array as PropType<Array<string>>,
      default: () => ['10', '20', '50', '100'],
    },

    // 显示单页数据行数选择器
    showSizeChanger: { type: Boolean, defualt: true },

    // 显示快速跳转
    showQuickJumper: { type: Boolean, default: true },

    // 显示总数量
    showTotal: { type: Boolean, default: true },

    // 显示分页器
    showPagination: { type: Boolean, default: true },

    // 数据字段名,默认为list
    dataField: { type: String, default: 'list' },

    // 数据获取函数
    data: { type: Function as PropType<(parameter?: any) => Promise<any>> },

    // 排序字段参数名
    sortField: { type: String, default: 'sort' },

    // 升降序值名 [正序,倒序]
    sortValues: {
      type: Array as PropType<Array<string>>,
      default: () => ['asc', 'desc'],
    },

    // 排序列参数名
    orderField: { type: String, default: 'order' },

    // 顶部样式
    titleStyle: { type: Object as PropType<CSSProperties> },

    // pageSize
    pageSizeField: { type: String, default: 'pageSize' },

    // pageNo
    pageNoField: { type: String, default: 'pageNo' },

    // totalPage
    totalPageField: { type: String, default: 'total' },

    // 允许显示的列
    accessColumns: { type: Array as PropType<Array<string>> },

    // 显示顶部工具栏
    showTools: { type: Boolean, default: true },

    // 显示搜索表单
    showSearchForm: { type: Boolean, default: false },

    // 卡片边框
    cardBordered: { type: Boolean, default: true },

    // 卡片内容自定义样式
    cardBodyStyle: { type: Object as PropType<CSSProperties> }
  })

export type TableProProps = Partial<
  ExtractPropTypes<ReturnType<typeof tableProProps>>
>

export type SearchFormItemType = 'select' | 'input' | 'timePicker' | 'timeRangePicker'

export interface ColumnProType<RecordType = any>
  extends ColumnType<RecordType> {
  hide?: boolean
  sort?: boolean | string
  formItemType?: SearchFormItemType
  customRenderFormItem?: (model: { [key: string]: any }) => JSX.Element
  selectOptions?: DefaultOptionType[] | (() => DefaultOptionType[])
  timeFormat?: string
  order?: number
  formItemLabel?: string
  showInForm?: boolean
}

export interface ColumnProGroupType<RecordType = any>
  extends Omit<ColumnProType<RecordType>, 'dataIndex'> {
  children: ColumnsProType<RecordType>
}

export declare type ColumnsProType<RecordType = any> = (
  | ColumnProGroupType<RecordType>
  | ColumnProType<RecordType>
)[]

export default defineComponent({
  name: 'TablePro',
  props: tableProProps(),
  setup(props, { slots, expose, emit }) {
    const {
      columns,
      pagination,
      size,
      sortValues,
      showPagination,
      pageNum,
      pageSize,
      sortField,
      orderField,
      data,
      dataField,
      showTotal,
      showSizeChanger,
      showQuickJumper,
      pageSizeOptions,
      pageSizeField,
      pageNoField,
      totalPageField,
      showTools,
      titleStyle,
      accessColumns,
      cardBodyStyle,
      cardBordered,
      showSearchForm
    } = toRefs(props)

    const accessCols = computed<ColumnsProType | undefined>(() =>
      accessColumns.value
        ? columns.value?.filter((item) =>
          accessColumns.value?.includes(item.key as string)
        )
        : columns.value
    )
    const _columns = ref<ColumnsProType>(
      cloneDeep(accessCols.value) as ColumnsProType
    )
    const fullscreenState = ref(false)
    const local = reactive<{
      dataSource: Array<any>
      loading: boolean
      error: boolean
      pagination?: false | TablePaginationConfig | undefined
      size?: 'small' | 'middle' | 'default' | 'large'
      columns: ColumnsProType
    }>({
      dataSource: [],
      loading: false,
      error: false,
      pagination: unref(Object.assign({}, pagination.value)),
      size: unref(size),
      columns: _columns.value
        ? _columns.value.filter((item) => !item.hide)
        : [],
    })

    // 渲染顶部工具栏
    const dragging = ref<boolean>(false)
    const formInstance = ref<FormProInstance>()

    const renderTitle = (currentPageData: PanelRender<DefaultRecordType>) => {
      // 渲染表格size改变下拉框
      const renderTableSizeChangeOverLay = () => (
        <Menu>
          <MenuItem onClick={() => (local.size = 'default')}>默认</MenuItem>
          <MenuItem onClick={() => (local.size = 'middle')}>中等</MenuItem>
          <MenuItem onClick={() => (local.size = 'small')}>紧凑</MenuItem>
        </Menu>
      )

      const renderTableColumnsSetttingOverLay = () => {
        const resetColumns = () => {
          _columns.value = cloneDeep(columns.value) as ColumnsProType
          local.columns = _columns.value.filter((item) => !item.hide)
        }

        const dragEnd = () => {
          local.columns = _columns.value.filter((item) => !item.hide)
          dragging.value = false
        }

        const dragStart = () => {
          dragging.value = true
        }

        const dragMove = (evt: any) => {
          return !evt.draggedContext.element.fixed
        }

        const indeterminate = computed(() =>
          _columns.value.some((item) => item.hide)
        )

        const checkAll = (e: any) => {
          if (e.target.checked) {
            _columns.value.forEach((item) => {
              if (!!item.fixed) return
              item.hide = false
            })
            local.columns = _columns.value.filter(
              (item: ColumnProType) => !item.hide
            )
          } else {
            _columns.value.forEach((item, index) => {
              if (!!item.fixed) return
              item.hide = index !== 0
            })
            local.columns = _columns.value.filter(
              (item: ColumnProType) => !item.hide
            )
          }
        }

        return (
          <Draggable
            onEnd={dragEnd}
            onStart={dragStart}
            move={dragMove}
            v-model={_columns.value}
            class='table-pro__columns'
            component-data={{
              type: 'transition-group',
              name: 'flip-list',
            }}
            {...{
              animation: 200,
              group: 'description',
              disabled: false,
              ghostClass: 'ghost',
            }}
            item-key='key'
            v-slots={{
              header: () => (
                <div
                  class='table-pro__columns__header'
                  onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    defaultChecked={true}
                    indeterminate={indeterminate.value}
                    onChange={checkAll}>
                    列筛选/排序
                  </Checkbox>
                  <Button type={'text'} size={'small'} onClick={resetColumns}>
                    重置
                  </Button>
                </div>
              ),
              item: ({ element }: any) => {
                const checked = ref(!element.hide)
                const onChange = (e: any) => {
                  if (
                    !e.target.checked &&
                    _columns.value.filter((item) => !item.hide).length === 1
                  ) {
                    return
                  }
                  element.hide = !e.target.checked
                  local.columns = _columns.value.filter(
                    (item: ColumnProType) => !item.hide
                  )
                }
                return (
                  <div
                    class={`table-pro__columns__item ${!!element.fixed
                      ? 'table-pro__columns__item--disabled'
                      : ''
                      }`}
                    onClick={(e) => {
                      e.stopPropagation()
                    }}>
                    <li class={`table-pro__columns__item__icon`}>
                      <i
                        class={`${element.fixed
                          ? 'fa fa-anchor'
                          : 'glyphicon glyphicon-pushpin'
                          }`}
                        onClick={() => (element.fixed = !element.fixed)}
                        aria-hidden='true'>
                        {' '}
                      </i>
                      {element.fixed ? (
                        <div style={{ width: '1em', height: '1em' }}></div>
                      ) : (
                        <HolderOutlined />
                      )}
                    </li>
                    <Checkbox
                      class={`table-pro__columns__item__title `}
                      disabled={!!element.fixed}
                      v-model:checked={checked.value}
                      onChange={onChange}>
                      {element.title}
                    </Checkbox>
                  </div>
                )
              },
            }}
          />
        )
      }

      return fullscreenState.value ? null : (
        <div class='table-pro__title' style={titleStyle.value}>
          <div>{slots.title?.(currentPageData)}</div>
          {showTools.value ? (
            <div class='table-pro__title__tools'>
              <div>
                <ReloadOutlined
                  onClick={() => {
                    refresh()
                  }}
                />
              </div>
              <div>
                <Dropdown
                  placement='bottom'
                  trigger={['click']}
                  v-slots={{ overlay: () => renderTableSizeChangeOverLay() }}>
                  <ColumnHeightOutlined />
                </Dropdown>
              </div>
              <div>
                <Dropdown
                  placement='bottom'
                  trigger={['click']}
                  v-slots={{
                    overlay: () => renderTableColumnsSetttingOverLay(),
                  }}>
                  <SettingOutlined />
                </Dropdown>
              </div>
              <div>
                <FullscreenOutlined
                  onClick={() =>
                    (fullscreenState.value = !fullscreenState.value)
                  }
                />
              </div>
            </div>
          ) : null}
        </div>
      )
    }

    const model = reactive<{ [key: string]: any }>({})

    accessCols.value!.forEach((item: ColumnProType) => {
      if (!item.dataIndex) return
      if (item.formItemType === 'input') {
        model[item.dataIndex as string] = ''
      } else {
        model[item.dataIndex as string] = undefined
      }
    })


    const loadData = (
      pagination?: PaginationProps,
      filters?: Record<string, FilterValue | null>,
      sorter?: any,
      extra?: any
    ) => {
      if (sorter?.order) {
        sorter.order = sortValues.value[sorter.order === 'ascend' ? 0 : 1]
      }

      local.loading = true

      const p = Object.assign(
        {
          [pageNoField.value]:
            pagination?.current ||
            (showPagination.value &&
              local.pagination &&
              local.pagination!.current) ||
            pageNum.value,
          [pageSizeField.value]:
            pagination?.pageSize ||
            (showPagination.value &&
              local.pagination &&
              local.pagination!.current) ||
            pageSize.value,
        },
        (sorter?.field && {
          [sortField.value]:
            sorter.column.sorter === true
              ? snakeCase(sorter.field)
              : sorter.column.sorter,
        }) ||
        {},
        (sorter?.order && { [orderField.value]: sorter.order }) || {},
        {
          ...filters,
        },
        toRaw(model)
      )

      const result = data.value!(p)

      result
        .then((res: any) => {
          if (!res[dataField.value]) {
            console.warn(
              `[sgd-pro-components]${dataField.value} is undefined in record!`
            )
            local.dataSource = []
            local.loading = false
            return
          }

          if (local.pagination !== false) {
            if (!showPagination.value || !res[totalPageField.value]) {
              local.pagination = false
            } else {
              local.pagination = Object.assign({}, local.pagination, {
                current: res[pageNoField.value],
                total: res[totalPageField.value],
                showTotal:
                  showTotal.value && ((total: number) => `总共 ${total} 项`),
                showSizeChanger: showSizeChanger.value,
                showQuickJumper: showQuickJumper.value,
                pageSizeOptions: pageSizeOptions.value,
                pageSize: pagination?.pageSize || local.pagination!.pageSize,
              })

              // 如果没有数据则返回上一页
              if (
                res[dataField.value].length === 0 &&
                local.pagination.current! > 1
              ) {
                local.pagination.current!--
                loadData(pagination)
                return
              }
            }
            local.dataSource = res[dataField.value] as object[]
            local.loading = false
          }
        })
        .catch(() => {
          local.dataSource = []
          local.error = true
          local.loading = false
        })
    }



    const renderSearchForm = () => {
      if (!accessCols.value) {
        return
      }


      const renderFormItem = (column: ColumnProType) => {
        return <FormProItem order={column.order} label={column.formItemLabel ?? column.title} name={column.dataIndex as string}>{(() => {
          switch (column.formItemType) {
            case 'input': return <Input v-model:value={model[column.dataIndex as string]} placeholder="请输入"></Input>
            case 'select': return <Select v-model:value={model[column.dataIndex as string]} placeholder="请选择" options={typeof column.selectOptions === 'function' ? column.selectOptions?.() : column.selectOptions}></Select>
            case 'timePicker': return <TimePicker v-model:value={model[column.dataIndex as string]} style={{ width: '100%' }} placeholder="请选择时间" valueFormat={column.timeFormat}></TimePicker>
            default: return column.customRenderFormItem?.(model) ?? slots.formItem?.({ column, model })
          }
        })()}</FormProItem>
      }
      return <Card bodyStyle={cardBodyStyle.value} bordered={cardBordered.value} style={{ borderRadius: '0', width: '100%' }}>
        <FormPro model={model} ref={formInstance}>
          {accessCols.value.map((column: ColumnProType) => {
            if (!column.dataIndex) return null
            return column.showInForm ? renderFormItem(column) : null
          })}
          <FormProItem span="auto" flex="auto">
            <Space style={{ float: 'right' }}>
              <Button type={"primary"} onClick={() => {
                refresh()
              }}>搜索</Button>
              <Button onClick={() => {
                formInstance.value?.resetFields()
              }}>重置</Button>
            </Space>
          </FormProItem>
        </FormPro>
      </Card>
    }


    const refresh = (bool = false) => {
      if (bool && showPagination.value) {
        local.pagination = Object.assign(
          {},
          {
            [pageNoField.value]: 1,
            [pageSizeField.value]: pageSize.value,
          }
        )
      }

      // local.dataSource = []
      emit('refresh')
      loadData()
    }

    expose({ refresh })

    local.pagination =
      showPagination.value &&
      Object.assign({}, local.pagination, {
        [pageNoField.value]: pageNum.value,
        [pageSizeField.value]: pageSize.value,
        showTotal: showTotal.value && ((total: number) => `总共${total}项`),
        showSizeChanger: showSizeChanger.value,
        showQuickJumper: showQuickJumper.value,
        pageSizeOptions: pageSizeOptions.value,
      })

    loadData()

    watch(data, () => {
      refresh()
    })

    return () => {
      const _props = Object.assign({}, props, local)
      const renderTable = (
        <Card bodyStyle={cardBodyStyle.value} bordered={cardBordered.value} style={{ borderRadius: '0', width: '100%' }}>
          <Table
            {..._props}
            onChange={loadData}
            v-slots={{
              ...slots,
              title:
                (slots.title || showTools.value) &&
                ((currentPageData: PanelRender<DefaultRecordType>) =>
                  renderTitle(currentPageData)),
            }}
          />
        </Card>
      )

      return (

        <fullscreen
          ref='fullscreenEle'
          v-model={fullscreenState.value}
          fullscreenClass='table-pro--fullscreen'>
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            {showSearchForm.value ? renderSearchForm() : null}
            {renderTable}
          </Space>
        </fullscreen>
      )
    }
  },
})
