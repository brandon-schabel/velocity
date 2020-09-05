import React, { HTMLAttributes, ReactNode } from "react";

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledP
} from "./styles";

import { fontSize } from "../sharedPropTypes";

export interface TextProps extends HTMLAttributes<any> {
  tag: string;
  fontSize?: fontSize;
  children?: ReactNode;
}

export const Text = ({
  fontSize = {
    mob: "16px",
    tab: "24px",
    desk: "32px",
    lgDesk: "40px"
  },
  tag = "h1",
  children,
  ...props
}: TextProps) => {
  switch (tag) {
    case "h1":
      return (
        // @ts-ignore
        <StyledH1 fontSize={fontSize} {...props}>
          {children}
        </StyledH1>
      );
    case "h2":
      return (
        // @ts-ignore
        <StyledH2 fontSize={fontSize} {...props}>
          {children}
        </StyledH2>
      );
    case "h3":
      return (
        // @ts-ignore
        <StyledH3 fontSize={fontSize} {...props}>
          {children}
        </StyledH3>
      );
    case "h4":
      return (
        // @ts-ignore
        <StyledH4 fontSize={fontSize} {...props}>
          {children}
        </StyledH4>
      );
    case "h5":
      return (
        // @ts-ignore
        <StyledH5 fontSize={fontSize} {...props}>
          {children}
        </StyledH5>
      );
    case "h6":
      return (
        // @ts-ignore
        <StyledH6 fontSize={fontSize} {...props}>
          {children}
        </StyledH6>
      );
    case "p":
      return (
        // @ts-ignore
        <StyledP fontSize={fontSize} {...props}>
          {children}
        </StyledP>
      );
    default:
      return (
        // @ts-ignore
        <StyledH2 fontSize={fontSize} {...props}>
          {children}
        </StyledH2>
      );
  }
};
