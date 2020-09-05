import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { StyledButton } from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface ButtonProps
  extends ButtonHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
