import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { StyledButton } from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";
import "./Button.styl";

export interface ButtonProps
  extends ButtonHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props} className="vel-button">
      {props.children}
    </StyledButton>
  );
};
