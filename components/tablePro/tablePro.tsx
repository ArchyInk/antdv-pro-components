import { CSSProperties, defineComponent, ExtractPropTypes, PropType, reactive, toRefs, ref, Ref, unref } from 'vue';
import { ColumnType, TablePaginationConfig, tableProps } from 'ant-design-vue/es/table'
import { useState } from 'arhooks-vue';
import { cloneDeep } from 'lodash';


export const tableProProps = () => Object.assign({}, tableProps(), {
  // 当前页
  pageNum: { type: Number, validator: (value: number) => value > 0, default: 1 },

  // 单页数据行数
  pageSize: { type: Number, default: 10 },

  // 单页数据行数选择器
  pageSizeSelector: { type: Array as PropType<Array<string>>, default: () => ['10', '20', '50', '100'] },

  // 显示单页数据行数选择器
  showPageSizeSelector: { type: Boolean, defualt: true },

  // 显示快速跳转
  showQuickJumper: { type: Boolean, default: true },

  // 显示总数量
  showTotal: { type: Boolean, default: true },

  // 显示分页器
  showPagination: { type: Boolean, default: true },

  // 数据字段名,默认为data
  dataField: { type: String, default: 'data' },

  // 数据获取函数
  data: { type: Function as PropType<() => (Promise<any> | Array<any>)> },

  // 排序字段参数名
  sortField: { type: String, default: 'sort' },

  // 升降序值名 [正序,倒序]
  sortValues: { type: Array as PropType<Array<string>>, default: () => ['asc', 'desc'] },

  // 排序列参数名
  orderField: { type: String, default: 'order' },

  // 顶部样式
  titleStyle: { type: Object as PropType<CSSProperties> },

  // 设置列属性
  customCol: { type: [Array, Boolean] as PropType<{ includeKeys?: Array<string>, excludeKeys?: Array<string> } | boolean> }
})

export type TableProProps = Partial<ExtractPropTypes<ReturnType<typeof tableProProps>>>

export interface ColumnProType<RecordType> extends ColumnType<RecordType> {
  visible: boolean,
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
      size
    } = toRefs(props)

    const _columns = ref<ColumnsProType>(cloneDeep(columns.value) as ColumnsProType)

    const local = reactive<{ dataSource: Array<any>, loading: boolean, pagination?: false | TablePaginationConfig | undefined, size?: 'small' | 'middle' | 'large', columns: ColumnsProType }>({
      dataSource: [],
      loading: false,
      pagination: unref(pagination && Object.assign({}, pagination)),
      size: unref(size),
      columns: _columns.value.filter((item) => item.visible)
    })

    return () => {
      return <div >tablePro</div>
    }
  }
})