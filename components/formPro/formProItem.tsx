/*
 * @author: Archy
 * @Date: 2022-07-28 09:58:15
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-29 10:37:24
 * @FilePath: \ant-design-vue-pro\components\formPro\formProItem.tsx
 * @description:
 */
import {
  defineComponent,
  ExtractPropTypes,
  inject,
  Ref,
  ref,
  computed,
  watch,
  PropType,
} from 'vue'
import { Col, FormItem } from 'ant-design-vue'
import { colProps } from 'ant-design-vue/es/grid/Col'
import { formItemProps } from 'ant-design-vue/es/form/FormItem'
import { omit, pick } from 'lodash'
import { validateInfos } from 'ant-design-vue/es/form/useForm'

export const formProItemProps = () =>
  Object.assign({}, omit(colProps(), 'span'), formItemProps(), {
    span: { type: [Number, String] as PropType<number | 'auto'> },
  })

export type FormProItemProps = Partial<
  ExtractPropTypes<ReturnType<typeof formProItemProps>>
>

export default defineComponent({
  name: 'FormProItem',
  props: formProItemProps(),
  setup(props, { slots }) {
    const disabled = inject<Ref<boolean>>('disabled')
    const column = inject<Ref<number>>('column')
    const mode = inject<Ref<string>>('mode')
    const validateInfos = inject<validateInfos>('validateInfos')

    const _colProps = computed(() => pick(props, Object.keys(colProps())))
    const _formItemProps = computed(() =>
      pick(props, Object.keys(formItemProps()))
    )

    const renderItem = () =>
      slots.default?.().map((item) => {
        return mode?.value === 'view' ? (
          <div>
            {item.props?.checked === undefined
              ? item.props?.value
              : item.props.checked
                ? '是'
                : '否'}
          </div>
        ) : (
          <item {...item.props} disabled={disabled?.value}></item>
        )
      })

    const span = computed<number | undefined>(() => {
      if (!props.span) {
        return 24 / (column?.value ?? 3)
      }

      if (props.span === 'auto') {
        return
      }

      return props.span
    })

    return () => {
      return (
        <Col
          {..._colProps.value}
          span={span.value}
        >
          <FormItem
            {..._formItemProps.value}
            {...validateInfos?.[props.name as string]}>
            {renderItem()}
          </FormItem>
        </Col>
      )
    }
  },
})
