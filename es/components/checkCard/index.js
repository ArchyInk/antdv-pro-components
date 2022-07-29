import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";

/*
 * @author: Archy
 * @Date: 2022-07-15 15:36:57
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-15 15:46:58
 * @FilePath: \ant-design-vue-pro\components\checkCard\index.tsx
 * @description: 
 */
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CheckCard',
  setup: function setup() {
    return function () {
      return _createVNode("div", null, [_createTextVNode("checkCard")]);
    };
  }
});