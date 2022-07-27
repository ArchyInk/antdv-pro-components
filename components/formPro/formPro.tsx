/*
 * @author: Archy
 * @Date: 2022-07-27 15:34:03
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 15:44:06
 * @FilePath: \ant-design-vue-pro\components\formPro\formPro.ts
 * @description: 
 */
import { defineComponent, PropType, toRefs } from 'vue';

import { Form } from 'ant-design-vue';

import { formProps } from 'ant-design-vue/es/form/Form';


const fromProProps = () => Object.assign({}, formProps(), {
  mode: { type: String as PropType<'edit' | 'view'>, default: 'edit' },
  column: { type: [Number, Object], default: 3 }
})

export default defineComponent({
  name: 'FormPro',
  props: fromProProps(),
  setup(props, { slots }) {
    // const {
    //   column
    // } = toRefs(props)
    console.log(slots);

    return () => {
      return <Form>

      </Form>
    }
  }
})