import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import KendoGrid from "./KendoGrid";
import { useRef } from "react";
import type { ExcelExport } from "@progress/kendo-react-excel-export";
import type { KendoGridProps } from "./KendoGrid.types";
import { columns, gridData } from "../../utils/data";

const meta = {
  title: "Stories/KendoGrid",
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

export const Default = {
  args: {
    title: "Products",
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    rowsSelected: {},
    onHeaderSelectionChange: fn(),
    onSelectionChange: fn(),
    sort: [{ field: "id", dir: "asc" }],
    excelRef: null,
    rowSelectable: true,
  },
  render: (args: KendoGridProps) => {
    const ref = useRef<ExcelExport>(null);
    return (
      <div className="p-8 h-[24rem]">
        <KendoGrid {...args} excelRef={ref} />
      </div>
    );
  },
} satisfies Story;
