import React, { ReactNode } from "react";
import { StyledOption } from "./styles";
import { responsiveStyleAndVariantsProps, fontSize } from "../sharedPropTypes";

export interface OptionProps extends responsiveStyleAndVariantsProps {
  fontSize?: fontSize;
  children: ReactNode;
}

export const Option = (props: OptionProps) => {
  return <StyledOption {...props}>{props.children}</StyledOption>;
};
