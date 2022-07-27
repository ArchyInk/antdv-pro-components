/*
 * @author: Archy
 * @Date: 2022-07-27 15:34:03
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 17:01:05
 * @FilePath: \ant-design-vue-pro\components\formPro\formPro.tsx
 * @description: 
 */
import { defineComponent, onBeforeMount, onBeforeUnmount, PropType, ref, toRefs, VNode } from 'vue';

import { Form, Row, Col } from 'ant-design-vue';

import { formProps } from 'ant-design-vue/es/form/Form';
import ResponsiveObserve, { responsiveArray, ScreenMap } from 'ant-design-vue/es/_util/responsiveObserve';
import { Breakpoint } from 'ant-design-vue/lib/_util/responsiveObserve';
import { DEFAULT_COLUMN_MAP } from '../shared/constant';


const fromProProps = () => Object.assign({}, formProps(), {
  mode: { type: String as PropType<'edit' | 'view'>, default: 'edit' },
  column: { type: [Number, Object], default: 3 }
})

export default defineComponent({
  name: 'FormPro',
  props: fromProProps(),
  setup(props, { slots }) {
    let token: number;
    const screens = ref<ScreenMap>({})
    onBeforeMount(() => {
      token = ResponsiveObserve.subscribe((screen) => {
        if (typeof column !== 'object') {
          return;
        }
        screens.value = screen;
      })
    })

    onBeforeUnmount(() => {
      ResponsiveObserve.unsubscribe(token);
    });


    const { column } = toRefs(props)
    const getColumn = () => {
      if (typeof column.value === 'number') {
        return column.value
      }
      if (typeof column.value === 'object') {
        for (let bp of responsiveArray) {
          if (screens.value[bp] && column.value[bp] !== undefined) {
            return column.value[bp] || DEFAULT_COLUMN_MAP[bp];
          }
        }
      }
      return 3
    }

    const renderGrid = () => {
      const column = getColumn()
      const childrenNode: VNode[] | undefined = slots.default?.()
      if (!childrenNode) {
        return
      }

      const returnJSX: Array<JSX.Element> = []
      let rowArray: Array<JSX.Element> = []
      childrenNode.forEach((node, index) => {
        if (index !== 0 && (index % column === 0)) {
          returnJSX.push(<Col>{[...rowArray]}</Col>)
          console.log(rowArray);
          console.log(returnJSX);
          rowArray = []
        }
        rowArray.push(node)
      })



      if (rowArray.length > 0) {
        returnJSX.push(<Col>{[...rowArray]}</Col>)
      }
      return returnJSX
    }

    return () => {
      return <div>{renderGrid()}</div>
    }
  }
})