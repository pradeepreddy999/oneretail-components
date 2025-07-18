import {
  getMultiSelectTreeValue,
  MultiSelectTree,
  type ItemProps,
  type MultiSelectTreeChangeEvent,
  type MultiSelectTreeFilterChangeEvent,
} from "@progress/kendo-react-dropdowns";
import type { KendoMultiSelectSearchTreeProps } from "./MultiSelectSearchTreeProps.types";
import { useMemo, useState } from "react";
import { processMultiSelectTreeData } from "../../utils";
import type { FilterDescriptor } from "@progress/kendo-data-query";
import "./multiSelectTree.css";
const MultiSelectSearchTree = ({
  data,
  isFilterable,
  multiSelectBy,
  selected,
  dataItemKey,
  textField,
}: KendoMultiSelectSearchTreeProps) => {
  const [value, setValue] = useState(selected);
  const [filter, setFilter] = useState<null | FilterDescriptor>(null);
  const checkField = "checkField";
  const SelectAllText = "Select All";

  // const handleMultiselectChange = (event: MultiSelectTreeChangeEvent) => {
  //   console.log("event", event);
  //   setValue(
  //     getMultiSelectTreeValue(data, {
  //       dataItemKey,
  //       value: value,
  //       items: event.items,
  //       operation: event.operation,
  //     })
  //   );
  // };

  const handleMultiselectChange = (event: MultiSelectTreeChangeEvent) => {
    console.log("valuee", value);
    const currentSelectAll = value.some(
      (i) =>
        typeof i === "object" && typeof i != null && i.text === SelectAllText
    );
    const nextSelectAll = event.items.some(
      (i) =>
        typeof i === "object" && typeof i != null && i.text === SelectAllText
    );

    let d = getMultiSelectTreeValue(data, {
      dataItemKey,
      value: value,
      items: event.items,
      operation: event.operation,
    });
    const currentCount = value.length;
    const nextCount = d.length;

    if (currentSelectAll && nextSelectAll) {
      d = [];
    } else if (!currentSelectAll && nextSelectAll) {
      d = data;
    } else if (
      nextCount < currentCount &&
      currentCount === data.length &&
      currentSelectAll
    ) {
      d = d.filter(
        (v) =>
          typeof v === "object" && typeof v != null && v.text !== SelectAllText
      );
    } else if (
      nextCount > currentCount &&
      !currentSelectAll &&
      !nextSelectAll &&
      nextCount === data.length - 1
    ) {
      d = data;
    }
    setValue(d);
  };

  const handleFilterChange = (event: MultiSelectTreeFilterChangeEvent) =>
    setFilter(event.filter);

  const Item = (props: ItemProps) => {
    const { item } = props;
    const isChecked = item[checkField];
    return (
      <span className={isChecked ? "checked" : ""}>{item[textField]}</span>
    );
  };

  const treeData = useMemo(
    () =>
      processMultiSelectTreeData(data, {
        dataItemKey,
        checkField,
        value,
        filter,
      }),
    [data, value, filter]
  );
  return (
    <div>
      <p>{multiSelectBy}</p>
      <MultiSelectTree
        className=" custom-Multiselect text-[#4365d8]"
        style={{ height: "50%", width: "12rem" }}
        data={treeData}
        dataItemKey={dataItemKey}
        textField={textField}
        filterable={isFilterable}
        value={value}
        item={Item}
        opened
        placeholder="All"
        onFilterChange={handleFilterChange}
        onChange={handleMultiselectChange}
        tags={
          value.length > 0
            ? [
                {
                  text:
                    value.length > 1
                      ? value.some(
                          (i) =>
                            typeof i === "object" &&
                            typeof i != null &&
                            i.text === SelectAllText
                        )
                        ? `${value.length - 1} items`
                        : `${value.length} items`
                      : value.length > 0 && typeof value[0] === "object"
                      ? value[0].text
                      : "All",
                  data: [...value],
                },
              ]
            : undefined
        }
      />
    </div>
  );
};

export default MultiSelectSearchTree;
