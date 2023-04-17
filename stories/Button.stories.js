import React from "react";
import { Children } from "react/cjs/react.production.min";
import Button from "../component/Button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md","lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const ButtonBtn = Template.bind({});
ButtonBtn.args = {
  text: Children,
  variant: "secondary",
  size: "sm",
};
