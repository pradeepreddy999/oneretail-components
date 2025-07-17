import type { Meta, StoryObj } from "@storybook/react-vite";
import MultiSelectSearchTree from "./MultiSelectSearchTree";

const meta = {
  title: "Stories/MultiSelectSearchTree",
  component: MultiSelectSearchTree,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MultiSelectSearchTree>;

export default meta;

type Story = StoryObj<typeof meta>;

const data = [
  {
    text: "Furniture",
    id: 1,
    items: [
      { text: "Tables & Chairs", id: 2 },
      { text: "Sofas", id: 3 },
      { text: "Occasional Furniture", id: 4 },
    ],
  },
  {
    text: "Decor",
    id: 5,
    items: [
      { text: "Bed Linen", id: 6 },
      { text: "Curtains & Blinds", id: 7 },
      { text: "Carpets", id: 8 },
    ],
  },
];

export const Default = {
  args: {
    multiSelectBy: "view By",
    dataItemKey: "id",
    textField: "text",
    data: data as [],
    selected: [],
    isFilterable: true,
  },
} satisfies Story;
