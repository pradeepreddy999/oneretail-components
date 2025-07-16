import type {
  MultiSelectChangeEvent,
  MultiSelectFilterChangeEvent,
} from "@progress/kendo-react-dropdowns";

export type KendoMultiSelectProps = {
  data: (string | number | { [key: string]: string | number | boolean })[];
  selected: (string | number | { [key: string]: string | number | boolean })[];
  isFilterable: boolean;
  multiSelectBy: string;
  handleFilterSearch: (event: MultiSelectFilterChangeEvent) => void;
  handleFilterChange: (event: MultiSelectChangeEvent) => void;
};
