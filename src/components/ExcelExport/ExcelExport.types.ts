import type { Ref } from "react";
import type { State } from "@progress/kendo-data-query";
import type {
  ExcelExport,
  ExcelExportExportEvent,
} from "@progress/kendo-react-excel-export";

export type ExcelExportProps = {
  ref: Ref<ExcelExport> | undefined;
  data: [];
  columns: { [key: string]: unknown }[];
  dataState: State;
  fileName: string;
  handleExportComplete: ((event: ExcelExportExportEvent) => void) | undefined;
};
