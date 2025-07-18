import {
  GridColumnMenuCheckboxFilter,
  type GridColumnMenuProps,
} from "@progress/kendo-react-grid";
import { filterBy, getter, type State } from "@progress/kendo-data-query";
import { GetSortedArray } from "./utilities";
import { setter } from "@progress/kendo-react-common";
import { getValueMap } from "@progress/kendo-react-dropdowns";

export const ColumnMenuCheckboxFilter = (
  defaultProps: GridColumnMenuProps,
  data: {
    [key: string]: unknown;
  }[],
  dataState: State
) => {
  let finalData = [];
  const field = defaultProps?.column?.field;
  if (!field) return undefined;

  const filter = dataState.filter;

  if (filter && Object.entries(filter).length > 0) {
    let { filters } = filter;

    filters = filters.filter(
      (f: unknown) =>
        (
          f as { filters: { field: string }[] }
        ).filters[0].field.toLowerCase() !== field.toLowerCase()
    );

    if (filters.length > 0) {
      finalData = filterBy(data, { ...filter, filters });
    } else {
      finalData = [...data];
    }
  } else {
    finalData = [...data];
  }

  return (
    <GridColumnMenuCheckboxFilter
      {...defaultProps}
      data={GetSortedArray(
        finalData as Record<string, string | number | null | undefined>[],
        field
      )}
      expanded
      searchBoxFilterOperator="contains"
    />
  );
};

const mapMultiSelectTreeData = (data: any, options: any) => {
  const { keyGetter, checkSetter, valueMap }: any = options;

  if (!data || !data.length) {
    return [data, false];
  }

  let hasChecked = false;
  const newData = [...data].map((dataItem) => {
    const isChecked = valueMap[keyGetter(dataItem)];
    if (isChecked) {
      hasChecked = true;
    }

    const newItem = { ...dataItem };

    checkSetter(newItem, isChecked);

    return newItem;
  });

  return [newData, hasChecked];
};

export const processMultiSelectTreeData = (tree: any, options: any) => {
  const {
    checkField = "checkField",
    dataItemKey,
    value,
    filter,
  }: any = options;

  const keyGetter = getter(dataItemKey);
  const filtering = Boolean(filter && filter.value);

  const [result] = mapMultiSelectTreeData(tree, {
    valueMap: getValueMap(value, keyGetter),
    keyGetter,
    checkSetter: setter(checkField),
  });

  return filtering ? filterBy(result, filter) : result;
};
