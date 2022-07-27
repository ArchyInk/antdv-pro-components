<!--
 * @Author: Archy
 * @Date: 2022-07-27 20:40:17
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 20:47:34
 * @FilePath: \ant-design-vue-pro\preview\com\test-row.vue
 * @description: 
-->
<template>
  <a-form :style="{width:'calc(100vw - 24px)'}">
    <a-row :gutter="24">
      <a-col :span="12">
        <a-form-item label="选择框">
          <a-select></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="选择框">
          <a-select></a-select>
        </a-form-item>
      </a-col>
      <!-- <a-col :span="8">
        <a-form-item label="选择框">
          <a-select></a-select>
        </a-form-item>
      </a-col> -->
    </a-row>
    <a-row>
    <a-col :span="8">
      <a-form-item label="选择框">
        <a-select></a-select>
      </a-form-item>
    </a-col>
    <a-col :span="8">
      <a-form-item label="选择框">
        <a-select></a-select>
      </a-form-item>
    </a-col>
    <a-col :span="8">
      <a-form-item label="选择框">
        <a-select></a-select>
      </a-form-item>
    </a-col>
    </a-row>
  </a-form>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'testRow',
  setup() {
    return {
    }
  }
})
</script>
<style lang='less' scoped>
</style>