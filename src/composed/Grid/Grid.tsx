import { useRef, useState } from "react";
import { KendoGrid } from "../../components";
import type { GridProps } from "./Grid.types";
import type { ExcelExport } from "@progress/kendo-react-excel-export";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { saveExcel } from "../../components/ExcelExport/SaveExcel";

const Grid = ({
  viewBy,
  viewByOptions,
  metrics,
  metricOptions,
  // groupBy,
  // groupByOptions,
  // sortBy,
  // sortOptions,
  title,
  data,
  columns,
  sort,
  handleChangeEvent,
  rowSelectType,
}: GridProps) => {
  const [exportLoader, setExportLoader] = useState(false);
  const excelRef = useRef<ExcelExport>(null);

  const handleExport = () => {
    setExportLoader(true);
    saveExcel(excelRef);
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-wrap">
          <div>
            {viewBy.join(", ") +
              // + " : "
              viewByOptions.join(", ")}
          </div>
          <div>
            {metrics.join(", ") +
              // + " : "
              metricOptions.join(", ")}
          </div>
        </div>
        <div className="float-end">
          <button
            className="h-6 w-15 bg-[var(--screen-primary-color)] 
            rounded text-white flex items-center justify-center cursor-pointer"
            onClick={handleExport}
          >
            {exportLoader ? (
              <ArrowDownTrayIcon className="h-5 w-7" />
            ) : (
              "Export"
            )}
          </button>
        </div>
      </div>
      <div className="border-1 px-4 border-gray-300 rounded-lg">
        <KendoGrid
          title={title}
          data={data}
          columns={columns}
          handleExportComplete={() => setExportLoader(false)}
          sort={sort}
          excelRef={excelRef}
          rowSelectType={rowSelectType}
          handleChangeEvent={handleChangeEvent}
        />
      </div>
    </div>
  );
};

export default Grid;
