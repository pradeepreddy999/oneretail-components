import type {
  CompositeFilterDescriptor,
  FilterDescriptor,
} from "@progress/kendo-data-query";
import type { ExcelExportExportEvent } from "@progress/kendo-react-excel-export";

export type ExportCompleteProps =
  | ((event: ExcelExportExportEvent) => void)
  | undefined;
