// src/components/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button", // Sidebar label
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "radio",
      options: ["blue", "green", "red"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Blue: Story = {
  args: {
    label: "Blue Button",
    variant: "blue",
    onClick: () => alert("Blue clicked!"),
  },
};

export const Green: Story = {
  args: {
    label: "Green Button",
    variant: "green",
    onClick: () => alert("Green clicked!"),
  },
};

export const Red: Story = {
  args: {
    label: "Red Button",
    variant: "red",
    onClick: () => alert("Red clicked!"),
  },
};
