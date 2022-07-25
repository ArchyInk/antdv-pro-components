<!--
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-25 16:18:57
 * @FilePath: \ant-design-vue-pro\preview\App.vue
 * @description: 
-->
<script setup lang="ts">
import TablePro from '../components/tablePro/tablePro'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ConfigProvider } from 'ant-design-vue';
import { ref } from 'vue'
const columns = ref([
  { title: '姓名', dataIndex: 'name' },
  { title: '姓名', dataIndex: 'name' },
  { title: '姓名', dataIndex: 'name' },
  { title: '姓名', dataIndex: 'name' },
  { title: '姓名', dataIndex: 'name' },
  { title: '姓名', dataIndex: 'name' },
  { title: '姓名', dataIndex: 'name' },
  { title: '姓名', dataIndex: 'name' },
  {
    title: '年龄', key: 'age', children: [
      { title: '姓名', dataIndex: 'name' },
      { title: '姓名', dataIndex: 'name' },
    ],
  },
  { title: '操作', sorter: true, key: 'actions', dataIndex: 'testActions' }
])
const getData = (p: any) => {
  console.log(p);
  return fetch(`http://rap2api.taobao.org/app/mock/294153/getTableData?pageSize=${p.pageSize}&pageNo=${p.pageNo}`).then(async res => {
    const ress = await res.json()
    return ress.obj
  })
}
</script>

<template>
  <ConfigProvider :locale="zhCN">
    <TablePro :data="getData" :columns="columns"></TablePro>
  </ConfigProvider>
</template>

<style scoped>
</style>
