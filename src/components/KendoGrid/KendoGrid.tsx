import React, { useState } from "react";
import {
  Grid,
  GridColumn,
  GridNoRecords,
  type GridDataStateChangeEvent,
  type GridSelectionChangeEvent,
  type GridHeaderSelectionChangeEvent,
} from "@progress/kendo-react-grid";
import { useInternationalization } from "@progress/kendo-react-intl";
import type { KendoGridProps } from "./KendoGrid.types";
import {
  filterBy,
  orderBy,
  type CompositeFilterDescriptor,
  type FilterDescriptor,
  type SortDescriptor,
  type State,
} from "@progress/kendo-data-query";
import type { SelectDescriptor } from "@progress/kendo-react-data-tools";
import {
  ColumnMenuCheckboxFilter,
  getAggrFooterVal,
  isColumnFiltered,
} from "../../utils";
import { ExcelExport } from "../ExcelExport";
import "./KendoGrid.css";

const KendoGrid = ({
  title,
  data,
  columns,
  sort,
  excelRef,
  handleExportComplete,
  pageSize = 30,
  rowSelectable,
}: KendoGridProps) => {
  const DATA_ITEM_KEY = "id";
  const intl = useInternationalization();
  const [dataState, setDataState] = useState<State>({
    sort: sort,
  });
  const [skip, setSkip] = useState(0);
  const [select, setSelect] = useState<SelectDescriptor>({});

  const handleDataStateChange = (event: GridDataStateChangeEvent) => {
    if (
      event.dataState.filter?.filters !== undefined &&
      event.dataState.filter?.filters.length >= 0
    )
      setSkip(0);

    setDataState(event.dataState);
  };

  const onHeaderSelectionChange = React.useCallback(
    (event: GridHeaderSelectionChangeEvent) => {
      setSelect(event.select);
    },
    []
  );

  const onSelectionChange = React.useCallback(
    (event: GridSelectionChangeEvent) => {
      setSelect(event.select);
    },
    []
  );

  return data.length > 0 ? (
    <>
      <Grid
        // className="h-[24rem]"
        style={{ height: "24rem" }}
        data={orderBy(
          filterBy(
            data,
            dataState.filter as CompositeFilterDescriptor | FilterDescriptor
          ),
          dataState.sort as SortDescriptor[]
        ).slice(skip, skip + pageSize)}
        sortable={{
          allowUnsort: true,
          mode: "multiple",
        }}
        resizable
        scrollable="virtual"
        rowHeight={10}
        skip={skip}
        pageSize={pageSize}
        total={
          filterBy(
            data,
            dataState?.filter as CompositeFilterDescriptor | FilterDescriptor
          ).length
        }
        {...dataState}
        onDataStateChange={handleDataStateChange}
        dataItemKey={DATA_ITEM_KEY}
        selectable={{
          enabled: true,
          drag: false,
          cell: false,
          mode: "multiple",
        }}
        select={select}
        onHeaderSelectionChange={onHeaderSelectionChange}
        onSelectionChange={onSelectionChange}
      >
        {rowSelectable && (
          <GridColumn filterable={false} columnType="checkbox" locked />
        )}
        {columns.map((col, ind) => (
          <GridColumn
            key={col.field.split(" ").join("") + ind || ind}
            field={col.field}
            title={col.title}
            width={col.width}
            className={col.textClassName}
            columnMenu={
              col.hasColumnMenu
                ? (p) => ColumnMenuCheckboxFilter(p, data, dataState)
                : undefined
            }
            format={
              col.format && col.format.length > 0
                ? `{0:${col.format}}`
                : col.format
            }
            locked={col.locked}
            headerClassName={
              isColumnFiltered(col.field, dataState)
                ? "text-center k-active-filter"
                : "text-center"
            }
            editable={false}
            cells={
              col.hasFooter
                ? {
                    footerCell: (fCell) => {
                      if (
                        typeof col.footerVal === "string" &&
                        col.footerVal.toLowerCase().includes("total")
                      ) {
                        return (
                          <td
                            aria-colindex={fCell.ariaColumnIndex}
                            className="text-left"
                          >
                            {col.footerVal +
                              ` (${intl.formatNumber(
                                filterBy(
                                  data,
                                  dataState.filter as
                                    | CompositeFilterDescriptor
                                    | FilterDescriptor
                                )?.length,
                                "n0"
                              )})`}
                          </td>
                        );
                      } else if (col.footerAggr && col.footerAggr.length > 0) {
                        const field = fCell.field as string;
                        const aggrVal = getAggrFooterVal(
                          data,
                          dataState,
                          field,
                          col.footerAggr
                        );

                        return (
                          <td
                            aria-colindex={fCell.ariaColumnIndex}
                            className="text-right"
                          >
                            {intl.formatNumber(aggrVal, col.format || "")}
                          </td>
                        );
                      }
                      return (
                        <td
                          aria-colindex={fCell.ariaColumnIndex}
                          className="text-right"
                        ></td>
                      );
                    },
                  }
                : undefined
            }
          />
        ))}
      </Grid>
      <ExcelExport
        data={data}
        dataState={dataState}
        columns={columns}
        ref={excelRef}
        fileName={title}
        handleExportComplete={handleExportComplete}
      />
    </>
  ) : (
    <Grid data={[]} className="no-records-grid">
      <GridNoRecords>No Records found</GridNoRecords>
    </Grid>
  );
};

export default KendoGrid;
