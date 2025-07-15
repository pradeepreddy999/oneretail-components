import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import MultiSelect from "./MultiSelect";
import { columns, gridData } from "../../utils/data";

const meta = {
  title: "Stories/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    data: gridData as [],
    columns: columns,
    handleExportComplete: fn(),
    sort: [{ field: "id", dir: "asc" }],
    excelRef: null,
  },
} satisfies Story;
