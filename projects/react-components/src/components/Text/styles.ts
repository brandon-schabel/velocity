import React from "react";
import styled, { css } from "styled-components";
import { getFontSize, variantsAndStyles } from "../../utils/variantsAndStyles";

// font-family: ${p => p.theme.fonts.primary};
const textStyles = css`
  font-weight: normal;
  text-decoration: none;
  margin-block-start: 0;
  margin-block-end: 0;

  ${getFontSize}
  ${variantsAndStyles()};
`;

export const StyledH1 = styled.h1`
  ${textStyles}
`;
export const StyledH2 = styled.h2`
  ${textStyles}
`;
export const StyledH3 = styled.h3`
  ${textStyles}
`;
export const StyledH4 = styled.h4`
  ${textStyles}
`;
export const StyledH5 = styled.h5`
  ${textStyles}
`;
export const StyledH6 = styled.h6`
  ${textStyles}
`;
export const StyledP = styled.p`
  ${textStyles}
`;
