import {
  filterBy,
  orderBy,
  type CompositeFilterDescriptor,
  type FilterDescriptor,
  type SortDescriptor,
} from "@progress/kendo-data-query";
import {
  ExcelExport as KendoExcelExport,
  ExcelExportColumn,
  type CellOptions,
} from "@progress/kendo-react-excel-export";
import { useInternationalization } from "@progress/kendo-react-intl";
import type { ExcelExportProps } from "./ExcelExport.types";
import { getAggrFooterVal } from "../../utils";

const ExcelExport = ({
  ref,
  data,
  columns,
  dataState,
  handleExportComplete,
  fileName = "export",
}: ExcelExportProps) => {
  const intl = useInternationalization();

  return (
    <KendoExcelExport
      data={orderBy(
        filterBy(
          data,
          dataState.filter as CompositeFilterDescriptor | FilterDescriptor
        ),
        dataState.sort as SortDescriptor[]
      )}
      fileName={fileName + ".xlsx"}
      ref={ref}
      onExportComplete={handleExportComplete}
      filterable
    >
      {columns.map((col, ind) => {
        return (
          <ExcelExportColumn
            key={(col.field as string).split(" ").join("") + ind}
            field={col.field as string | undefined}
            title={col.title as string | undefined}
            headerCellOptions={
              {
                textAlign: col.excelHeaderTextAlign,
              } as CellOptions
            }
            cellOptions={
              {
                textAlign: col.excelCellTextAlign,
                format: col.excelFormat,
              } as CellOptions
            }
            footerCellOptions={
              col.hasFooter
                ? ({
                    textAlign: col.excelCellTextAlign,
                    format: col.excelFooterFormat,
                  } as CellOptions)
                : undefined
            }
            footer={
              col.hasFooter
                ? () => {
                    const field = col.field;
                    const aggrVal =
                      (col.footerAggr as string).length === 0
                        ? ""
                        : getAggrFooterVal(
                            data,
                            dataState,
                            field as string,
                            col.footerAggr as string
                          );
                    if (
                      typeof col.footerVal === "string" &&
                      col.footerVal.toLowerCase().includes("total")
                    ) {
                      return (
                        col.footerVal +
                        ` (${intl.formatNumber(
                          filterBy(
                            data,
                            dataState.filter as
                              | CompositeFilterDescriptor
                              | FilterDescriptor
                          )?.length,
                          "n0"
                        )})`
                      );
                    }
                    return aggrVal;
                  }
                : undefined
            }
            locked={col.locked as boolean | undefined}
          />
        );
      })}
    </KendoExcelExport>
  );
};

export default ExcelExport;
