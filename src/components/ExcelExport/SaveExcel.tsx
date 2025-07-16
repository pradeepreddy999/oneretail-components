import type { RefObject } from "react";
import type { WorkbookOptions } from "@progress/kendo-ooxml";
import type { ExcelExport } from "@progress/kendo-react-excel-export";

export const saveExcel = (component: RefObject<ExcelExport | null>) => {
  if (component.current === null) throw Error("Error downloading...");

  const options: WorkbookOptions = component.current.workbookOptions();
  const sheet = options.sheets![0];
  const rows = sheet.rows!;
  // rows.wrap = true;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];

    const cells = row.cells!;
    for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      const cell = cells[cellIndex];
      if (row.type === "footer") {
        cell.background = "#7a7a7a";
        cell.color = "#fff";
      }
    }
  }
  const columns = sheet.columns!;
  columns.forEach((column) => {
    // also delete the width if it is set
    delete column.width;
    column.autoWidth = true;
  });

  component.current.save(options);
};
