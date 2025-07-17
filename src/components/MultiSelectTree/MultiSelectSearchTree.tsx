import {
  MultiSelectTree,
  type MultiSelectTreeChangeEvent,
} from "@progress/kendo-react-dropdowns";
import type { KendoMultiSelectSearchTreeProps } from "./MultiSelectSearchTreeProps.types";
import { useState } from "react";
const MultiSelectSearchTree = ({
  data,
  isFilterable,
  multiSelectBy,
  selected,
  dataItemKey,
  textField,
}: KendoMultiSelectSearchTreeProps) => {
  const handleMultiselectChange = (event: MultiSelectTreeChangeEvent) => {
    console.log("event", event);
  };
  return (
    <div>
      <p>{multiSelectBy}</p>
      <MultiSelectTree
        data={data}
        dataItemKey={dataItemKey}
        textField={textField}
        filterable={isFilterable}
        // value={selected}
        onChange={handleMultiselectChange}
      />
    </div>
  );
};

export default MultiSelectSearchTree;
