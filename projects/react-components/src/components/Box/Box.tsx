import React, {HtmlHTMLAttributes, ReactNode } from "react";

import { StyledBox } from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface boxProps
  extends HtmlHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  children?: React.ReactNode
}

export const Box = (props: boxProps) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};
