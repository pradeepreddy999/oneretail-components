import type { Ref } from "react";
import type { State } from "@progress/kendo-data-query";
import type { ExcelExport } from "@progress/kendo-react-excel-export";
import type { ExportCompleteProps } from "../../utils/common.types";

export type ExcelExportProps = {
  ref: Ref<ExcelExport> | undefined;
  data: [];
  columns: { [key: string]: unknown }[];
  dataState: State;
  fileName: string;
  handleExportComplete: ExportCompleteProps;
};
