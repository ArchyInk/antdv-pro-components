/*
 * @Author: Archy
 * @Date: 2022-07-29 21:07:11
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-30 11:18:51
 * @FilePath: \ant-design-vue-pro\components\modelPro\modelPro.tsx
 * @description:
 */
import { Modal } from 'ant-design-vue'
import { computed, defineComponent, toRefs, unref } from 'vue'
import { modalProps } from 'ant-design-vue/es/modal/Modal'
import './style/index.less'
import { omit } from 'lodash'

export const modalProProps = () =>
  Object.assign({}, modalProps(), {
    moveable: { type: Boolean, default: false },
  })
export default defineComponent({
  name: 'ModelPro',
  props: modalProProps(),
  setup(props) {
    const _modalProps = computed(() => omit(props, 'moveable'))

    return () => {
      return <Modal {..._modalProps.value}>
      </Modal>
    }
  },
})
