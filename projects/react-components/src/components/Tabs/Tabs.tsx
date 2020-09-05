import React, { HtmlHTMLAttributes, ReactNode, useState } from "react";
import { css } from "styled-components";

import { StyledTabs } from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";
import { Button, Box } from "../index";
import './tabs.styl'

export interface tabsProps
  extends HtmlHTMLAttributes<any>,
    responsiveStyleAndVariantsProps {
  children?: React.ReactNode;
  tabsConfig: any;
}

const boxHeaderStyles = css`
  display: flex;
  flex-direction: row;
`;

const selectedTabStyles = css`
  background-color: red;
`;

export const Tabs = ({ children, tabsConfig, ...rest }: tabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const renderTabHeader = () => {
    return (
      tabsConfig &&
      tabsConfig.map((currConfig:any, index: number) => {
        return (
          <Button
            mobStyles={[index === selectedTab ? selectedTabStyles : null]}
            onClick={() => handleTabChange(index)}
          >
            {currConfig.tabName}
          </Button>
        );
      })
    );
  };

  const renderTabContent = () => {
    if (tabsConfig && tabsConfig[selectedTab]) {
      return tabsConfig[selectedTab].component;
    }
  };

  return (
    <StyledTabs {...rest}>
      <Box className="tabs-header">Header {renderTabHeader()}</Box>
      <Box>{renderTabContent()}</Box>
    </StyledTabs>
  );
};
