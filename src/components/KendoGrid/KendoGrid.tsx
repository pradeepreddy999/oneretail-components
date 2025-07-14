import { useState, type SetStateAction } from "react";
import {
  // getter,
  Grid,
  GridColumn,
  GridNoRecords,
  // getSelectedState,
  // useInternationalization
} from "@progress/kendo-react-grid";
import type { KendoGridProps } from "./KendoGrid.types";

const KendoGrid = ({ ref, data, columns, pageSize }: KendoGridProps) => {
  // const intl = useInternationalization();
  const [dataState, setDataStateChange] = useState({});

  const DATA_ITEM_KEY = "KeyCol";
  const SELECTED_FIELD = "selected";
  // const idGetter = getter(DATA_ITEM_KEY);

  const handleDataStateChange = (e: { dataState: SetStateAction<object> }) => {
    setDataStateChange(e.dataState);
  };

  const handleSelectionChange = () => {};

  const handleHeaderSelectionChange = () => {};

  return data.length > 0 ? (
    <Grid
      ref={ref}
      sortable
      resizable
      style={{ height: "325px" }}
      rowHeight={30}
      selectable={{
        enabled: true,
        cell: false,
        mode: "multiple",
      }}
      pageSize={pageSize}
      data={data}
      {...dataState}
      onDataStateChange={handleDataStateChange}
      onSelectionChange={handleSelectionChange}
      dataItemKey={DATA_ITEM_KEY}
      selectedField={SELECTED_FIELD}
      onHeaderSelectionChange={handleHeaderSelectionChange}
    >
      {columns.map((c, ind) => (
        <GridColumn key={c.field.split(" ").join("") + ind || ind}></GridColumn>
      ))}
    </Grid>
  ) : (
    <GridNoRecords>No Records found</GridNoRecords>
  );
};

export default KendoGrid;
