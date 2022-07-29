import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ColumnType, TablePaginationConfig } from 'ant-design-vue/es/table';
import { PanelRender } from 'ant-design-vue/es/vc-table/interface';
import { DefaultOptionType } from 'ant-design-vue/lib/select';
import { FilterValue } from 'ant-design-vue/es/table/interface';
import './style/index.less';
export declare const tableProProps: () => Pick<{
    prefixCls: {
        type: PropType<string>;
        default: any;
    };
    columns: {
        type: PropType<import("ant-design-vue/es/table").ColumnsType<any>>;
        default: any;
    };
    rowKey: {
        type: PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
        default: any;
    };
    tableLayout: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TableLayout>;
        default: any;
    };
    rowClassName: {
        type: PropType<string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    title: {
        type: PropType<PanelRender<any>>;
        default: any;
    };
    footer: {
        type: PropType<PanelRender<any>>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    showHeader: {
        type: PropType<boolean>;
        default: any;
    };
    components: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TableComponents<any>>;
        default: any;
    };
    customRow: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>>;
        default: any;
    };
    customHeaderRow: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>>;
        default: any;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
        default: any;
    };
    expandFixed: {
        type: PropType<boolean | "left" | "right">;
        default: any;
    };
    expandColumnWidth: {
        type: PropType<number>;
        default: any;
    };
    expandedRowKeys: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    defaultExpandedRowKeys: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    expandedRowRender: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>>;
        default: any;
    };
    expandRowByClick: {
        type: PropType<boolean>;
        default: any;
    };
    expandIcon: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>>;
        default: any;
    };
    onExpand: {
        type: PropType<(expanded: boolean, record: any) => void>;
        default: any;
    };
    onExpandedRowsChange: {
        type: PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    'onUpdate:expandedRowKeys': {
        type: PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    defaultExpandAllRows: {
        type: PropType<boolean>;
        default: any;
    };
    indentSize: {
        type: PropType<number>;
        default: any;
    };
    expandIconColumnIndex: {
        type: PropType<number>;
        default: any;
    };
    showExpandColumn: {
        type: BooleanConstructor;
        default: any;
    };
    expandedRowClassName: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    childrenColumnName: {
        type: PropType<string>;
        default: any;
    };
    rowExpandable: {
        type: PropType<(record: any) => boolean>;
        default: any;
    };
    sticky: {
        type: PropType<boolean | import("ant-design-vue/es/vc-table/interface").TableSticky>;
        default: any;
    };
    dropdownPrefixCls: StringConstructor;
    dataSource: {
        type: PropType<any[]>;
        default: any;
    };
    pagination: {
        type: PropType<false | TablePaginationConfig>;
        default: any;
    };
    loading: {
        type: PropType<false | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            spinning: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
            wrapperClassName: StringConstructor;
            tip: import("vue-types").VueTypeValidableDef<any>;
            delay: NumberConstructor;
            indicator: import("vue-types").VueTypeValidableDef<any>;
        }>>>;
        default: any;
    };
    size: {
        type: PropType<import("ant-design-vue/es/button").ButtonSize>;
        default: any;
    };
    bordered: BooleanConstructor;
    locale: {
        type: PropType<import("ant-design-vue/es/table/interface").TableLocale>;
        default: any;
    };
    onChange: {
        type: PropType<(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void>;
        default: any;
    };
    onResizeColumn: {
        type: PropType<(w: number, col: ColumnType<any>) => void>;
        default: any;
    };
    rowSelection: {
        type: PropType<import("ant-design-vue/es/table/interface").TableRowSelection<any>>;
        default: any;
    };
    getPopupContainer: {
        type: PropType<import("ant-design-vue/es/table/interface").GetPopupContainer>;
        default: any;
    };
    scroll: {
        type: PropType<{
            x?: string | number | true | undefined;
            y?: string | number | undefined;
        } & {
            scrollToFirstRowOnChange?: boolean | undefined;
        }>;
        default: any;
    };
    sortDirections: {
        type: PropType<import("ant-design-vue/es/table/interface").SortOrder[]>;
        default: any;
    };
    showSorterTooltip: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            title: import("vue-types").VueTypeValidableDef<any>;
            trigger: PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
        }>>>;
        default: boolean;
    };
    contextSlots: {
        type: PropType<import("ant-design-vue/es/table/context").ContextSlots>;
    };
    transformCellText: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TransformCellText<any>>;
    };
}, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dropdownPrefixCls" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "contextSlots" | "transformCellText"> & {
    columns: {
        type: PropType<ColumnsProType<any>>;
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
        type: PropType<string[]>;
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
        type: PropType<(parameter?: any) => Promise<any>>;
    };
    sortField: {
        type: StringConstructor;
        default: string;
    };
    sortValues: {
        type: PropType<string[]>;
        default: () => string[];
    };
    orderField: {
        type: StringConstructor;
        default: string;
    };
    titleStyle: {
        type: PropType<CSSProperties>;
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
        type: PropType<string[]>;
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
        type: PropType<CSSProperties>;
    };
};
export declare type TableProProps = Partial<ExtractPropTypes<ReturnType<typeof tableProProps>>>;
export declare type SearchFormItemType = 'select' | 'input' | 'timePicker' | 'datePicker';
export interface ColumnProType<RecordType = any> extends ColumnType<RecordType> {
    hide?: boolean;
    sort?: boolean | string;
    formItemType?: SearchFormItemType;
    customRenderFormItem?: (model: {
        [key: string]: any;
    }) => JSX.Element;
    selectOptions?: DefaultOptionType[] | (() => DefaultOptionType[]);
    timeFormat?: string;
    order?: number;
    formItemLabel?: string;
    showInForm?: boolean;
}
export interface ColumnProGroupType<RecordType = any> extends Omit<ColumnProType<RecordType>, 'dataIndex'> {
    children: ColumnsProType<RecordType>;
}
export declare type ColumnsProType<RecordType = any> = (ColumnProGroupType<RecordType> | ColumnProType<RecordType>)[];
declare const _default: import("vue").DefineComponent<Pick<{
    prefixCls: {
        type: PropType<string>;
        default: any;
    };
    columns: {
        type: PropType<import("ant-design-vue/es/table").ColumnsType<any>>;
        default: any;
    };
    rowKey: {
        type: PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
        default: any;
    };
    tableLayout: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TableLayout>;
        default: any;
    };
    rowClassName: {
        type: PropType<string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    title: {
        type: PropType<PanelRender<any>>;
        default: any;
    };
    footer: {
        type: PropType<PanelRender<any>>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    showHeader: {
        type: PropType<boolean>;
        default: any;
    };
    components: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TableComponents<any>>;
        default: any;
    };
    customRow: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>>;
        default: any;
    };
    customHeaderRow: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>>;
        default: any;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
        default: any;
    };
    expandFixed: {
        type: PropType<boolean | "left" | "right">;
        default: any;
    };
    expandColumnWidth: {
        type: PropType<number>;
        default: any;
    };
    expandedRowKeys: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    defaultExpandedRowKeys: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    expandedRowRender: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>>;
        default: any;
    };
    expandRowByClick: {
        type: PropType<boolean>;
        default: any;
    };
    expandIcon: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>>;
        default: any;
    };
    onExpand: {
        type: PropType<(expanded: boolean, record: any) => void>;
        default: any;
    };
    onExpandedRowsChange: {
        type: PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    'onUpdate:expandedRowKeys': {
        type: PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    defaultExpandAllRows: {
        type: PropType<boolean>;
        default: any;
    };
    indentSize: {
        type: PropType<number>;
        default: any;
    };
    expandIconColumnIndex: {
        type: PropType<number>;
        default: any;
    };
    showExpandColumn: {
        type: BooleanConstructor;
        default: any;
    };
    expandedRowClassName: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    childrenColumnName: {
        type: PropType<string>;
        default: any;
    };
    rowExpandable: {
        type: PropType<(record: any) => boolean>;
        default: any;
    };
    sticky: {
        type: PropType<boolean | import("ant-design-vue/es/vc-table/interface").TableSticky>;
        default: any;
    };
    dropdownPrefixCls: StringConstructor;
    dataSource: {
        type: PropType<any[]>;
        default: any;
    };
    pagination: {
        type: PropType<false | TablePaginationConfig>;
        default: any;
    };
    loading: {
        type: PropType<false | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            spinning: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
            wrapperClassName: StringConstructor;
            tip: import("vue-types").VueTypeValidableDef<any>;
            delay: NumberConstructor;
            indicator: import("vue-types").VueTypeValidableDef<any>;
        }>>>;
        default: any;
    };
    size: {
        type: PropType<import("ant-design-vue/es/button").ButtonSize>;
        default: any;
    };
    bordered: BooleanConstructor;
    locale: {
        type: PropType<import("ant-design-vue/es/table/interface").TableLocale>;
        default: any;
    };
    onChange: {
        type: PropType<(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void>;
        default: any;
    };
    onResizeColumn: {
        type: PropType<(w: number, col: ColumnType<any>) => void>;
        default: any;
    };
    rowSelection: {
        type: PropType<import("ant-design-vue/es/table/interface").TableRowSelection<any>>;
        default: any;
    };
    getPopupContainer: {
        type: PropType<import("ant-design-vue/es/table/interface").GetPopupContainer>;
        default: any;
    };
    scroll: {
        type: PropType<{
            x?: string | number | true | undefined;
            y?: string | number | undefined;
        } & {
            scrollToFirstRowOnChange?: boolean | undefined;
        }>;
        default: any;
    };
    sortDirections: {
        type: PropType<import("ant-design-vue/es/table/interface").SortOrder[]>;
        default: any;
    };
    showSorterTooltip: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            title: import("vue-types").VueTypeValidableDef<any>;
            trigger: PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
        }>>>;
        default: boolean;
    };
    contextSlots: {
        type: PropType<import("ant-design-vue/es/table/context").ContextSlots>;
    };
    transformCellText: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TransformCellText<any>>;
    };
}, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dropdownPrefixCls" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "contextSlots" | "transformCellText"> & {
    columns: {
        type: PropType<ColumnsProType<any>>;
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
        type: PropType<string[]>;
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
        type: PropType<(parameter?: any) => Promise<any>>;
    };
    sortField: {
        type: StringConstructor;
        default: string;
    };
    sortValues: {
        type: PropType<string[]>;
        default: () => string[];
    };
    orderField: {
        type: StringConstructor;
        default: string;
    };
    titleStyle: {
        type: PropType<CSSProperties>;
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
        type: PropType<string[]>;
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
        type: PropType<CSSProperties>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<Pick<{
    prefixCls: {
        type: PropType<string>;
        default: any;
    };
    columns: {
        type: PropType<import("ant-design-vue/es/table").ColumnsType<any>>;
        default: any;
    };
    rowKey: {
        type: PropType<string | import("ant-design-vue/es/vc-table/interface").GetRowKey<any>>;
        default: any;
    };
    tableLayout: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TableLayout>;
        default: any;
    };
    rowClassName: {
        type: PropType<string | import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    title: {
        type: PropType<PanelRender<any>>;
        default: any;
    };
    footer: {
        type: PropType<PanelRender<any>>;
        default: any;
    };
    id: {
        type: PropType<string>;
        default: any;
    };
    showHeader: {
        type: PropType<boolean>;
        default: any;
    };
    components: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TableComponents<any>>;
        default: any;
    };
    customRow: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<any>>;
        default: any;
    };
    customHeaderRow: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").GetComponentProps<import("ant-design-vue/es/vc-table/interface").ColumnType<any>[]>>;
        default: any;
    };
    direction: {
        type: PropType<"ltr" | "rtl">;
        default: any;
    };
    expandFixed: {
        type: PropType<boolean | "left" | "right">;
        default: any;
    };
    expandColumnWidth: {
        type: PropType<number>;
        default: any;
    };
    expandedRowKeys: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    defaultExpandedRowKeys: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").Key[]>;
        default: import("ant-design-vue/es/vc-table/interface").Key[];
    };
    expandedRowRender: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").ExpandedRowRender<any>>;
        default: any;
    };
    expandRowByClick: {
        type: PropType<boolean>;
        default: any;
    };
    expandIcon: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").RenderExpandIcon<any>>;
        default: any;
    };
    onExpand: {
        type: PropType<(expanded: boolean, record: any) => void>;
        default: any;
    };
    onExpandedRowsChange: {
        type: PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    'onUpdate:expandedRowKeys': {
        type: PropType<(expandedKeys: import("ant-design-vue/es/vc-table/interface").Key[]) => void>;
        default: any;
    };
    defaultExpandAllRows: {
        type: PropType<boolean>;
        default: any;
    };
    indentSize: {
        type: PropType<number>;
        default: any;
    };
    expandIconColumnIndex: {
        type: PropType<number>;
        default: any;
    };
    showExpandColumn: {
        type: BooleanConstructor;
        default: any;
    };
    expandedRowClassName: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").RowClassName<any>>;
        default: any;
    };
    childrenColumnName: {
        type: PropType<string>;
        default: any;
    };
    rowExpandable: {
        type: PropType<(record: any) => boolean>;
        default: any;
    };
    sticky: {
        type: PropType<boolean | import("ant-design-vue/es/vc-table/interface").TableSticky>;
        default: any;
    };
    dropdownPrefixCls: StringConstructor;
    dataSource: {
        type: PropType<any[]>;
        default: any;
    };
    pagination: {
        type: PropType<false | TablePaginationConfig>;
        default: any;
    };
    loading: {
        type: PropType<false | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            spinning: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
            wrapperClassName: StringConstructor;
            tip: import("vue-types").VueTypeValidableDef<any>;
            delay: NumberConstructor;
            indicator: import("vue-types").VueTypeValidableDef<any>;
        }>>>;
        default: any;
    };
    size: {
        type: PropType<import("ant-design-vue/es/button").ButtonSize>;
        default: any;
    };
    bordered: BooleanConstructor;
    locale: {
        type: PropType<import("ant-design-vue/es/table/interface").TableLocale>;
        default: any;
    };
    onChange: {
        type: PropType<(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void>;
        default: any;
    };
    onResizeColumn: {
        type: PropType<(w: number, col: ColumnType<any>) => void>;
        default: any;
    };
    rowSelection: {
        type: PropType<import("ant-design-vue/es/table/interface").TableRowSelection<any>>;
        default: any;
    };
    getPopupContainer: {
        type: PropType<import("ant-design-vue/es/table/interface").GetPopupContainer>;
        default: any;
    };
    scroll: {
        type: PropType<{
            x?: string | number | true | undefined;
            y?: string | number | undefined;
        } & {
            scrollToFirstRowOnChange?: boolean | undefined;
        }>;
        default: any;
    };
    sortDirections: {
        type: PropType<import("ant-design-vue/es/table/interface").SortOrder[]>;
        default: any;
    };
    showSorterTooltip: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            title: import("vue-types").VueTypeValidableDef<any>;
            trigger: PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
                default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
                default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
                default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
        }>>>;
        default: boolean;
    };
    contextSlots: {
        type: PropType<import("ant-design-vue/es/table/context").ContextSlots>;
    };
    transformCellText: {
        type: PropType<import("ant-design-vue/es/vc-table/interface").TransformCellText<any>>;
    };
}, "prefixCls" | "onChange" | "footer" | "title" | "size" | "rowKey" | "tableLayout" | "rowClassName" | "id" | "showHeader" | "components" | "customRow" | "customHeaderRow" | "direction" | "expandFixed" | "expandColumnWidth" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "onUpdate:expandedRowKeys" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "showExpandColumn" | "expandedRowClassName" | "childrenColumnName" | "rowExpandable" | "sticky" | "dropdownPrefixCls" | "dataSource" | "pagination" | "loading" | "bordered" | "locale" | "onResizeColumn" | "rowSelection" | "getPopupContainer" | "scroll" | "sortDirections" | "showSorterTooltip" | "contextSlots" | "transformCellText"> & {
    columns: {
        type: PropType<ColumnsProType<any>>;
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
        type: PropType<string[]>;
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
        type: PropType<(parameter?: any) => Promise<any>>;
    };
    sortField: {
        type: StringConstructor;
        default: string;
    };
    sortValues: {
        type: PropType<string[]>;
        default: () => string[];
    };
    orderField: {
        type: StringConstructor;
        default: string;
    };
    titleStyle: {
        type: PropType<CSSProperties>;
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
        type: PropType<string[]>;
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
        type: PropType<CSSProperties>;
    };
}>>, {
    prefixCls: string;
    onChange: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: import("ant-design-vue/es/table/interface").SorterResult<any> | import("ant-design-vue/es/table/interface").SorterResult<any>[], extra: import("ant-design-vue/es/table/interface").TableCurrentDataSource<any>) => void;
    footer: PanelRender<any>;
    title: PanelRender<any>;
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
    pagination: false | TablePaginationConfig;
    loading: false | Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        spinning: {
            type: BooleanConstructor;
            default: any;
        };
        size: PropType<import("ant-design-vue/es/spin/Spin").SpinSize>;
        wrapperClassName: StringConstructor;
        tip: import("vue-types").VueTypeValidableDef<any>;
        delay: NumberConstructor;
        indicator: import("vue-types").VueTypeValidableDef<any>;
    }>>;
    bordered: boolean;
    locale: import("ant-design-vue/es/table/interface").TableLocale;
    onResizeColumn: (w: number, col: ColumnType<any>) => void;
    rowSelection: import("ant-design-vue/es/table/interface").TableRowSelection<any>;
    getPopupContainer: import("ant-design-vue/es/table/interface").GetPopupContainer;
    scroll: {
        x?: string | number | true | undefined;
        y?: string | number | undefined;
    } & {
        scrollToFirstRowOnChange?: boolean | undefined;
    };
    sortDirections: import("ant-design-vue/es/table/interface").SortOrder[];
    showSorterTooltip: boolean | Partial<ExtractPropTypes<{
        title: import("vue-types").VueTypeValidableDef<any>;
        trigger: PropType<import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/es/tooltip/abstractTooltipProps").TriggerType[]>;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        defaultVisible: {
            type: BooleanConstructor;
            default: any;
        };
        placement: PropType<import("ant-design-vue/es/tooltip").TooltipPlacement>;
        color: StringConstructor;
        transitionName: StringConstructor;
        overlayStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        overlayClassName: StringConstructor;
        openClassName: StringConstructor;
        prefixCls: StringConstructor;
        mouseEnterDelay: NumberConstructor;
        mouseLeaveDelay: NumberConstructor;
        getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
        arrowPointAtCenter: {
            type: BooleanConstructor;
            default: any;
        };
        autoAdjustOverflow: {
            type: PropType<boolean | import("ant-design-vue/es/tooltip").AdjustOverflow>;
            default: boolean | import("ant-design-vue/es/tooltip").AdjustOverflow;
        };
        destroyTooltipOnHide: {
            type: BooleanConstructor;
            default: any;
        };
        align: {
            type: PropType<import("ant-design-vue/es/vc-trigger/interface").AlignType>;
            default: import("ant-design-vue/es/vc-trigger/interface").AlignType;
        };
        builtinPlacements: {
            type: PropType<import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements>;
            default: import("ant-design-vue/es/vc-trigger/interface").BuildInPlacements;
        };
        children: ArrayConstructor;
        onVisibleChange: PropType<(vis: boolean) => void>;
        'onUpdate:visible': PropType<(vis: boolean) => void>;
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
}>;
export default _default;
