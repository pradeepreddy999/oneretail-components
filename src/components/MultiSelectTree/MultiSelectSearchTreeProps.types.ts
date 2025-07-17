export type KendoMultiSelectSearchTreeProps = {
  data: (string | number | { [key: string]: string | number | boolean })[];
  selected: (string | number | { [key: string]: string | number | boolean })[];
  isFilterable: boolean;
  multiSelectBy: string;
  textField: string;
  dataItemKey: string;
};
