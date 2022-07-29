import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";

/*
 * @author: Archy
 * @Date: 2022-07-15 15:40:29
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-15 15:40:33
 * @FilePath: \ant-design-vue-pro\components\search\index.tsx
 * @description: 
 */
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Search',
  setup: function setup() {
    return function () {
      return _createVNode("div", null, [_createTextVNode("search")]);
    };
  }
});