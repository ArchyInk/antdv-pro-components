/*
 * @author: Archy
 * @Date: 2022-07-15 15:48:42
 * @LastEditors: Archy
 * @LastEditTime: 2022-07-27 16:07:27
 * @FilePath: \ant-design-vue-pro\components\shared\constant.ts
 * @description: 
 */
import { Breakpoint } from "ant-design-vue/es/_util/responsiveObserve";

export const PREFIX = 'a'

export const DEFAULT_COLUMN_MAP: Partial<Record<Breakpoint, number>> = {
  xxxl: 3,
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1,
};
