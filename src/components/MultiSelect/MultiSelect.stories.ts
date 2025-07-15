import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import MultiSelect from "./MultiSelect";
import { columns } from "../../utils/data";

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
    data: columns.map((x) => x.field),
    selected: [],
    isFilterable: true,
    handleFilterChange: fn(),
    handleFilterSearch: fn(),
  },
} satisfies Story;
