<!--
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 22:27:52
 * @FilePath: \ant-design-vue-pro\preview\App.vue
 * @description: 
-->
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import tablePro, { ColumnsProType } from '../components/tablePro/tablePro';
import formPro from '../components/formPro/formPro'
import { ConfigProvider } from 'ant-design-vue';
import testRow from './com/test-form-row.vue'
import { ref } from 'vue'
const columns = ref<ColumnsProType>([
  { title: '姓名1', key: '1', dataIndex: 'name' },
  { title: '姓名2', key: '2', dataIndex: 'name' },
  { title: '姓名3', key: '3', dataIndex: 'name' },
  { title: '姓名4', key: '4', dataIndex: 'name' },
  { title: '姓名5', key: '5', dataIndex: 'name' },
  { title: '姓名6', key: '6', dataIndex: 'name' },
  { title: '姓名7', key: '7', dataIndex: 'name' },
  { title: '姓名8', key: '8', dataIndex: 'name' },
  {
    title: '年龄', key: 'age', children: [
      { title: '姓名9', dataIndex: 'name', },
      { title: '姓名10', dataIndex: 'name' },
    ],
  },
  { title: '操作', fixed: 'right', key: 'actions', dataIndex: 'testActions' }
])
const getData = (p: any) => {
  return fetch(`http://rap2api.taobao.org/app/mock/294153/getTableData?pageSize=${p.pageSize}&pageNo=${p.pageNo}`).then(async res => {
    const ress = await res.json()
    return ress.obj
  })
}
</script>

<template>
  <ConfigProvider :locale="zhCN">
    <!-- <tablePro :data="getData" :columns="columns"></tablePro>  -->
    <formPro>
      <a-form-item label="输入框">
        <a-input></a-input>
      </a-form-item>
      <a-form-item label="选择框">
        <a-select></a-select>
      </a-form-item>
      <a-form-item label="单选框">
        <a-radio></a-radio>
      </a-form-item>
      <a-form-item :flex="'100px'" label="多选框">
        <a-select></a-select>
      </a-form-item>
      <a-form-item :flex="'auto'" label="多选框">
        <a-select></a-select>
      </a-form-item>
    </formPro>
  </ConfigProvider>
</template>

<style scoped>
</style>
