import React from "react";
import { Button } from "../components";

export default {
  title: "Button",
  component: Button
};

export const Component = () => {
  return (
    <Button onClick={() => console.log("Button Clicked")} >Click Me Plz</Button>
  );
};
