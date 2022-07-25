import { CSSProperties, defineComponent, ExtractPropTypes, PropType, reactive, toRefs, ref, Ref, unref, watch } from 'vue';
import { ColumnType, TablePaginationConfig, tableProps } from 'ant-design-vue/es/table'
import { cloneDeep, snakeCase } from 'lodash';
import { DefaultRecordType, PanelRender } from 'ant-design-vue/es/vc-table/interface';
import { Menu, MenuItem, PaginationProps, Table } from 'ant-design-vue';
import { FilterValue } from 'ant-design-vue/es/table/interface';

import './style/index.less'

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
  data: { type: Function as PropType<(parameter?: any) => (Promise<any> | Array<any>)> },

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
})

export type TableProProps = Partial<ExtractPropTypes<ReturnType<typeof tableProProps>>>

export interface ColumnProType<RecordType> extends ColumnType<RecordType> {
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
      totalPageField
    } = toRefs(props)
    const _columns = ref<ColumnsProType>(cloneDeep(columns.value) as ColumnsProType)

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
      const onRefresh = () => {
        refresh()
      }

      // 渲染表格size改变下拉框
      const renderTableSizeChangeOverLay = () => {
        <Menu>
          <MenuItem onClick={() => local.size = 'default'}>默认</MenuItem>
          <MenuItem onClick={() => local.size = 'middle'}>中等</MenuItem>
          <MenuItem onClick={() => local.size = 'small'}>紧凑</MenuItem>
        </Menu>
      }
    }

    const loadData = (pagination?: PaginationProps, filters?: Record<string, FilterValue | null>, sorter?: any, extra?: any) => {
      console.log('change');
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

      if (Array.isArray(result)) {

      } else {
        result.then((res: any) => {
          console.log(res);
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
        ...slots
      }} />
      )

      return <div>{renderTable}</div>
    }
  }
})