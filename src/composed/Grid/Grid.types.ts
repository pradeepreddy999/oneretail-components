import type { SortDescriptor } from "@progress/kendo-data-query";

export type GridProps = {
  viewBy: string;
  viewByOptions: string[];
  metrics: string[];
  metricOptions: string[];
  groupBy?: string;
  groupByOptions?: string[];
  sortBy?: string;
  sortOptions?: string[];
  sort: SortDescriptor[];
  isGridRowSelectable?: boolean;
};
