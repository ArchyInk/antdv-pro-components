import { ExtractPropTypes, PropType, ComponentPublicInstance } from 'vue';
import './style/index.less';
import { Props, ValidateInfo, validateOptions } from 'ant-design-vue/es/form/useForm';
declare const formProProps: () => {
    layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
    labelCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (NumberConstructor | StringConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    wrapperCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (NumberConstructor | StringConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    labelWrap: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
        default: any;
    };
    hideRequiredMark: {
        type: BooleanConstructor;
        default: any;
    };
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: PropType<{
            [k: string]: import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[];
        }>;
    };
    validateMessages: {
        type: PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
        default: import("ant-design-vue/es/form/interface").ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: any;
    };
    scrollToFirstError: {
        type: PropType<any>;
    };
    onSubmit: PropType<(e: Event) => void>;
    name: StringConstructor;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    size: {
        type: PropType<import("ant-design-vue/es/button").ButtonSize>;
    };
    onValuesChange: {
        type: PropType<(changedValues: any, values: any) => void>;
    };
    onFieldsChange: {
        type: PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
    };
    onFinish: {
        type: PropType<(values: any) => void>;
    };
    onFinishFailed: {
        type: PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
    };
    onValidate: {
        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
    };
} & {
    align: PropType<"middle" | "stretch" | "bottom" | "top">;
    justify: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
        default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
} & {
    mode: {
        type: PropType<"view" | "edit">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    immediate: BooleanConstructor;
    deep: BooleanConstructor;
    validateOnRuleChange: BooleanConstructor;
    debounce: PropType<DebounceSettings>;
};
export declare type FormProProps = Partial<ExtractPropTypes<ReturnType<typeof formProProps>>>;
declare type namesType = string | string[];
export interface FormProExpose {
    clearValidate: (names?: namesType) => void;
    resetFields: (newValues?: Props) => void;
    mergeValidateInfo: (items: ValidateInfo | ValidateInfo[]) => ValidateInfo;
    validate: <T = any>(names?: namesType, option?: validateOptions) => Promise<T>;
}
export declare type FormProInstance = ComponentPublicInstance<FormProProps, FormProExpose>;
export interface DebounceSettings {
    leading?: boolean;
    wait?: number;
    trailing?: boolean;
}
declare const _default: import("vue").DefineComponent<{
    layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
    labelCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (NumberConstructor | StringConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    wrapperCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (NumberConstructor | StringConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    labelWrap: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
        default: any;
    };
    hideRequiredMark: {
        type: BooleanConstructor;
        default: any;
    };
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: PropType<{
            [k: string]: import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[];
        }>;
    };
    validateMessages: {
        type: PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
        default: import("ant-design-vue/es/form/interface").ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: any;
    };
    scrollToFirstError: {
        type: PropType<any>;
    };
    onSubmit: PropType<(e: Event) => void>;
    name: StringConstructor;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    size: {
        type: PropType<import("ant-design-vue/es/button").ButtonSize>;
    };
    onValuesChange: {
        type: PropType<(changedValues: any, values: any) => void>;
    };
    onFieldsChange: {
        type: PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
    };
    onFinish: {
        type: PropType<(values: any) => void>;
    };
    onFinishFailed: {
        type: PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
    };
    onValidate: {
        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
    };
} & {
    align: PropType<"middle" | "stretch" | "bottom" | "top">;
    justify: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
        default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
} & {
    mode: {
        type: PropType<"view" | "edit">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    immediate: BooleanConstructor;
    deep: BooleanConstructor;
    validateOnRuleChange: BooleanConstructor;
    debounce: PropType<DebounceSettings>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
    labelCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (NumberConstructor | StringConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    wrapperCol: {
        type: PropType<Partial<ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (NumberConstructor | StringConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    labelWrap: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
        default: any;
    };
    hideRequiredMark: {
        type: BooleanConstructor;
        default: any;
    };
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: PropType<{
            [k: string]: import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[];
        }>;
    };
    validateMessages: {
        type: PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
        default: import("ant-design-vue/es/form/interface").ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: any;
    };
    scrollToFirstError: {
        type: PropType<any>;
    };
    onSubmit: PropType<(e: Event) => void>;
    name: StringConstructor;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    size: {
        type: PropType<import("ant-design-vue/es/button").ButtonSize>;
    };
    onValuesChange: {
        type: PropType<(changedValues: any, values: any) => void>;
    };
    onFieldsChange: {
        type: PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
    };
    onFinish: {
        type: PropType<(values: any) => void>;
    };
    onFinishFailed: {
        type: PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
    };
    onValidate: {
        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
    };
} & {
    align: PropType<"middle" | "stretch" | "bottom" | "top">;
    justify: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
        default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
} & {
    mode: {
        type: PropType<"view" | "edit">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: (ObjectConstructor | NumberConstructor)[];
    };
    immediate: BooleanConstructor;
    deep: BooleanConstructor;
    validateOnRuleChange: BooleanConstructor;
    debounce: PropType<DebounceSettings>;
}>>, {
    colon: boolean;
    disabled: boolean;
    mode: "view" | "edit";
    labelWrap: boolean;
    requiredMark: "" | import("ant-design-vue/es/form/Form").RequiredMark;
    hideRequiredMark: boolean;
    model: {
        [key: string]: any;
    };
    validateMessages: import("ant-design-vue/es/form/interface").ValidateMessages;
    validateOnRuleChange: boolean;
    gutter: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
    wrap: boolean;
    immediate: boolean;
    deep: boolean;
}>;
export default _default;
