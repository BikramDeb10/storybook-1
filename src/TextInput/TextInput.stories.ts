import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  // component information
  component: TextInput,
  title: "UI/TextInput",
};

export const FirstComponent: StoryObj<typeof TextInput> = {
  args: {
    label: "Name",
    placeholder: "Enter lastname",
  },
};

export const SecondComponent: StoryObj<typeof TextInput> = {
  args: {
    label: "Last name",
    placeholder: "Enter lastname",
  },
};

export default meta;
