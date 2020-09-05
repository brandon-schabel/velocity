import React, {ReactNode}  from "react";
import { StyledRadioButton } from "./styles";

import { responsiveStyleAndVariantsProps, fontSize } from "../sharedPropTypes";

export interface RadioButtonProps extends responsiveStyleAndVariantsProps {
  fontSize?: fontSize;
  children?: ReactNode;
  index: string | number;
  label?: string | null;
  value: any;
  additionalValues?: any;
  onRadioClick?: (
    e: React.MouseEvent<HTMLInputElement>,
    index: number | string,
    additionalValues: any
  ) => void;
  onRadioChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number | string,
    additionalValues: any
  ) => void;
  checked?: boolean;
}

export const RadioButton = ({
  children,
  index = 0,
  label = null,
  value,
  additionalValues = null, //can be use if you prefer to pass in an object/array as the value
  onRadioClick = () => {},
  onRadioChange = () => {},
  checked = false,
  ...props
}: RadioButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    onRadioClick(e, index, additionalValues);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onRadioChange(e, index, additionalValues);
  };
  return (
    <React.Fragment>
      <label>
        <StyledRadioButton
          type="radio"
          checked={checked}
          value={value}
          onClick={handleClick}
          onChange={handleOnChange}
          {...props}
        />
        {label && label}
        {children}
      </label>
      <br />
    </React.Fragment>
  );
};
