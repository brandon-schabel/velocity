import React, { ButtonHTMLAttributes, ReactChildren } from "react";

import { StyledButton } from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface ButtonProps
  extends ButtonHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  children?: ReactChildren;
}

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
