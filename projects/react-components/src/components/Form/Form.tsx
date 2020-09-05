import React from "react";
import styled from "styled-components";

import { variantsAndStyles } from "../../utils/variantsAndStyles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface FormProps extends responsiveStyleAndVariantsProps {}

const StyledForm = styled.form`
  border: none;
  ${variantsAndStyles()}
`;

// @ts-ignore
export const Form = (props: FormProps) => <StyledForm {...props} />;
