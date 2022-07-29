import { ExtractPropTypes, PropType } from 'vue';
import './style/index.less';
export declare const formProItemProps: () => Pick<{
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
}, "order" | "offset" | "push" | "pull" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "prefixCls" | "flex"> & {
    htmlFor: StringConstructor;
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    help: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
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
    hasFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | (string | number)[]>;
    };
    name: {
        type: PropType<string | number | (string | number)[]>;
    };
    rules: PropType<import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[]>;
    autoLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: any;
    };
    validateFirst: {
        type: BooleanConstructor;
        default: any;
    };
    validateStatus: import("vue-types").VueTypeDef<"" | "error" | "validating" | "success" | "warning">;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
    };
    hidden: BooleanConstructor;
    noStyle: BooleanConstructor;
} & {
    span: {
        type: PropType<number | "auto">;
    };
};
export declare type FormProItemProps = Partial<ExtractPropTypes<ReturnType<typeof formProItemProps>>>;
declare const _default: import("vue").DefineComponent<Pick<{
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
}, "order" | "offset" | "push" | "pull" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "prefixCls" | "flex"> & {
    htmlFor: StringConstructor;
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    help: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
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
    hasFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | (string | number)[]>;
    };
    name: {
        type: PropType<string | number | (string | number)[]>;
    };
    rules: PropType<import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[]>;
    autoLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: any;
    };
    validateFirst: {
        type: BooleanConstructor;
        default: any;
    };
    validateStatus: import("vue-types").VueTypeDef<"" | "error" | "validating" | "success" | "warning">;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
    };
    hidden: BooleanConstructor;
    noStyle: BooleanConstructor;
} & {
    span: {
        type: PropType<number | "auto">;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<Pick<{
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
}, "order" | "offset" | "push" | "pull" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "prefixCls" | "flex"> & {
    htmlFor: StringConstructor;
    prefixCls: StringConstructor;
    label: import("vue-types").VueTypeValidableDef<any>;
    help: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
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
    hasFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    colon: {
        type: BooleanConstructor;
        default: any;
    };
    labelAlign: import("vue-types").VueTypeDef<"left" | "right">;
    prop: {
        type: PropType<string | number | (string | number)[]>;
    };
    name: {
        type: PropType<string | number | (string | number)[]>;
    };
    rules: PropType<import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[]>;
    autoLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: BooleanConstructor;
        default: any;
    };
    validateFirst: {
        type: BooleanConstructor;
        default: any;
    };
    validateStatus: import("vue-types").VueTypeDef<"" | "error" | "validating" | "success" | "warning">;
    validateTrigger: {
        type: PropType<string | string[]>;
    };
    messageVariables: {
        type: PropType<Record<string, string>>;
    };
    hidden: BooleanConstructor;
    noStyle: BooleanConstructor;
} & {
    span: {
        type: PropType<number | "auto">;
    };
}>>, {
    xs: string | number | import("ant-design-vue/es/grid/Col").ColSize;
    sm: string | number | import("ant-design-vue/es/grid/Col").ColSize;
    md: string | number | import("ant-design-vue/es/grid/Col").ColSize;
    lg: string | number | import("ant-design-vue/es/grid/Col").ColSize;
    xl: string | number | import("ant-design-vue/es/grid/Col").ColSize;
    xxl: string | number | import("ant-design-vue/es/grid/Col").ColSize;
    xxxl: string | number | import("ant-design-vue/es/grid/Col").ColSize;
    required: boolean;
    hasFeedback: boolean;
    colon: boolean;
    autoLink: boolean;
    validateFirst: boolean;
    hidden: boolean;
    noStyle: boolean;
}>;
export default _default;
