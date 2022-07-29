/*
 * @author: Archy
 * @Date: 2022-07-29 15:34:40
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 20:18:27
 * @FilePath: \ant-design-vue-pro\preview\column.tsx
 * @description:
 */
import { Input } from 'ant-design-vue'
import { ref } from 'vue'
import { ColumnsProType } from '../components/tablePro/tablePro'

export const columns = ref<ColumnsProType>([
  { title: '姓名1', key: '1', dataIndex: 'name' },
  { title: '姓名2', key: '2', dataIndex: 'name' },
  { title: '姓名3', key: '3', dataIndex: 'name' },
  { title: '姓名4', key: '4', dataIndex: 'name' },
  {
    title: '姓名5',
    key: '5',
    showInForm: true,
    formItemLabel: '时间段',
    dataIndex: 'beginTime',
    customRenderFormItem: (model) => {
      return <Input v-model:value={model.beginTime}></Input>
    },
  },
  {
    title: '姓名6',
    key: '6',
    showInForm: true,
    dataIndex: 'endTime',
  },
  {
    title: '姓名7',
    key: '7',
    showInForm: true,
    formItemType: 'timePicker',
    dataIndex: 'name',
  },
  {
    title: '姓名8',
    key: '8',
    showInForm: true,
    formItemType: 'select',
    dataIndex: 'name',
    selectOptions: [{ value: 'archy', label: 'name1' }],
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    formItemType: 'input',
  },
  { title: '操作', fixed: 'right', key: 'actions', dataIndex: 'testActions' },
])
