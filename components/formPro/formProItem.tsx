/*
 * @author: Archy
 * @Date: 2022-07-28 09:58:15
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-28 23:54:52
 * @FilePath: \ant-design-vue-pro\components\formPro\formProItem.tsx
 * @description:
 */
import {
  defineComponent,
  ExtractPropTypes,
  inject,
  Ref,
  computed,
  PropType,
  nextTick,
} from 'vue'
import { Col, FormItem } from 'ant-design-vue'
import { colProps } from 'ant-design-vue/es/grid/Col'
import { formItemProps } from 'ant-design-vue/es/form/FormItem'
import { isEmpty, omit, pick } from 'lodash'
import { ValidateInfo, validateInfos } from 'ant-design-vue/es/form/useForm'

export const formProItemProps = () =>
  Object.assign({}, colProps(), formItemProps(), {})

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

    return () => {
      return (
        <Col
          {..._colProps.value}
          span={_colProps?.value.span ?? 24 / (column?.value ?? 3)}>
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
