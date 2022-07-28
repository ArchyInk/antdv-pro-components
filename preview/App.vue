<!--
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-28 23:46:57
 * @FilePath: \ant-design-vue-pro\preview\App.vue
 * @description: 
-->
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import tablePro, { ColumnsProType } from '../components/tablePro/tablePro';
import FormPro, { FormProInstance } from '../components/formPro/formPro'
import FormProItem from '../components/formPro/formProItem'
import { ConfigProvider } from 'ant-design-vue';
import { reactive, ref, toRaw } from 'vue'
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
const disabled = ref(false)
const flex = ref('100px')
const label = ref('选择')
const model = reactive({
  one: '一',
  two: '二',
  three: '三',
  true: true
})

const rules = reactive({
  one: [{ required: true, message: 'Please input one', }]
})
const fromPro = ref<FormProInstance>()
const mode = ref('edit')
const from = ref()
const input = ref()
const onClick = () => {
  disabled.value = !disabled.value
  mode.value = mode.value === 'view' ? 'edit' : 'view'
  // input.value.props.disabled = true
  // fromPro.value!.validate().then(() => {
  //   console.log(toRaw(model));
  // }).catch(err => {
  //   console.log(err);
  // })
}
</script>

<template>
  <ConfigProvider :locale="zhCN">
    <a-button @click="onClick">test</a-button>
    <!-- <tablePro :data="getData" :columns="columns"></tablePro>  -->
    <FormPro :model="model" :rules="rules" ref="fromPro" :mode="mode" :disabled="disabled">
      <FormProItem label="输入框" name="one">
        <a-input v-model:value="model.one" ref="input"></a-input>
      </FormProItem>
      <FormProItem label="选择框" name="two">
        <a-select v-model:value="model.two"></a-select>
      </FormProItem>
      <FormProItem label="单选框" name="true">
        <a-radio v-model:checked="model.true"></a-radio>
      </FormProItem>
      <FormProItem :label="label" name="true">
        <a-select></a-select>
      </FormProItem>
      <FormProItem label="多选框">
        <a-select :style="{ width: '100%' }"></a-select>
      </FormProItem>
    </FormPro>
  </ConfigProvider>
</template>

<style scoped>
</style>
