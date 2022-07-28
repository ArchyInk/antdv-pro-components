/*
 * @author: Archy
 * @Date: 2022-07-28 09:58:15
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-28 15:58:06
 * @FilePath: \ant-design-vue-pro\components\formPro\formProItem.tsx
 * @description: 
 */
import { defineComponent, ExtractPropTypes, inject, Ref, unref, reactive, watch, computed } from 'vue';
import { Col, FormItem } from 'ant-design-vue';
import { colProps } from 'ant-design-vue/es/grid/Col';
import { formItemProps } from 'ant-design-vue/es/form/FormItem';
import { isEmpty, pick } from 'lodash';

export const formProItemProps = () => Object.assign({}, colProps(), formItemProps(), {

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
    const _colProps = computed(() => pick(props, Object.keys(colProps())))
    const _formItemProps = computed(() => pick(props, Object.keys(formItemProps())))
    const renderItem = () => {
      const items = slots.default?.() as any
      if (isEmpty(items)) return
      if (mode?.value === 'view') {
        items.forEach((child: any) => {
          console.log(child);
        })
      }
      if (disabled?.value) {
        items.forEach((child: any) => {
          if (!child.props) {
            child.props = {}
          }
          child.props['disabled'] = true
        })
      }

      return items
    }

    return () => {
      return <Col
        {..._colProps.value}
        span={_colProps?.value.span ?? (24 / (column?.value ?? 3))}
      >
        <FormItem {..._formItemProps.value} >
          {renderItem()}
        </FormItem>
      </Col>
    }
  }
})