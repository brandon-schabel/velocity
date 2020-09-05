import React, {ReactChildren} from "react";
import { StyledOption } from "./styles";
import { responsiveStyleAndVariantsProps, fontSize } from "../sharedPropTypes";

export interface OptionProps extends responsiveStyleAndVariantsProps {
  fontSize?: fontSize;
  children: ReactChildren;
}

export const Option = (props: OptionProps) => {
  return <StyledOption {...props}>{props.children}</StyledOption>;
};
