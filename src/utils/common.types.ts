import type { ExcelExportExportEvent } from "@progress/kendo-react-excel-export";

export type handleExportComplete =
  | ((event: ExcelExportExportEvent) => void)
  | undefined;
