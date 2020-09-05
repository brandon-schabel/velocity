import { CSSProp } from "styled-components";

export interface fontSize {
  mob: string;
  tab: string;
  desk: string;
  lgDesk: string;
}

export interface responsiveStyleAndVariantsProps {
  themeStyles?: CSSProp | CSSProp[];
  mobStyles?: CSSProp | CSSProp[];
  tabStyles?: CSSProp | CSSProp[];
  deskStyles?: CSSProp | CSSProp[];
  lgDeskStyles?: CSSProp | CSSProp[];
}
