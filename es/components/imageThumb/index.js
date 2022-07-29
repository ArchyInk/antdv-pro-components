import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";

/*
 * @author: Archy
 * @Date: 2022-07-15 15:39:43
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-15 15:47:05
 * @FilePath: \ant-design-vue-pro\components\imageThumb\index.tsx
 * @description: 
 */
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ImageThumb',
  setup: function setup() {
    return function () {
      return _createVNode("div", null, [_createTextVNode("imageThumb")]);
    };
  }
});