import type { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            prefixCls: string;
            onChange: (pagination: import("ant-design-vue/es/table").TablePaginationConfig, filters: Record<string, import("ant-design-vue/es/table/interface").FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void;
            footer: import("ant-design-vue/es/vc-table/interface").PanelRender<any>;
            title: import("ant-design-vue/es/vc-table/interface").PanelRender<any>;
            size: import("ant-design-vue/es/button").ButtonSize;
            rowKey: string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>;
            tableLayout: import("ant-design-vue/es/vc-table/interface").TableLayout;
            rowClassName: string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>;
            id: string;
            showHeader: boolean;
            components: import("ant-design-vue/es/vc-table/interface").TableComponents<any>;
            customRow: import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>;
            customHeaderRow: import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>;
            direction: "ltr" | "rtl";
            expandFixed: boolean | "left" | "right";
            expandColumnWidth: number;
            expandedRowKeys: import("ant-design-vue/es/vc-table/interface").Key[];
            defaultExpandedRowKeys: import("ant-design-vue/es/vc-table/interface").Key[];
            expandedRowRender: import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>;
            expandRowByClick: boolean;
            expandIcon: import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>;
            onExpand: (expanded: boolean, record: any) => void;
            onExpandedRowsChange: (expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void;
            'onUpdate:expandedRowKeys': (expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void;
            defaultExpandAllRows: boolean;
            indentSize: number;
            expandIconColumnIndex: number;
            showExpandColumn: boolean;
            expandedRowClassName: import("ant-design-vue/es/vc-table/interface").RowClassName<any>;
            childrenColumnName: string;
            rowExpandable: (record: any) => boolean;
            sticky: boolean | import("ant-design-vue/es/vc-table/interface").TableSticky;
            dataSource: any[];
            pagination: false | import("ant-design-vue/es/table").TablePaginationConfig;
            loading: false | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                spinning: {
                    type: BooleanConstructor;
                    default: any;
                };
                size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                wrapperClassName: StringConstructor;
                tip: import("vue-types").VueTypeValidableDef<any>;
                delay: NumberConstructor;
                indicator: import("vue-types").VueTypeValidableDef<any>;
            }>>;
            bordered: boolean;
            locale: import("ant-design-vue/es/table/interface").TableLocale;
            onResizeColumn: (w: number, col: import("ant-design-vue/es/table").ColumnType<any>) => void;
            rowSelection: import("ant-design-vue/es/table/interface").TableRowSelection<any>;
            getPopupContainer: import("ant-design-vue/es/table/interface").GetPopupContainer;
            scroll: {
                x?: string | number | true | undefined;
                y?: string | number | undefined;
            } & {
                scrollToFirstRowOnChange?: boolean | undefined;
            };
            sortDirections: import("ant-design-vue/es/table/interface").SortOrder[];
            showSorterTooltip: boolean | Partial<import("vue").ExtractPropTypes<{
                title: import("vue-types").VueTypeValidableDef<any>;
                trigger: import("vue").PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
                visible: {
                    type: BooleanConstructor;
                    default: any;
                };
                defaultVisible: {
                    type: BooleanConstructor;
                    default: any;
                };
                placement: import("vue").PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
                color: StringConstructor;
                transitionName: StringConstructor;
                overlayStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                overlayClassName: StringConstructor;
                openClassName: StringConstructor;
                prefixCls: StringConstructor;
                mouseEnterDelay: NumberConstructor;
                mouseLeaveDelay: NumberConstructor;
                getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                arrowPointAtCenter: {
                    type: BooleanConstructor;
                    default: any;
                };
                autoAdjustOverflow: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                    default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
                };
                destroyTooltipOnHide: {
                    type: BooleanConstructor;
                    default: any;
                };
                align: {
                    type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                    default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
                };
                builtinPlacements: {
                    type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                    default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
                };
                children: ArrayConstructor;
                onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
            }>>;
            pageSize: number;
            pageNum: number;
            pageSizeOptions: string[];
            showSizeChanger: boolean;
            showQuickJumper: boolean;
            showTotal: boolean;
            showPagination: boolean;
            dataField: string;
            sortField: string;
            sortValues: string[];
            orderField: string;
            pageSizeField: string;
            pageNoField: string;
            totalPageField: string;
            showTools: boolean;
            showSearchForm: boolean;
            cardBordered: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<Pick<{
            prefixCls: {
                type: import("vue").PropType<string>;
                default: any;
            };
            columns: {
                type: import("vue").PropType<import("ant-design-vue/es/table").ColumnsType<any>>;
                default: any;
            };
            rowKey: {
                type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
                default: any;
            };
            tableLayout: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableLayout>;
                default: any;
            };
            rowClassName: {
                type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
                default: any;
            };
            title: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
                default: any;
            };
            footer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
                default: any;
            };
            id: {
                type: import("vue").PropType<string>;
                default: any;
            };
            showHeader: {
                type: import("vue").PropType<boolean>;
                default: any;
            };
            components: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableComponents<any>>;
                default: any;
            };
            customRow: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>>;
                default: any;
            };
            customHeaderRow: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>>;
                default: any;
            };
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
                default: any;
            };
            expandFixed: {
                type: import("vue").PropType<boolean | "left" | "right">;
                default: any;
            };
            expandColumnWidth: {
                type: import("vue").PropType<number>;
                default: any;
            };
            expandedRowKeys: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
                default: import("ant-design-vue/es/vc-table/interface").Key[];
            };
            defaultExpandedRowKeys: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
                default: import("ant-design-vue/es/vc-table/interface").Key[];
            };
            expandedRowRender: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>>;
                default: any;
            };
            expandRowByClick: {
                type: import("vue").PropType<boolean>;
                default: any;
            };
            expandIcon: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>>;
                default: any;
            };
            onExpand: {
                type: import("vue").PropType<(expanded: boolean, record: any) => void>;
                default: any;
            };
            onExpandedRowsChange: {
                type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
                default: any;
            };
            'onUpdate:expandedRowKeys': {
                type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
                default: any;
            };
            defaultExpandAllRows: {
                type: import("vue").PropType<boolean>;
                default: any;
            };
            indentSize: {
                type: import("vue").PropType<number>;
                default: any;
            };
            expandIconColumnIndex: {
                type: import("vue").PropType<number>;
                default: any;
            };
            showExpandColumn: {
                type: BooleanConstructor;
                default: any;
            };
            expandedRowClassName: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
                default: any;
            };
            childrenColumnName: {
                type: import("vue").PropType<string>;
                default: any;
            };
            rowExpandable: {
                type: import("vue").PropType<(record: any) => boolean>;
                default: any;
            };
            sticky: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-table/interface").TableSticky>;
                default: any;
            };
            dropdownPrefixCls: StringConstructor;
            dataSource: {
                type: import("vue").PropType<any[]>;
                default: any;
            };
            pagination: {
                type: import("vue").PropType<false | import("ant-design-vue/es/table").TablePaginationConfig>;
                default: any;
            };
            loading: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>>>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
                default: any;
            };
            bordered: BooleanConstructor;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableLocale>;
                default: any;
            };
            onChange: {
                type: import("vue").PropType<(pagination: import("ant-design-vue/es/table").TablePaginationConfig, filters: Record<string, import("ant-design-vue/es/table/interface").FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void>;
                default: any;
            };
            onResizeColumn: {
                type: import("vue").PropType<(w: number, col: import("ant-design-vue/es/table").ColumnType<any>) => void>;
                default: any;
            };
            rowSelection: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableRowSelection<any>>;
                default: any;
            };
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").GetPopupContainer>;
                default: any;
            };
            scroll: {
                type: import("vue").PropType<{
                    x?: string | number | true | undefined;
                    y?: string | number | undefined;
                } & {
                    scrollToFirstRowOnChange?: boolean | undefined;
                }>;
                default: any;
            };
            sortDirections: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").SortOrder[]>;
                default: any;
            };
            showSorterTooltip: {
                type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                    title: import("vue-types").VueTypeValidableDef<any>;
                    trigger: import("vue").PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
                    visible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    defaultVisible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    placement: import("vue").PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
                    color: StringConstructor;
                    transitionName: StringConstructor;
                    overlayStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: import("vue").CSSProperties;
                    };
                    overlayClassName: StringConstructor;
                    openClassName: StringConstructor;
                    prefixCls: StringConstructor;
                    mouseEnterDelay: NumberConstructor;
                    mouseLeaveDelay: NumberConstructor;
                    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                    arrowPointAtCenter: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    autoAdjustOverflow: {
                        type: import("vue").PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                        default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
                    };
                    destroyTooltipOnHide: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    align: {
                        type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                        default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
                    };
                    builtinPlacements: {
                        type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                        default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
                    };
                    children: ArrayConstructor;
                    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
                }>>>;
                default: boolean;
            };
            contextSlots: {
                type: import("vue").PropType<import("ant-design-vue/es/table/context").ContextSlots>;
            };
            transformCellText: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TransformCellText<any>>;
            };
        }, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dropdownPrefixCls" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "contextSlots" | "transformCellText"> & {
            columns: {
                type: import("vue").PropType<import("./tablePro").ColumnsProType<any>>;
            };
            pageNum: {
                type: NumberConstructor;
                validator: (value: number) => boolean;
                default: number;
            };
            pageSize: {
                type: NumberConstructor;
                default: number;
            };
            pageSizeOptions: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
            showSizeChanger: {
                type: BooleanConstructor;
                defualt: boolean;
            };
            showQuickJumper: {
                type: BooleanConstructor;
                default: boolean;
            };
            showTotal: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPagination: {
                type: BooleanConstructor;
                default: boolean;
            };
            dataField: {
                type: StringConstructor;
                default: string;
            };
            data: {
                type: import("vue").PropType<(parameter?: any) => Promise<any>>;
            };
            sortField: {
                type: StringConstructor;
                default: string;
            };
            sortValues: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
            orderField: {
                type: StringConstructor;
                default: string;
            };
            titleStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            pageSizeField: {
                type: StringConstructor;
                default: string;
            };
            pageNoField: {
                type: StringConstructor;
                default: string;
            };
            totalPageField: {
                type: StringConstructor;
                default: string;
            };
            accessColumns: {
                type: import("vue").PropType<string[]>;
            };
            showTools: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSearchForm: {
                type: BooleanConstructor;
                default: boolean;
            };
            cardBordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            cardBodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "pageSize" | "pageNum" | "pageSizeOptions" | "showSizeChanger" | "showQuickJumper" | "showTotal" | "showPagination" | "dataField" | "sortField" | "sortValues" | "orderField" | "pageSizeField" | "pageNoField" | "totalPageField" | "showTools" | "showSearchForm" | "cardBordered">;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<Pick<{
            prefixCls: {
                type: import("vue").PropType<string>;
                default: any;
            };
            columns: {
                type: import("vue").PropType<import("ant-design-vue/es/table").ColumnsType<any>>;
                default: any;
            };
            rowKey: {
                type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
                default: any;
            };
            tableLayout: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableLayout>;
                default: any;
            };
            rowClassName: {
                type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
                default: any;
            };
            title: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
                default: any;
            };
            footer: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
                default: any;
            };
            id: {
                type: import("vue").PropType<string>;
                default: any;
            };
            showHeader: {
                type: import("vue").PropType<boolean>;
                default: any;
            };
            components: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableComponents<any>>;
                default: any;
            };
            customRow: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>>;
                default: any;
            };
            customHeaderRow: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>>;
                default: any;
            };
            direction: {
                type: import("vue").PropType<"ltr" | "rtl">;
                default: any;
            };
            expandFixed: {
                type: import("vue").PropType<boolean | "left" | "right">;
                default: any;
            };
            expandColumnWidth: {
                type: import("vue").PropType<number>;
                default: any;
            };
            expandedRowKeys: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
                default: import("ant-design-vue/es/vc-table/interface").Key[];
            };
            defaultExpandedRowKeys: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
                default: import("ant-design-vue/es/vc-table/interface").Key[];
            };
            expandedRowRender: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>>;
                default: any;
            };
            expandRowByClick: {
                type: import("vue").PropType<boolean>;
                default: any;
            };
            expandIcon: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>>;
                default: any;
            };
            onExpand: {
                type: import("vue").PropType<(expanded: boolean, record: any) => void>;
                default: any;
            };
            onExpandedRowsChange: {
                type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
                default: any;
            };
            'onUpdate:expandedRowKeys': {
                type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
                default: any;
            };
            defaultExpandAllRows: {
                type: import("vue").PropType<boolean>;
                default: any;
            };
            indentSize: {
                type: import("vue").PropType<number>;
                default: any;
            };
            expandIconColumnIndex: {
                type: import("vue").PropType<number>;
                default: any;
            };
            showExpandColumn: {
                type: BooleanConstructor;
                default: any;
            };
            expandedRowClassName: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
                default: any;
            };
            childrenColumnName: {
                type: import("vue").PropType<string>;
                default: any;
            };
            rowExpandable: {
                type: import("vue").PropType<(record: any) => boolean>;
                default: any;
            };
            sticky: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-table/interface").TableSticky>;
                default: any;
            };
            dropdownPrefixCls: StringConstructor;
            dataSource: {
                type: import("vue").PropType<any[]>;
                default: any;
            };
            pagination: {
                type: import("vue").PropType<false | import("ant-design-vue/es/table").TablePaginationConfig>;
                default: any;
            };
            loading: {
                type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    spinning: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                    wrapperClassName: StringConstructor;
                    tip: import("vue-types").VueTypeValidableDef<any>;
                    delay: NumberConstructor;
                    indicator: import("vue-types").VueTypeValidableDef<any>;
                }>>>;
                default: any;
            };
            size: {
                type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
                default: any;
            };
            bordered: BooleanConstructor;
            locale: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableLocale>;
                default: any;
            };
            onChange: {
                type: import("vue").PropType<(pagination: import("ant-design-vue/es/table").TablePaginationConfig, filters: Record<string, import("ant-design-vue/es/table/interface").FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void>;
                default: any;
            };
            onResizeColumn: {
                type: import("vue").PropType<(w: number, col: import("ant-design-vue/es/table").ColumnType<any>) => void>;
                default: any;
            };
            rowSelection: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableRowSelection<any>>;
                default: any;
            };
            getPopupContainer: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").GetPopupContainer>;
                default: any;
            };
            scroll: {
                type: import("vue").PropType<{
                    x?: string | number | true | undefined;
                    y?: string | number | undefined;
                } & {
                    scrollToFirstRowOnChange?: boolean | undefined;
                }>;
                default: any;
            };
            sortDirections: {
                type: import("vue").PropType<import("ant-design-vue/es/table/interface").SortOrder[]>;
                default: any;
            };
            showSorterTooltip: {
                type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                    title: import("vue-types").VueTypeValidableDef<any>;
                    trigger: import("vue").PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
                    visible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    defaultVisible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    placement: import("vue").PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
                    color: StringConstructor;
                    transitionName: StringConstructor;
                    overlayStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: import("vue").CSSProperties;
                    };
                    overlayClassName: StringConstructor;
                    openClassName: StringConstructor;
                    prefixCls: StringConstructor;
                    mouseEnterDelay: NumberConstructor;
                    mouseLeaveDelay: NumberConstructor;
                    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                    arrowPointAtCenter: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    autoAdjustOverflow: {
                        type: import("vue").PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                        default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
                    };
                    destroyTooltipOnHide: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    align: {
                        type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                        default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
                    };
                    builtinPlacements: {
                        type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                        default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
                    };
                    children: ArrayConstructor;
                    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
                }>>>;
                default: boolean;
            };
            contextSlots: {
                type: import("vue").PropType<import("ant-design-vue/es/table/context").ContextSlots>;
            };
            transformCellText: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TransformCellText<any>>;
            };
        }, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dropdownPrefixCls" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "contextSlots" | "transformCellText"> & {
            columns: {
                type: import("vue").PropType<import("./tablePro").ColumnsProType<any>>;
            };
            pageNum: {
                type: NumberConstructor;
                validator: (value: number) => boolean;
                default: number;
            };
            pageSize: {
                type: NumberConstructor;
                default: number;
            };
            pageSizeOptions: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
            showSizeChanger: {
                type: BooleanConstructor;
                defualt: boolean;
            };
            showQuickJumper: {
                type: BooleanConstructor;
                default: boolean;
            };
            showTotal: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPagination: {
                type: BooleanConstructor;
                default: boolean;
            };
            dataField: {
                type: StringConstructor;
                default: string;
            };
            data: {
                type: import("vue").PropType<(parameter?: any) => Promise<any>>;
            };
            sortField: {
                type: StringConstructor;
                default: string;
            };
            sortValues: {
                type: import("vue").PropType<string[]>;
                default: () => string[];
            };
            orderField: {
                type: StringConstructor;
                default: string;
            };
            titleStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            pageSizeField: {
                type: StringConstructor;
                default: string;
            };
            pageNoField: {
                type: StringConstructor;
                default: string;
            };
            totalPageField: {
                type: StringConstructor;
                default: string;
            };
            accessColumns: {
                type: import("vue").PropType<string[]>;
            };
            showTools: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSearchForm: {
                type: BooleanConstructor;
                default: boolean;
            };
            cardBordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            cardBodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            prefixCls: string;
            onChange: (pagination: import("ant-design-vue/es/table").TablePaginationConfig, filters: Record<string, import("ant-design-vue/es/table/interface").FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void;
            footer: import("ant-design-vue/es/vc-table/interface").PanelRender<any>;
            title: import("ant-design-vue/es/vc-table/interface").PanelRender<any>;
            size: import("ant-design-vue/es/button").ButtonSize;
            rowKey: string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>;
            tableLayout: import("ant-design-vue/es/vc-table/interface").TableLayout;
            rowClassName: string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>;
            id: string;
            showHeader: boolean;
            components: import("ant-design-vue/es/vc-table/interface").TableComponents<any>;
            customRow: import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>;
            customHeaderRow: import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>;
            direction: "ltr" | "rtl";
            expandFixed: boolean | "left" | "right";
            expandColumnWidth: number;
            expandedRowKeys: import("ant-design-vue/es/vc-table/interface").Key[];
            defaultExpandedRowKeys: import("ant-design-vue/es/vc-table/interface").Key[];
            expandedRowRender: import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>;
            expandRowByClick: boolean;
            expandIcon: import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>;
            onExpand: (expanded: boolean, record: any) => void;
            onExpandedRowsChange: (expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void;
            'onUpdate:expandedRowKeys': (expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void;
            defaultExpandAllRows: boolean;
            indentSize: number;
            expandIconColumnIndex: number;
            showExpandColumn: boolean;
            expandedRowClassName: import("ant-design-vue/es/vc-table/interface").RowClassName<any>;
            childrenColumnName: string;
            rowExpandable: (record: any) => boolean;
            sticky: boolean | import("ant-design-vue/es/vc-table/interface").TableSticky;
            dataSource: any[];
            pagination: false | import("ant-design-vue/es/table").TablePaginationConfig;
            loading: false | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                spinning: {
                    type: BooleanConstructor;
                    default: any;
                };
                size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                wrapperClassName: StringConstructor;
                tip: import("vue-types").VueTypeValidableDef<any>;
                delay: NumberConstructor;
                indicator: import("vue-types").VueTypeValidableDef<any>;
            }>>;
            bordered: boolean;
            locale: import("ant-design-vue/es/table/interface").TableLocale;
            onResizeColumn: (w: number, col: import("ant-design-vue/es/table").ColumnType<any>) => void;
            rowSelection: import("ant-design-vue/es/table/interface").TableRowSelection<any>;
            getPopupContainer: import("ant-design-vue/es/table/interface").GetPopupContainer;
            scroll: {
                x?: string | number | true | undefined;
                y?: string | number | undefined;
            } & {
                scrollToFirstRowOnChange?: boolean | undefined;
            };
            sortDirections: import("ant-design-vue/es/table/interface").SortOrder[];
            showSorterTooltip: boolean | Partial<import("vue").ExtractPropTypes<{
                title: import("vue-types").VueTypeValidableDef<any>;
                trigger: import("vue").PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
                visible: {
                    type: BooleanConstructor;
                    default: any;
                };
                defaultVisible: {
                    type: BooleanConstructor;
                    default: any;
                };
                placement: import("vue").PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
                color: StringConstructor;
                transitionName: StringConstructor;
                overlayStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                overlayClassName: StringConstructor;
                openClassName: StringConstructor;
                prefixCls: StringConstructor;
                mouseEnterDelay: NumberConstructor;
                mouseLeaveDelay: NumberConstructor;
                getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                arrowPointAtCenter: {
                    type: BooleanConstructor;
                    default: any;
                };
                autoAdjustOverflow: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                    default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
                };
                destroyTooltipOnHide: {
                    type: BooleanConstructor;
                    default: any;
                };
                align: {
                    type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                    default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
                };
                builtinPlacements: {
                    type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                    default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
                };
                children: ArrayConstructor;
                onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
            }>>;
            pageSize: number;
            pageNum: number;
            pageSizeOptions: string[];
            showSizeChanger: boolean;
            showQuickJumper: boolean;
            showTotal: boolean;
            showPagination: boolean;
            dataField: string;
            sortField: string;
            sortValues: string[];
            orderField: string;
            pageSizeField: string;
            pageNoField: string;
            totalPageField: string;
            showTools: boolean;
            showSearchForm: boolean;
            cardBordered: boolean;
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
    } & Readonly<import("vue").ExtractPropTypes<Pick<{
        prefixCls: {
            type: import("vue").PropType<string>;
            default: any;
        };
        columns: {
            type: import("vue").PropType<import("ant-design-vue/es/table").ColumnsType<any>>;
            default: any;
        };
        rowKey: {
            type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
            default: any;
        };
        tableLayout: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableLayout>;
            default: any;
        };
        rowClassName: {
            type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
            default: any;
        };
        title: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
            default: any;
        };
        footer: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
            default: any;
        };
        id: {
            type: import("vue").PropType<string>;
            default: any;
        };
        showHeader: {
            type: import("vue").PropType<boolean>;
            default: any;
        };
        components: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableComponents<any>>;
            default: any;
        };
        customRow: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>>;
            default: any;
        };
        customHeaderRow: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>>;
            default: any;
        };
        direction: {
            type: import("vue").PropType<"ltr" | "rtl">;
            default: any;
        };
        expandFixed: {
            type: import("vue").PropType<boolean | "left" | "right">;
            default: any;
        };
        expandColumnWidth: {
            type: import("vue").PropType<number>;
            default: any;
        };
        expandedRowKeys: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
            default: import("ant-design-vue/es/vc-table/interface").Key[];
        };
        defaultExpandedRowKeys: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
            default: import("ant-design-vue/es/vc-table/interface").Key[];
        };
        expandedRowRender: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>>;
            default: any;
        };
        expandRowByClick: {
            type: import("vue").PropType<boolean>;
            default: any;
        };
        expandIcon: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>>;
            default: any;
        };
        onExpand: {
            type: import("vue").PropType<(expanded: boolean, record: any) => void>;
            default: any;
        };
        onExpandedRowsChange: {
            type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
            default: any;
        };
        'onUpdate:expandedRowKeys': {
            type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
            default: any;
        };
        defaultExpandAllRows: {
            type: import("vue").PropType<boolean>;
            default: any;
        };
        indentSize: {
            type: import("vue").PropType<number>;
            default: any;
        };
        expandIconColumnIndex: {
            type: import("vue").PropType<number>;
            default: any;
        };
        showExpandColumn: {
            type: BooleanConstructor;
            default: any;
        };
        expandedRowClassName: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
            default: any;
        };
        childrenColumnName: {
            type: import("vue").PropType<string>;
            default: any;
        };
        rowExpandable: {
            type: import("vue").PropType<(record: any) => boolean>;
            default: any;
        };
        sticky: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-table/interface").TableSticky>;
            default: any;
        };
        dropdownPrefixCls: StringConstructor;
        dataSource: {
            type: import("vue").PropType<any[]>;
            default: any;
        };
        pagination: {
            type: import("vue").PropType<false | import("ant-design-vue/es/table").TablePaginationConfig>;
            default: any;
        };
        loading: {
            type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                spinning: {
                    type: BooleanConstructor;
                    default: any;
                };
                size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
                wrapperClassName: StringConstructor;
                tip: import("vue-types").VueTypeValidableDef<any>;
                delay: NumberConstructor;
                indicator: import("vue-types").VueTypeValidableDef<any>;
            }>>>;
            default: any;
        };
        size: {
            type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
            default: any;
        };
        bordered: BooleanConstructor;
        locale: {
            type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableLocale>;
            default: any;
        };
        onChange: {
            type: import("vue").PropType<(pagination: import("ant-design-vue/es/table").TablePaginationConfig, filters: Record<string, import("ant-design-vue/es/table/interface").FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void>;
            default: any;
        };
        onResizeColumn: {
            type: import("vue").PropType<(w: number, col: import("ant-design-vue/es/table").ColumnType<any>) => void>;
            default: any;
        };
        rowSelection: {
            type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableRowSelection<any>>;
            default: any;
        };
        getPopupContainer: {
            type: import("vue").PropType<import("ant-design-vue/es/table/interface").GetPopupContainer>;
            default: any;
        };
        scroll: {
            type: import("vue").PropType<{
                x?: string | number | true | undefined;
                y?: string | number | undefined;
            } & {
                scrollToFirstRowOnChange?: boolean | undefined;
            }>;
            default: any;
        };
        sortDirections: {
            type: import("vue").PropType<import("ant-design-vue/es/table/interface").SortOrder[]>;
            default: any;
        };
        showSorterTooltip: {
            type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
                title: import("vue-types").VueTypeValidableDef<any>;
                trigger: import("vue").PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
                visible: {
                    type: BooleanConstructor;
                    default: any;
                };
                defaultVisible: {
                    type: BooleanConstructor;
                    default: any;
                };
                placement: import("vue").PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
                color: StringConstructor;
                transitionName: StringConstructor;
                overlayStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                overlayClassName: StringConstructor;
                openClassName: StringConstructor;
                prefixCls: StringConstructor;
                mouseEnterDelay: NumberConstructor;
                mouseLeaveDelay: NumberConstructor;
                getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                arrowPointAtCenter: {
                    type: BooleanConstructor;
                    default: any;
                };
                autoAdjustOverflow: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                    default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
                };
                destroyTooltipOnHide: {
                    type: BooleanConstructor;
                    default: any;
                };
                align: {
                    type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                    default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
                };
                builtinPlacements: {
                    type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                    default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
                };
                children: ArrayConstructor;
                onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
            }>>>;
            default: boolean;
        };
        contextSlots: {
            type: import("vue").PropType<import("ant-design-vue/es/table/context").ContextSlots>;
        };
        transformCellText: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TransformCellText<any>>;
        };
    }, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dropdownPrefixCls" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "contextSlots" | "transformCellText"> & {
        columns: {
            type: import("vue").PropType<import("./tablePro").ColumnsProType<any>>;
        };
        pageNum: {
            type: NumberConstructor;
            validator: (value: number) => boolean;
            default: number;
        };
        pageSize: {
            type: NumberConstructor;
            default: number;
        };
        pageSizeOptions: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
        showSizeChanger: {
            type: BooleanConstructor;
            defualt: boolean;
        };
        showQuickJumper: {
            type: BooleanConstructor;
            default: boolean;
        };
        showTotal: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        dataField: {
            type: StringConstructor;
            default: string;
        };
        data: {
            type: import("vue").PropType<(parameter?: any) => Promise<any>>;
        };
        sortField: {
            type: StringConstructor;
            default: string;
        };
        sortValues: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
        orderField: {
            type: StringConstructor;
            default: string;
        };
        titleStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        pageSizeField: {
            type: StringConstructor;
            default: string;
        };
        pageNoField: {
            type: StringConstructor;
            default: string;
        };
        totalPageField: {
            type: StringConstructor;
            default: string;
        };
        accessColumns: {
            type: import("vue").PropType<string[]>;
        };
        showTools: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSearchForm: {
            type: BooleanConstructor;
            default: boolean;
        };
        cardBordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        cardBodyStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<Pick<{
    prefixCls: {
        type: import("vue").PropType<string>;
        default: any;
    };
    columns: {
        type: import("vue").PropType<import("ant-design-vue/es/table").ColumnsType<any>>;
        default: any;
    };
    rowKey: {
        type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
        default: any;
    };
    tableLayout: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableLayout>;
        default: any;
    };
    rowClassName: {
        type: import("vue").PropType<string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    title: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
        default: any;
    };
    footer: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").PanelRender<any>>;
        default: any;
    };
    id: {
        type: import("vue").PropType<string>;
        default: any;
    };
    showHeader: {
        type: import("vue").PropType<boolean>;
        default: any;
    };
    components: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TableComponents<any>>;
        default: any;
    };
    customRow: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>>;
        default: any;
    };
    customHeaderRow: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>>;
        default: any;
    };
    direction: {
        type: import("vue").PropType<"ltr" | "rtl">;
        default: any;
    };
    expandFixed: {
        type: import("vue").PropType<boolean | "left" | "right">;
        default: any;
    };
    expandColumnWidth: {
        type: import("vue").PropType<number>;
        default: any;
    };
    expandedRowKeys: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    defaultExpandedRowKeys: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    expandedRowRender: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>>;
        default: any;
    };
    expandRowByClick: {
        type: import("vue").PropType<boolean>;
        default: any;
    };
    expandIcon: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>>;
        default: any;
    };
    onExpand: {
        type: import("vue").PropType<(expanded: boolean, record: any) => void>;
        default: any;
    };
    onExpandedRowsChange: {
        type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    'onUpdate:expandedRowKeys': {
        type: import("vue").PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    defaultExpandAllRows: {
        type: import("vue").PropType<boolean>;
        default: any;
    };
    indentSize: {
        type: import("vue").PropType<number>;
        default: any;
    };
    expandIconColumnIndex: {
        type: import("vue").PropType<number>;
        default: any;
    };
    showExpandColumn: {
        type: BooleanConstructor;
        default: any;
    };
    expandedRowClassName: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    childrenColumnName: {
        type: import("vue").PropType<string>;
        default: any;
    };
    rowExpandable: {
        type: import("vue").PropType<(record: any) => boolean>;
        default: any;
    };
    sticky: {
        type: import("vue").PropType<boolean | import("ant-design-vue/es/vc-table/interface").TableSticky>;
        default: any;
    };
    dropdownPrefixCls: StringConstructor;
    dataSource: {
        type: import("vue").PropType<any[]>;
        default: any;
    };
    pagination: {
        type: import("vue").PropType<false | import("ant-design-vue/es/table").TablePaginationConfig>;
        default: any;
    };
    loading: {
        type: import("vue").PropType<false | Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            spinning: {
                type: BooleanConstructor;
                default: any;
            };
            size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
            wrapperClassName: StringConstructor;
            tip: import("vue-types").VueTypeValidableDef<any>;
            delay: NumberConstructor;
            indicator: import("vue-types").VueTypeValidableDef<any>;
        }>>>;
        default: any;
    };
    size: {
        type: import("vue").PropType<import("ant-design-vue/es/button").ButtonSize>;
        default: any;
    };
    bordered: BooleanConstructor;
    locale: {
        type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableLocale>;
        default: any;
    };
    onChange: {
        type: import("vue").PropType<(pagination: import("ant-design-vue/es/table").TablePaginationConfig, filters: Record<string, import("ant-design-vue/es/table/interface").FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void>;
        default: any;
    };
    onResizeColumn: {
        type: import("vue").PropType<(w: number, col: import("ant-design-vue/es/table").ColumnType<any>) => void>;
        default: any;
    };
    rowSelection: {
        type: import("vue").PropType<import("ant-design-vue/es/table/interface").TableRowSelection<any>>;
        default: any;
    };
    getPopupContainer: {
        type: import("vue").PropType<import("ant-design-vue/es/table/interface").GetPopupContainer>;
        default: any;
    };
    scroll: {
        type: import("vue").PropType<{
            x?: string | number | true | undefined;
            y?: string | number | undefined;
        } & {
            scrollToFirstRowOnChange?: boolean | undefined;
        }>;
        default: any;
    };
    sortDirections: {
        type: import("vue").PropType<import("ant-design-vue/es/table/interface").SortOrder[]>;
        default: any;
    };
    showSorterTooltip: {
        type: import("vue").PropType<boolean | Partial<import("vue").ExtractPropTypes<{
            title: import("vue-types").VueTypeValidableDef<any>;
            trigger: import("vue").PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: import("vue").PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: import("vue").PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
            'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
        }>>>;
        default: boolean;
    };
    contextSlots: {
        type: import("vue").PropType<import("ant-design-vue/es/table/context").ContextSlots>;
    };
    transformCellText: {
        type: import("vue").PropType<import("ant-design-vue/es/vc-table/interface").TransformCellText<any>>;
    };
}, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dropdownPrefixCls" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "contextSlots" | "transformCellText"> & {
    columns: {
        type: import("vue").PropType<import("./tablePro").ColumnsProType<any>>;
    };
    pageNum: {
        type: NumberConstructor;
        validator: (value: number) => boolean;
        default: number;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    pageSizeOptions: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    showSizeChanger: {
        type: BooleanConstructor;
        defualt: boolean;
    };
    showQuickJumper: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTotal: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataField: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: import("vue").PropType<(parameter?: any) => Promise<any>>;
    };
    sortField: {
        type: StringConstructor;
        default: string;
    };
    sortValues: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    orderField: {
        type: StringConstructor;
        default: string;
    };
    titleStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    pageSizeField: {
        type: StringConstructor;
        default: string;
    };
    pageNoField: {
        type: StringConstructor;
        default: string;
    };
    totalPageField: {
        type: StringConstructor;
        default: string;
    };
    accessColumns: {
        type: import("vue").PropType<string[]>;
    };
    showTools: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSearchForm: {
        type: BooleanConstructor;
        default: boolean;
    };
    cardBordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    cardBodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prefixCls: string;
    onChange: (pagination: import("ant-design-vue/es/table").TablePaginationConfig, filters: Record<string, import("ant-design-vue/es/table/interface").FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void;
    footer: import("ant-design-vue/es/vc-table/interface").PanelRender<any>;
    title: import("ant-design-vue/es/vc-table/interface").PanelRender<any>;
    size: import("ant-design-vue/es/button").ButtonSize;
    rowKey: string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>;
    tableLayout: import("ant-design-vue/es/vc-table/interface").TableLayout;
    rowClassName: string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>;
    id: string;
    showHeader: boolean;
    components: import("ant-design-vue/es/vc-table/interface").TableComponents<any>;
    customRow: import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>;
    customHeaderRow: import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>;
    direction: "ltr" | "rtl";
    expandFixed: boolean | "left" | "right";
    expandColumnWidth: number;
    expandedRowKeys: import("ant-design-vue/es/vc-table/interface").Key[];
    defaultExpandedRowKeys: import("ant-design-vue/es/vc-table/interface").Key[];
    expandedRowRender: import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>;
    expandRowByClick: boolean;
    expandIcon: import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>;
    onExpand: (expanded: boolean, record: any) => void;
    onExpandedRowsChange: (expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void;
    'onUpdate:expandedRowKeys': (expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void;
    defaultExpandAllRows: boolean;
    indentSize: number;
    expandIconColumnIndex: number;
    showExpandColumn: boolean;
    expandedRowClassName: import("ant-design-vue/es/vc-table/interface").RowClassName<any>;
    childrenColumnName: string;
    rowExpandable: (record: any) => boolean;
    sticky: boolean | import("ant-design-vue/es/vc-table/interface").TableSticky;
    dataSource: any[];
    pagination: false | import("ant-design-vue/es/table").TablePaginationConfig;
    loading: false | Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        spinning: {
            type: BooleanConstructor;
            default: any;
        };
        size: import("vue").PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
        wrapperClassName: StringConstructor;
        tip: import("vue-types").VueTypeValidableDef<any>;
        delay: NumberConstructor;
        indicator: import("vue-types").VueTypeValidableDef<any>;
    }>>;
    bordered: boolean;
    locale: import("ant-design-vue/es/table/interface").TableLocale;
    onResizeColumn: (w: number, col: import("ant-design-vue/es/table").ColumnType<any>) => void;
    rowSelection: import("ant-design-vue/es/table/interface").TableRowSelection<any>;
    getPopupContainer: import("ant-design-vue/es/table/interface").GetPopupContainer;
    scroll: {
        x?: string | number | true | undefined;
        y?: string | number | undefined;
    } & {
        scrollToFirstRowOnChange?: boolean | undefined;
    };
    sortDirections: import("ant-design-vue/es/table/interface").SortOrder[];
    showSorterTooltip: boolean | Partial<import("vue").ExtractPropTypes<{
        title: import("vue-types").VueTypeValidableDef<any>;
        trigger: import("vue").PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        defaultVisible: {
            type: BooleanConstructor;
            default: any;
        };
        placement: import("vue").PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
        color: StringConstructor;
        transitionName: StringConstructor;
        overlayStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        overlayClassName: StringConstructor;
        openClassName: StringConstructor;
        prefixCls: StringConstructor;
        mouseEnterDelay: NumberConstructor;
        mouseLeaveDelay: NumberConstructor;
        getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
        arrowPointAtCenter: {
            type: BooleanConstructor;
            default: any;
        };
        autoAdjustOverflow: {
            type: import("vue").PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
            default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
        };
        destroyTooltipOnHide: {
            type: BooleanConstructor;
            default: any;
        };
        align: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
            default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
        };
        builtinPlacements: {
            type: import("vue").PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
            default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
        };
        children: ArrayConstructor;
        onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
        'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
    }>>;
    pageSize: number;
    pageNum: number;
    pageSizeOptions: string[];
    showSizeChanger: boolean;
    showQuickJumper: boolean;
    showTotal: boolean;
    showPagination: boolean;
    dataField: string;
    sortField: string;
    sortValues: string[];
    orderField: string;
    pageSizeField: string;
    pageNoField: string;
    totalPageField: string;
    showTools: boolean;
    showSearchForm: boolean;
    cardBordered: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
