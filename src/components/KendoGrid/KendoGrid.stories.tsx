import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import KendoGrid from "./KendoGrid";
import { useRef } from "react";
import type { ExcelExport } from "@progress/kendo-react-excel-export";
import type { KendoGridProps } from "./KendoGrid.types";
import { columns, gridData } from "../../utils/data";
import { sampleChangeEvent } from "../../utils";

const meta = {
  title: "Components/KendoGrid",
  component: KendoGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  // args: {
  //   value: 0,
  // },
  // argTypes: {
  //   value: { control: "number" },
  // },
} satisfies Meta<typeof KendoGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutRowSelection = {
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    handleChangeEvent: fn(),
    sort: [{ field: "id", dir: "asc" }],
    excelRef: null,
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);

    return (
      <div className="p-8">
        <KendoGrid
          {...args}
          excelRef={ref}
          handleChangeEvent={sampleChangeEvent}
        />
      </div>
    );
  },
} satisfies Story;

export const WithSingleRowSelection = {
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    sort: [{ field: "id", dir: "asc" }],
    excelRef: null,
    rowSelectType: "single",
    handleChangeEvent: sampleChangeEvent,
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return (
      <div className="p-8">
        <KendoGrid {...args} excelRef={ref} />
      </div>
    );
  },
} satisfies Story;

export const WithMultiRowsSelection = {
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    sort: [{ field: "id", dir: "asc" }],
    excelRef: null,
    rowSelectType: "multiple",
    handleChangeEvent: sampleChangeEvent,
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return (
      <div className="p-8">
        <KendoGrid {...args} excelRef={ref} />
      </div>
    );
  },
} satisfies Story;
