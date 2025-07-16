import type { SortDescriptor } from "@progress/kendo-data-query";
import type { KendoGridProps } from "../../components";

export type GridProps = {
  viewBy: string[];
  viewByOptions: string[];
  metrics: string[];
  metricOptions: string[];
  groupBy?: string;
  groupByOptions?: string[];
  sortBy?: string;
  sortOptions?: string[];
  sort: SortDescriptor[];
  isGridRowSelectable?: boolean;
} & Omit<KendoGridProps, "excelRef" | "handleExportComplete">;
