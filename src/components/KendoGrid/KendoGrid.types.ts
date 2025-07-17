import type { SortDescriptor } from "@progress/kendo-data-query";
import type { ExcelExport } from "@progress/kendo-react-excel-export";
import type { Ref } from "react";
import type { ExportCompleteProps } from "../../utils/common.types";
import type {
  GridHeaderSelectionChangeEvent,
  GridSelectionChangeEvent,
} from "@progress/kendo-react-grid";
import type { SelectDescriptor } from "@progress/kendo-react-data-tools";

export type KendoGridProps = {
  title: string;
  data: [];
  columns: KendoGridColumnProps[];
  sort: [{ field: string; dir: "asc" | "desc" }] | SortDescriptor[];
  rowsSelected: SelectDescriptor;
  onHeaderSelectionChange: (event: GridHeaderSelectionChangeEvent) => void;
  onSelectionChange: (event: GridSelectionChangeEvent) => void;
  excelRef: Ref<ExcelExport> | undefined;
  handleExportComplete: ExportCompleteProps;
  pageSize?: number;
  rowSelectable?: boolean;
};

export type KendoGridColumnProps = {
  field: string;
  title: string;
  width: string;
  textClassName?:
    | "text-center"
    | "text-start"
    | "text-end"
    | "text-left"
    | "text-right";
  hasColumnMenu?: boolean;
  format?: string;
  locked?: boolean;
  hasFooter?: boolean;
  footerVal?: string;
  footerAggr?: string;
  excelCellTextAlign?: "left" | "right" | "center";
  excelFormat?: string;
};
