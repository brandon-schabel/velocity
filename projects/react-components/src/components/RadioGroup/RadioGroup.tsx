import React, { useState, ReactChildren, ReactNode } from "react";
import { StyledRadioGroup } from "./styles";
import { RadioButton } from "../RadioButton";
import { generateKey } from "../../utils/generateKey";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface radioOptionType {
  value: any;
  label: string | number;
  additionValues: any;
}

export interface RadioGroupProps extends responsiveStyleAndVariantsProps {
  radioOptions: radioOptionType[];
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number | string,
    additionalValues: any
  ) => void;
  children: ReactChildren;
  LegendTextComponent: ReactNode;
  radioButtonVariants: responsiveStyleAndVariantsProps;
}

export const RadioGroup = ({
  children,
  LegendTextComponent,
  radioOptions = [],
  onChange = () => {},
  radioButtonVariants,
  ...props
}: RadioGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleRadioChange = (e: any, index: number, additionalValues: any) => {
    setSelectedIndex(index);
    onChange(e, index, additionalValues);
  };

  const renderRadioButtons = () => {
    return radioOptions.map((option: any, index: number) => (
      <RadioButton
        key={generateKey("radio")}
        index={index}
        value={option.value}
        label={option.label}
        additionalValues={option.additionalValues}
        onRadioChange={handleRadioChange}
        checked={index === selectedIndex}
        {...radioButtonVariants}
      />
    ));
  };
  // @ts-ignore
  return (
    <StyledRadioGroup {...props} role="radiogroup">
      {/*
        // @ts-ignore */}
      <legend>{LegendTextComponent && <LegendTextComponent />}</legend>

      {radioOptions && renderRadioButtons()}
      {children}
    </StyledRadioGroup>
  );
};
