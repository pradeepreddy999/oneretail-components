import type {
  MultiSelectChangeEvent,
  MultiSelectFilterChangeEvent,
} from "@progress/kendo-react-dropdowns";

export type KendoMultiSelectProps = {
  data: [];
  selected: (string | number | { [key: string]: string | number | boolean })[];
  isFilterable: boolean;
  handleFilterSearch: (event: MultiSelectFilterChangeEvent) => void;
  handleFilterChange: (event: MultiSelectChangeEvent) => void;
};
