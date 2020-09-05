import React, {HtmlHTMLAttributes, ReactChildren } from "react";

import { StyledBox } from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface boxProps
  extends HtmlHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  children?: ReactChildren
}

export const Box = (props: boxProps) => {
  return <StyledBox {...props}>{props.children}</StyledBox>;
};
