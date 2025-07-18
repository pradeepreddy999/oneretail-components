import type { Meta, StoryObj } from "@storybook/react-vite";
import Grid from "./Grid";
import { columns, gridData } from "../../utils/data";
import { sampleChangeEvent } from "../../utils";

const meta = {
  title: "Components/Grid",
  component: Grid,
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
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    viewBy: [] as string[],
    viewByOptions: [] as string[],
    metrics: [] as string[],
    metricOptions: [] as string[],
    title: "Products",
    data: gridData as [],
    columns: columns,
    sort: [{ field: "id", dir: "asc" }],
    rowSelectType: "multiple",
    handleChangeEvent: sampleChangeEvent,
  },
} satisfies Story;
