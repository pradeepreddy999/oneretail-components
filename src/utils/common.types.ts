import type { ExcelExportExportEvent } from "@progress/kendo-react-excel-export";

export type ExportCompleteProps =
  | ((event: ExcelExportExportEvent) => void)
  | undefined;

export type ArrayOfObjects = {
  [key: string | number]: number | string | boolean;
}[];

export type ChangeEvent = (from: string, value: ArrayOfObjects) => void;
