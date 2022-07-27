/*
 * @author: Archy
 * @Date: 2022-07-27 15:34:03
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 22:31:19
 * @FilePath: \ant-design-vue-pro\components\formPro\formPro.tsx
 * @description:
 */
import {
  computed,
  defineComponent,
  ExtractPropTypes,
  onBeforeMount,
  onBeforeUnmount,
  PropType,
  reactive,
  ref,
  toRefs,
  VNode,
  Component,
  RendererNode,
  RendererElement,
} from 'vue'

import { Form, Row, Col, Space, FormItemProps } from 'ant-design-vue'

import { formProps } from 'ant-design-vue/es/form/Form'
import ResponsiveObserve, {
  responsiveArray,
  ScreenMap,
} from 'ant-design-vue/es/_util/responsiveObserve'
import { DEFAULT_COLUMN_MAP } from '../shared/constant'
import { chunk } from 'lodash'

import './style/index.less'
import { RenderNode } from 'ant-design-vue/lib/vc-select/BaseSelect'

const formProProps = () =>
  Object.assign({}, formProps(), {
    mode: { type: String as PropType<'edit' | 'view'>, default: 'edit' },
    column: { type: [Number, Object] },
    space: {
      type: [String, Number] as PropType<'small' | 'middle' | 'large' | number>,
      default: 'small',
    },
  })

export type FormProProps = Partial<
  ExtractPropTypes<ReturnType<typeof formProProps>>
>

export interface FormItemProProps extends FormItemProps {
  span?: number
  offset?: number
  flex?: number
}

export default defineComponent({
  name: 'FormPro',
  props: formProProps(),
  setup(props, { slots }) {
    let token: number
    const { column, space } = toRefs(props)
    const screens = ref<ScreenMap>({})

    // 间隔转换
    const gutter = computed<number>(() => {
      switch (space.value) {
        case 'small':
          return 16
        case 'middle':
          return 24
        case 'large':
          return 32
      }
      return space.value
    })

    // 数据
    const local = reactive({
      column: 3,
    })

    onBeforeMount(() => {
      token = ResponsiveObserve.subscribe((screen) => {
        if (typeof column !== 'object') {
          return
        }
        screens.value = screen
        local.column = getColumn()
      })
    })

    onBeforeUnmount(() => {
      ResponsiveObserve.unsubscribe(token)
    })

    // 获取列数
    const getColumn = () => {
      if (column.value === 0) {
        return 3
      }
      if (typeof column.value === 'number') {
        return column.value
      }
      if (typeof column.value === 'object') {
        for (let bp of responsiveArray) {
          if (screens.value[bp] && column.value[bp] !== undefined) {
            return column.value[bp] || DEFAULT_COLUMN_MAP[bp]
          }
        }
      }

      for (let bp of responsiveArray) {
        if (screens.value[bp]) {
          return DEFAULT_COLUMN_MAP[bp]
        }
      }
    }

    const renderGrid = () => {
      const childrenNode:
        | VNode<RendererNode, RendererElement, FormItemProProps>[]
        | undefined = slots.default?.()
      if (!childrenNode) {
        return
      }
      return chunk(childrenNode, local.column).map((rowArray) => {
        return (
          <Row align={'middle'} gutter={gutter.value}>
            {rowArray.map((item) => {
              return (
                <Col
                  offset={item.props?.offset}
                  span={item.props?.span ??  24 / local.column}
                  flex={item.props?.flex}>
                  {item}
                </Col>
              )
            })}
          </Row>
        )
      })
    }

    return () => {
      return <Form>{renderGrid()}</Form>
    }
  },
})
