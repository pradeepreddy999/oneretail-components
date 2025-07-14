import type { SortDescriptor } from "@progress/kendo-data-query";
import type { ExcelExport } from "@progress/kendo-react-excel-export";
import type { Ref } from "react";
import type { handleExportComplete } from "../../utils/common.types";

export type KendoGridProps = {
  title: string;
  data: [];
  columns: {
    field: string;
    title: string;
    width: string;
    textClassName: string;
    columnMenuRequired: boolean;
    format: string;
    locked: boolean;
    footerVal?: string;
    footerAggr?: string;
  }[];
  sort: [{ field: string; dir: "asc" | "desc" }] | SortDescriptor[];
  excelRef: Ref<ExcelExport> | undefined;
  handleExportComplete: handleExportComplete;
  pageSize?: number;
  rowSelectable?: boolean;
};
