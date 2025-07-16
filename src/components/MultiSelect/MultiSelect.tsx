import {
  MultiSelect as KendoMultiSelect,
  type MultiSelectChangeEvent,
} from "@progress/kendo-react-dropdowns";
import type { KendoMultiSelectProps } from "./MultiSelect.types";
import "./MultiSelect.css";

const MultiSelect = ({
  data,
  selected,
  isFilterable,
  handleFilterSearch,
  // handleFilterChange,
  multiSelectBy,
}: KendoMultiSelectProps) => {
  const handleFilterChange = (event: MultiSelectChangeEvent) => {
    console.log(event);
  };
  return (
    <div>
      <p className=" mb-0 text-xl ">{`${multiSelectBy}:`}</p>
      <KendoMultiSelect
        className="custom-Multiselect"
        style={{ height: "50%", width: "200px" }}
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
    </div>
  );
};

export default MultiSelect;
