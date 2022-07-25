import { CSSProperties, defineComponent, ExtractPropTypes, PropType, reactive, toRefs, ref, Ref, unref, watch, computed } from 'vue';
import { ColumnType, TablePaginationConfig, tableProps } from 'ant-design-vue/es/table'
import { cloneDeep, snakeCase } from 'lodash';
import { DefaultRecordType, PanelRender } from 'ant-design-vue/es/vc-table/interface';
import { Checkbox, Dropdown, Menu, MenuItem, PaginationProps, Table } from 'ant-design-vue';
import { FilterValue } from 'ant-design-vue/es/table/interface';
import Draggable from 'vuedraggable';

import './style/index.less'
import { ColumnHeightOutlined, FullscreenOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons-vue';

export const tableProProps = () => Object.assign({}, tableProps(), {
  // 当前页
  pageNum: { type: Number, validator: (value: number) => value > 0, default: 1 },

  // 单页数据行数
  pageSize: { type: Number, default: 10 },

  // 单页数据行数选择器
  pageSizeOptions: { type: Array as PropType<Array<string>>, default: () => ['10', '20', '50', '100'] },

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
  sortValues: { type: Array as PropType<Array<string>>, default: () => ['asc', 'desc'] },

  // 排序列参数名
  orderField: { type: String, default: 'order' },

  // 顶部样式
  titleStyle: { type: Object as PropType<CSSProperties> },

  // 设置列属性
  customCol: { type: [Array, Boolean] as PropType<{ includeKeys?: Array<string>, excludeKeys?: Array<string> } | boolean> },

  // pageSize
  pageSizeField: { type: String, default: 'pageSize' },

  // pageNo
  pageNoField: { type: String, default: 'pageNo' },

  // totalPage
  totalPageField: { type: String, default: 'total' },

  // 允许显示的列
  accessColumns: { type: Array as PropType<Array<string>> },

  // 显示顶部工具栏
  showTools: { type: Boolean, default: true }
})

export type TableProProps = Partial<ExtractPropTypes<ReturnType<typeof tableProProps>>>

export interface ColumnProType<RecordType = any> extends ColumnType<RecordType> {
  hide: boolean,
  sort: boolean | string,
}

export interface ColumnProGroupType<RecordType> extends Omit<ColumnProType<RecordType>, 'dataIndex'> {
  children: ColumnsProType<RecordType>
}

export declare type ColumnsProType<RecordType = any> = (ColumnProGroupType<RecordType> | ColumnProType<RecordType>)[]

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
      titleStyle
    } = toRefs(props)

    const _columns = ref<ColumnsProType>(cloneDeep(columns.value) as ColumnsProType)
    const fullscreenState = ref(false)
    const local = reactive<{ dataSource: Array<any>, loading: boolean, error: boolean, pagination?: false | TablePaginationConfig | undefined, size?: 'small' | 'middle' | 'default' | 'large', columns: ColumnsProType }>({
      dataSource: [],
      loading: false,
      error: false,
      pagination: unref(Object.assign({}, pagination.value)),
      size: unref(size),
      columns: _columns.value ? _columns.value.filter((item) => !item.hide) : []
    })

    // 渲染顶部工具栏
    const renderTitle = (currentPageData: PanelRender<DefaultRecordType>) => {
      // 渲染表格size改变下拉框
      const renderTableSizeChangeOverLay = () => (
        <Menu>
          <MenuItem onClick={() => local.size = 'default'}>默认</MenuItem>
          <MenuItem onClick={() => local.size = 'middle'}>中等</MenuItem>
          <MenuItem onClick={() => local.size = 'small'}>紧凑</MenuItem>
        </Menu>
      )

      const renderTableColumnsSetttingOverLay = () => {
        const resetColumns = () => {
          _columns.value = cloneDeep(columns.value) as ColumnsProType
          local.columns = _columns.value.filter((item) => !item.hide)
        }

        const dragEnd = () => {
          local.columns = _columns.value.filter((item) => !item.hide)
        }

        const indeterminate = computed(() => _columns.value.some((item) => !item.hide))

        const checkAll = (e: any) => {
          if (e.target.checked) {
            _columns.value.map((item) => !item.hide)
            local.columns = _columns.value.filter((item: ColumnProType) => !item.hide)
          } else {
            _columns.value.map((item, index) => {
              item.hide = index !== 0
            })
            local.columns = _columns.value.filter((item: ColumnProType) => !item.hide)
          }
        }

        return (
          <Draggable onEnd={dragEnd} v-model={_columns.value} class="columnDrag" itemKey="key" v-slots={{
            header: () => (<div class="columnDrag__header" onClick={(e) => e.stopPropagation()}>
              <Checkbox defaultChecked={true} indeterminate={indeterminate.value} onChange={checkAll} >列筛选/排序</Checkbox>
              <a href="javascript:void(0)" onClick={resetColumns} >重置</a>
            </div >),
            item: ({ element }: any) => {
              const checked = ref(!element.hide)
              const onChange = (e: any) => {
                if (!e.target.checked && _columns.value.filter((item) => !item.hide).length === 1) {
                  return;
                }
                element.show = e.target.checked
                local.columns = _columns.value.filter((item: ColumnProType) => !item.hide)
              }
              return (<div class="columnDrag__item" onClick={(e) => e.stopPropagation()}>
                ::&nbsp;
                <Checkbox v-model:checked={checked.value} onChange={onChange}>{element.title}</Checkbox>
              </div >)
            },
          }}
          />
        )
      }

      return (
        fullscreenState.value ? null :
          (<div class="sgd-table-title" style={titleStyle.value}>
            <div>{slots.title?.(currentPageData)}</div>
            {showTools.value ? <div class="sgd-table-title-btns">
              <div>
                <ReloadOutlined onClick={() => { refresh() }} />
              </div>
              <div>
                <Dropdown placement="bottomCenter" trigger={['click']} v-slots={{ overlay: () => renderTableSizeChangeOverLay() }}>
                  <ColumnHeightOutlined />
                </Dropdown>
              </div>
              <div>
                <Dropdown placement="bottomCenter" trigger={['click']} v-slots={{ overlay: () => renderTableColumnsSetttingOverLay() }}>
                  <SettingOutlined />
                </Dropdown>
              </div>
              <div>
                <FullscreenOutlined onClick={() => fullscreenState.value = !fullscreenState.value} />
              </div>
            </div> : null}
          </div>)
      )
    }

    const loadData = (pagination?: PaginationProps, filters?: Record<string, FilterValue | null>, sorter?: any, extra?: any) => {
      if (sorter?.order) {
        sorter.order = sortValues.value[sorter.order === 'ascend' ? 0 : 1]
      }

      local.loading = true

      const p = Object.assign(
        {
          [pageNoField.value]: (pagination?.current) || (showPagination.value && (local.pagination && local.pagination!.current)) || pageNum.value,
          [pageSizeField.value]: (pagination?.pageSize) || (showPagination.value && (local.pagination && local.pagination!.current)) || pageSize.value,
        },
        (sorter?.field && { [sortField.value]: sorter.column.sorter === true ? snakeCase(sorter.field) : sorter.column.sorter }) || {},
        (sorter?.order && { [orderField.value]: sorter.order }) || {},
        {
          ...filters
        }
      )

      const result = data.value!(p)

      result.then((res: any) => {
        if (!res[dataField.value]) {
          console.warn(`[sgd-pro-components]${dataField.value} is undefined in record!`);
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
              showTotal: showTotal.value && ((total: number) => `总共 ${total} 项`),
              showSizeChanger: showSizeChanger.value,
              showQuickJumper: showQuickJumper.value,
              pageSizeOptions: pageSizeOptions.value,
              pageSize: pagination?.pageSize || local.pagination!.pageSize
            })

            // 如果没有数据则返回上一页
            if (res[dataField.value].length === 0 && (local.pagination.current! > 1)) {
              local.pagination.current!--
              loadData(pagination)
              return
            }
          }
          local.dataSource = res[dataField.value] as object[]
          local.loading = false
        }
      }).catch(() => {
        local.dataSource = []
        local.error = true
        local.loading = false
      })
    }

    const refresh = (bool = false) => {
      if (bool && showPagination.value) {
        local.pagination = Object.assign({}, {
          [pageNoField.value]: 1,
          [pageSizeField.value]: pageSize.value
        })
      }

      local.dataSource = []
      emit('refresh')
      loadData()
    }

    expose({ refresh })

    local.pagination = showPagination.value && Object.assign({}, local.pagination, {
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
      const renderTable = (<Table {..._props} onChange={loadData} v-slots={{
        ...slots,
        title: (slots.title || showTools.value) ? (currentPageData: PanelRender<DefaultRecordType>) => renderTitle(currentPageData) : undefined,
      }} />
      )

      return <div>{renderTable}</div>
    }
  }
})