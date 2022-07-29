import type { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
            labelCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (NumberConstructor | StringConstructor)[];
                    order: (NumberConstructor | StringConstructor)[];
                    offset: (NumberConstructor | StringConstructor)[];
                    push: (NumberConstructor | StringConstructor)[];
                    pull: (NumberConstructor | StringConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (NumberConstructor | StringConstructor)[];
                }>> & import("vue").HTMLAttributes>;
            };
            wrapperCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (NumberConstructor | StringConstructor)[];
                    order: (NumberConstructor | StringConstructor)[];
                    offset: (NumberConstructor | StringConstructor)[];
                    push: (NumberConstructor | StringConstructor)[];
                    pull: (NumberConstructor | StringConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
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
                type: import("vue").PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
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
                type: import("vue").PropType<{
                    [k: string]: import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[];
                }>;
            };
            validateMessages: {
                type: import("vue").PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
                default: import("ant-design-vue/es/form/interface").ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: any;
            };
            scrollToFirstError: {
                type: import("vue").PropType<any>;
            };
            onSubmit: import("vue").PropType<(e: Event) => void>;
            name: StringConstructor;
            validateTrigger: {
                type: import("vue").PropType<string | string[]>;
            };
            size: {
                type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
            };
            onValuesChange: {
                type: import("vue").PropType<(changedValues: any, values: any) => void>;
            };
            onFieldsChange: {
                type: import("vue").PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
            };
            onFinish: {
                type: import("vue").PropType<(values: any) => void>;
            };
            onFinishFailed: {
                type: import("vue").PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
            };
            onValidate: {
                type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            };
        } & {
            align: import("vue").PropType<"middle" | "stretch" | "bottom" | "top">;
            justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
            prefixCls: StringConstructor;
            gutter: {
                type: import("vue").PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
                default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
            };
            wrap: {
                type: BooleanConstructor;
                default: any;
            };
        } & {
            mode: {
                type: import("vue").PropType<"view" | "edit">;
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
            debounce: import("vue").PropType<import("./formPro").DebounceSettings>;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "colon" | "disabled" | "mode" | "labelWrap" | "requiredMark" | "hideRequiredMark" | "model" | "validateMessages" | "validateOnRuleChange" | "gutter" | "wrap" | "immediate" | "deep">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
            labelCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (NumberConstructor | StringConstructor)[];
                    order: (NumberConstructor | StringConstructor)[];
                    offset: (NumberConstructor | StringConstructor)[];
                    push: (NumberConstructor | StringConstructor)[];
                    pull: (NumberConstructor | StringConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (NumberConstructor | StringConstructor)[];
                }>> & import("vue").HTMLAttributes>;
            };
            wrapperCol: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    span: (NumberConstructor | StringConstructor)[];
                    order: (NumberConstructor | StringConstructor)[];
                    offset: (NumberConstructor | StringConstructor)[];
                    push: (NumberConstructor | StringConstructor)[];
                    pull: (NumberConstructor | StringConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                        default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                    };
                    xxxl: {
                        type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
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
                type: import("vue").PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
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
                type: import("vue").PropType<{
                    [k: string]: import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[];
                }>;
            };
            validateMessages: {
                type: import("vue").PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
                default: import("ant-design-vue/es/form/interface").ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: any;
            };
            scrollToFirstError: {
                type: import("vue").PropType<any>;
            };
            onSubmit: import("vue").PropType<(e: Event) => void>;
            name: StringConstructor;
            validateTrigger: {
                type: import("vue").PropType<string | string[]>;
            };
            size: {
                type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
            };
            onValuesChange: {
                type: import("vue").PropType<(changedValues: any, values: any) => void>;
            };
            onFieldsChange: {
                type: import("vue").PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
            };
            onFinish: {
                type: import("vue").PropType<(values: any) => void>;
            };
            onFinishFailed: {
                type: import("vue").PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
            };
            onValidate: {
                type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            };
        } & {
            align: import("vue").PropType<"middle" | "stretch" | "bottom" | "top">;
            justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
            prefixCls: StringConstructor;
            gutter: {
                type: import("vue").PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
                default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
            };
            wrap: {
                type: BooleanConstructor;
                default: any;
            };
        } & {
            mode: {
                type: import("vue").PropType<"view" | "edit">;
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
            debounce: import("vue").PropType<import("./formPro").DebounceSettings>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
        labelCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (NumberConstructor | StringConstructor)[];
                order: (NumberConstructor | StringConstructor)[];
                offset: (NumberConstructor | StringConstructor)[];
                push: (NumberConstructor | StringConstructor)[];
                pull: (NumberConstructor | StringConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (NumberConstructor | StringConstructor)[];
            }>> & import("vue").HTMLAttributes>;
        };
        wrapperCol: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                span: (NumberConstructor | StringConstructor)[];
                order: (NumberConstructor | StringConstructor)[];
                offset: (NumberConstructor | StringConstructor)[];
                push: (NumberConstructor | StringConstructor)[];
                pull: (NumberConstructor | StringConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                    default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
                };
                xxxl: {
                    type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
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
            type: import("vue").PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
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
            type: import("vue").PropType<{
                [k: string]: import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[];
            }>;
        };
        validateMessages: {
            type: import("vue").PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
            default: import("ant-design-vue/es/form/interface").ValidateMessages;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: any;
        };
        scrollToFirstError: {
            type: import("vue").PropType<any>;
        };
        onSubmit: import("vue").PropType<(e: Event) => void>;
        name: StringConstructor;
        validateTrigger: {
            type: import("vue").PropType<string | string[]>;
        };
        size: {
            type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        };
        onValuesChange: {
            type: import("vue").PropType<(changedValues: any, values: any) => void>;
        };
        onFieldsChange: {
            type: import("vue").PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
        };
        onFinish: {
            type: import("vue").PropType<(values: any) => void>;
        };
        onFinishFailed: {
            type: import("vue").PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
        };
        onValidate: {
            type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
        };
    } & {
        align: import("vue").PropType<"middle" | "stretch" | "bottom" | "top">;
        justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
        prefixCls: StringConstructor;
        gutter: {
            type: import("vue").PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
            default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
        };
        wrap: {
            type: BooleanConstructor;
            default: any;
        };
    } & {
        mode: {
            type: import("vue").PropType<"view" | "edit">;
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
        debounce: import("vue").PropType<import("./formPro").DebounceSettings>;
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    layout: import("vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
    labelCol: {
        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (NumberConstructor | StringConstructor)[];
        }>> & import("vue").HTMLAttributes>;
    };
    wrapperCol: {
        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            span: (NumberConstructor | StringConstructor)[];
            order: (NumberConstructor | StringConstructor)[];
            offset: (NumberConstructor | StringConstructor)[];
            push: (NumberConstructor | StringConstructor)[];
            pull: (NumberConstructor | StringConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
                default: string | number | import("ant-design-vue/es/grid/Col").ColSize;
            };
            xxxl: {
                type: import("vue").PropType<string | number | import("ant-design-vue/es/grid/Col").ColSize>;
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
        type: import("vue").PropType<"" | import("ant-design-vue/es/form/Form").RequiredMark>;
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
        type: import("vue").PropType<{
            [k: string]: import("ant-design-vue/es/form/interface").RuleObject | import("ant-design-vue/es/form/interface").RuleObject[];
        }>;
    };
    validateMessages: {
        type: import("vue").PropType<import("ant-design-vue/es/form/interface").ValidateMessages>;
        default: import("ant-design-vue/es/form/interface").ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: any;
    };
    scrollToFirstError: {
        type: import("vue").PropType<any>;
    };
    onSubmit: import("vue").PropType<(e: Event) => void>;
    name: StringConstructor;
    validateTrigger: {
        type: import("vue").PropType<string | string[]>;
    };
    size: {
        type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
    };
    onValuesChange: {
        type: import("vue").PropType<(changedValues: any, values: any) => void>;
    };
    onFieldsChange: {
        type: import("vue").PropType<(changedFields: import("ant-design-vue/es/form/interface").FieldData[], allFields: import("ant-design-vue/es/form/interface").FieldData[]) => void>;
    };
    onFinish: {
        type: import("vue").PropType<(values: any) => void>;
    };
    onFinishFailed: {
        type: import("vue").PropType<(errorInfo: import("ant-design-vue/es/form/interface").ValidateErrorEntity<any>) => void>;
    };
    onValidate: {
        type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
    };
} & {
    align: import("vue").PropType<"middle" | "stretch" | "bottom" | "top">;
    justify: import("vue").PropType<"space-around" | "space-between" | "center" | "end" | "start">;
    prefixCls: StringConstructor;
    gutter: {
        type: import("vue").PropType<import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter]>;
        default: import("ant-design-vue/lib/grid/Row").Gutter | [import("ant-design-vue/lib/grid/Row").Gutter, import("ant-design-vue/lib/grid/Row").Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
} & {
    mode: {
        type: import("vue").PropType<"view" | "edit">;
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
    debounce: import("vue").PropType<import("./formPro").DebounceSettings>;
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
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
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
