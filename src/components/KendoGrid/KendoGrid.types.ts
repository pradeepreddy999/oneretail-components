import type { SortDescriptor } from "@progress/kendo-data-query";
import type { ExcelExport } from "@progress/kendo-react-excel-export";
import type { Ref } from "react";
import type { ExportCompleteProps } from "../../utils/common.types";

export type KendoGridProps = {
  title: string;
  data: [];
  columns: KendoGridColumnProps[];
  sort: [{ field: string; dir: "asc" | "desc" }] | SortDescriptor[];
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
