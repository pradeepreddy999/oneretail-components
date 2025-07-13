import type { GridHandle } from "@progress/kendo-react-grid";

export type KendoGridProps = {
  data: [];
  pageSize: number;
  ref: React.RefObject<GridHandle | null>;
  columns: [{ field: ""; title: "" }];
};
