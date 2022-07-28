/*
 * @author: Archy
 * @Date: 2022-07-27 15:34:03
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-28 22:47:03
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
  ComponentPublicInstance,
  ref,
  toRefs,
  VNode,
  RendererNode,
  RendererElement,
  provide,
} from 'vue'

import { Form, Row } from 'ant-design-vue'
import FormProItem, { FormProItemProps } from './formProItem'

import { formProps } from 'ant-design-vue/es/form/Form'
import ResponsiveObserve, {
  responsiveArray,
  ScreenMap,
} from 'ant-design-vue/es/_util/responsiveObserve'
import { DEFAULT_COLUMN_MAP } from '../shared/constant'
import { chunk } from 'lodash'

import './style/index.less'
import {
  Props,
  ValidateInfo,
  validateOptions,
} from 'ant-design-vue/es/form/useForm'

const formProProps = () =>
  Object.assign({}, formProps(), {
    mode: { type: String as PropType<'edit' | 'view'>, default: 'edit' },
    disabled: { type: Boolean, default: false },
    column: { type: [Number, Object] },
    space: {
      type: [String, Number] as PropType<'small' | 'middle' | 'large' | number>,
      default: 'small',
    },
    immediate: Boolean,
    deep: Boolean,
    validateOnRuleChange: Boolean,
    debounce: Object as PropType<DebounceSettings>,
  })

export type FormProProps = Partial<
  ExtractPropTypes<ReturnType<typeof formProProps>>
>

declare type namesType = string | string[]

export interface FormProExpose {
  clearValidate: (names?: namesType) => void
  resetFields: (newValues?: Props) => void
  mergeValidateInfo: (items: ValidateInfo | ValidateInfo[]) => ValidateInfo
  validate: <T = any>(names?: namesType, option?: validateOptions) => Promise<T>
}

export type FormProInstance = ComponentPublicInstance<
  FormProProps,
  FormProExpose
>

export interface DebounceSettings {
  leading?: boolean
  wait?: number
  trailing?: boolean
}

export default defineComponent({
  name: 'FormPro',
  props: formProProps(),
  setup(props, { slots, expose }) {
    let token: number
    const {
      column,
      space,
      mode,
      disabled,
      model,
      rules,
      immediate,
      deep,
      debounce,
      validateOnRuleChange,
    } = toRefs(props)
    const screens = ref<ScreenMap>({})
    const currentColumn = ref<number>(3)
    const {
      clearValidate,
      resetFields,
      validateInfos,
      mergeValidateInfo,
      validateField,
      validate,
    } = Form.useForm(model.value, rules.value, {
      immediate: immediate.value,
      deep: deep.value,
      debounce: debounce.value,
      validateOnRuleChange: validateOnRuleChange.value,
    })

    provide('disabled', disabled)
    provide('column', currentColumn)
    provide('mode', mode)
    provide('validateInfos', validateInfos)

    expose({
      clearValidate,
      resetFields,
      mergeValidateInfo,
      validate,
    })

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

    onBeforeMount(() => {
      token = ResponsiveObserve.subscribe((screen) => {
        if (typeof column !== 'object') {
          return
        }
        screens.value = screen
        currentColumn.value = getColumn()
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

      return 3
    }

    const renderGrid = () => {
      const childrenNode:
        | VNode<RendererNode, RendererElement, FormProItemProps>[]
        | undefined = slots.default?.()
      if (!childrenNode) {
        return
      }
      return chunk(childrenNode, currentColumn.value).map((rowArray) => {
        return (
          <Row align={'middle'} gutter={gutter.value}>
            {rowArray}
          </Row>
        )
      })
    }

    return () => {
      return <Form {...props}>{renderGrid()}</Form>
    }
  },
})
