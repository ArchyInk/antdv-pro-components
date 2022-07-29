<!--
 * @author: Archy
 * @Date: 2022-07-15 15:02:07
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 20:35:34
 * @FilePath: \ant-design-vue-pro\preview\App.vue
 * @description: 
-->
<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { columns } from './column'
import { ConfigProvider, Input, Select, Button, Radio, Card } from 'ant-design-vue';
import 'ant-design-vue/es/input/style/index.css'
import 'ant-design-vue/es/select/style/index.css'
import 'ant-design-vue/es/button/style/index.css'
import 'ant-design-vue/es/card/style/index.css'
import { reactive, ref, toRaw } from 'vue'
import { FormProInstance } from 'components/formPro/formPro';

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
  disabled.value = !disabled.value
  // mode.value = mode.value === 'view' ? 'edit' : 'view'
}
const onSubmit = () => {
  formPro.value!.validate().then(() => {
    console.log(toRaw(model));
    console.log('success');
  }).catch(err => {
    console.log(err);
  })
}
</script>

<template>
  <ConfigProvider :locale="zhCN">
    <Button @click="onClick">test</Button>
    <!-- <a-table-pro :data="getData" :columns="columns" :cardBordered="false" :show-search-form="true">
      <template #formItem="{ column, model }">
        <template v-if="column.dataIndex === 'endTime'">
          <TimePicker v-model:value="model.endTime" :style="{width:'100%'}"></TimePicker>
        </template>
      </template>
    </a-table-pro> -->
    <Card>
      <a-form-pro :model="model" :rules="rules" ref="formPro" :mode="mode" :disabled="disabled" :align="'middle'">
        <a-form-pro-item label="输入框" name="one">
          <Input v-model:value="model.one"></Input>
        </a-form-pro-item>
        <a-form-pro-item label="选择框" name="two">
          <Select v-model:value="model.two"></Select>
        </a-form-pro-item>
        <a-form-pro-item label="单选框" name="true">
          <Radio v-model:checked="model.true"></Radio>
        </a-form-pro-item>
        <a-form-pro-item :label="label" name="true">
          <Input v-model:value="model.one"></Input>
        </a-form-pro-item>
        <a-form-pro-item label="多选框" span="auto" flex="auto">
          <Input v-model:value="model.one"></Input>

        </a-form-pro-item>
        <a-form-pro-item>
          <div>
            <Button @click="onSubmit">确定</Button>
            <Button @click="() => { formPro?.resetFields() }">取消</Button>
          </div>
        </a-form-pro-item>
      </a-form-pro>
    </Card>
  </ConfigProvider>
</template>

<style scoped>
</style>
