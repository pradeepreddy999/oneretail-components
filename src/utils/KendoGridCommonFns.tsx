import {
  GridColumnMenuCheckboxFilter,
  type GridColumnMenuProps,
} from "@progress/kendo-react-grid";
import { filterBy, type State } from "@progress/kendo-data-query";
import { GetSortedArray } from "./utilities";

export const ColumnMenuCheckboxFilter = (
  defaultProps: GridColumnMenuProps,
  data: {
    [key: string]: unknown;
  }[],
  dataState: State
) => {
  let finalData = [];
  const field = defaultProps?.column?.field;
  if (!field) return null;

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
