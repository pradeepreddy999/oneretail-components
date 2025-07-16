import type { Meta, StoryObj } from "@storybook/react-vite";
import Grid from "./Grid";
import type { GridProps } from "./Grid.types";
import { columns, gridData } from "../../utils/data";

const meta = {
  title: "Stories/Grid",
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
    isGridRowSelectable: true,
  },
  render: (args: GridProps) => {
    return (
      <div className="p-8 h-[24rem]">
        <Grid {...args} />
      </div>
    );
  },
} satisfies Story;
