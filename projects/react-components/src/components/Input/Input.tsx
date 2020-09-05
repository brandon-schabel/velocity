import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";
import { responsiveStyleAndVariantsProps, fontSize } from "../sharedPropTypes";

export interface InputProps
  extends InputHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  fontSize: fontSize;
}

export const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};
