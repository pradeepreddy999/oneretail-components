import type { SortDescriptor } from "@progress/kendo-data-query";

export type KendoGridProps = {
  data: [];
  pageSize: number;
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
  rowSelectable?: boolean;
};
