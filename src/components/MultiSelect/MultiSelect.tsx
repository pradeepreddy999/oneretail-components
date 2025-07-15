import { MultiSelect as KendoMultiSelect } from "@progress/kendo-react-dropdowns";
import type { KendoMultiSelectProps } from "./MultiSelect.types";

const MultiSelect = ({
  data,
  selected,
  isFilterable,
  handleFilterSearch,
  handleFilterChange,
}: KendoMultiSelectProps) => {
  return (
    <KendoMultiSelect
      style={{ width: "100%" }}
      data={data}
      autoClose={false}
      tags={
        selected?.length > 0
          ? [
              {
                text: `${
                  selected?.length === 1
                    ? selected[0]
                    : `${selected?.length} items`
                }`,
                data: [...data],
              },
            ]
          : []
      }
      filterable={isFilterable}
      onFilterChange={isFilterable ? handleFilterSearch : undefined}
      placeholder="All"
      value={selected}
      onChange={handleFilterChange}
    />
  );
};

export default MultiSelect;
