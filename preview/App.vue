<!--
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 16:16:08
 * @FilePath: \ant-design-vue-pro\preview\App.vue
 * @description: 
-->
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import tablePro, { ColumnsProType } from '../components/tablePro/tablePro';
import { columns } from './column'
import FormPro, { FormProInstance } from '../components/formPro/formPro'
import FormProItem from '../components/formPro/formProItem'
import { ConfigProvider } from 'ant-design-vue';
import { reactive, ref, toRaw } from 'vue'

const getData = (p: any) => {
  console.log(p);
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
const formPro = ref<FormProInstance>()
const mode = ref<'edit' | 'view'>('edit')
const from = ref()
const input = ref()
const onClick = () => {
  // disabled.value = !disabled.value
  // mode.value = mode.value === 'view' ? 'edit' : 'view'
  // input.value.props.disabled = true
  formPro.value!.resetFields()
  formPro.value!.validate().then(() => {
    console.log(toRaw(model));
  }).catch(err => {
    console.log(err);
  })
}
</script>

<template>
  <ConfigProvider :locale="zhCN">
    <!-- <a-button @click="onClick">test</a-button> -->
    <tablePro :data="getData" :columns="columns" :cardBordered="false" :show-search-form="true">
      <template #formItem="{ column, model }">
        <template v-if="column.dataIndex === 'endTime'">
          <a-input v-model:value="model.endTime">123</a-input>
        </template>
      </template>
    </tablePro>
    <!-- <FormPro :model="model" :rules="rules" ref="formPro" :mode="mode" :disabled="disabled" :align="'middle'">
      <FormProItem label="输入框" name="one">
        <a-input v-model:value="model.one"></a-input>
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
      <FormProItem label="多选框" span="auto" flex="auto">
        <a-select :style="{ width: '100%' }"></a-select>
      </FormProItem>
      <FormProItem>
        <div>
          <a-button @click="onClick">确定</a-button>
          <a-button>取消</a-button>
        </div>
      </FormProItem>
    </FormPro> -->
  </ConfigProvider>
</template>

<style scoped>
</style>
