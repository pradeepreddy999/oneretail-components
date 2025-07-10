import type { Meta, StoryObj } from "@storybook/react-vite";
import Counter from "./Counter";

const meta = {
  title: "Examples/Counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    value: 0,
  },
  argTypes: {
    value: { control: "number" },
  },
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InitializeBy10: Story = {
  args: {
    value: 7,
  },
};
