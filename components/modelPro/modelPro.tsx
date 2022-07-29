/*
 * @Author: Archy
 * @Date: 2022-07-29 21:07:11
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 22:57:37
 * @FilePath: \ant-design-vue-pro\components\modelPro\modelPro.tsx
 * @description:
 */
import { Modal } from 'ant-design-vue'
import { defineComponent, toRefs, unref } from 'vue'
import { modalProps } from 'ant-design-vue/es/modal/Modal'
import './style/index.less'
import { omit } from 'lodash'

export const modelProProps = () =>
  Object.assign({}, modalProps(), {
    moveable: { type: Boolean, default: false },
  })
export default defineComponent({
  name: 'ModelPro',
  props: modelProProps(),
  setup(props) {
    // const { moveable, ...modalProps } = props
    const modalProps = omit(props, 'moveable')
    return () => {
      return <Modal {...modalProps}></Modal>
    }
  },
})
