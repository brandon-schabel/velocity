import React, { HtmlHTMLAttributes, ReactChildren } from "react";

import { StyledTextArea } from "./styles";
import { fontSize, responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface TextAreaProps
  extends HtmlHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  fontSize: fontSize;
  children: ReactChildren;
}

export const TextArea = ({
  fontSize = {
    mob: "16px",
    tab: "24px",
    desk: "32px",
    lgDesk: "40px"
  },
  children,
  ...props
}: TextAreaProps) => {
  return (
    // @ts-ignore
    <StyledTextArea fontSize={fontSize} {...props}>
      {children}
    </StyledTextArea>
  );
};
