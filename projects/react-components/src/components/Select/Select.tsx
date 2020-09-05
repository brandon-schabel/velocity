import React, { ReactNode } from "react";
import { StyledSelect } from "./styles";
import { responsiveStyleAndVariantsProps, fontSize } from "../sharedPropTypes";

export interface SelectProps extends responsiveStyleAndVariantsProps {
  fontSize?: fontSize;
  children?: ReactNode;
}

export const Select = (props: SelectProps) => {
  return <StyledSelect {...props}>{props.children}</StyledSelect>;
};
