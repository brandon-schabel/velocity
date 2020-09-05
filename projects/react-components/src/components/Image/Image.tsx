import React, { ImgHTMLAttributes, ReactChildren} from "react";

import { StyledImage } from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface ImageProps
  extends ImgHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  children?: ReactChildren
}

export const Image = (props: ImageProps) => {
  return <StyledImage {...props}>{props.children}</StyledImage>;
};
