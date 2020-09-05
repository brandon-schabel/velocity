import styled from "styled-components";
import { up } from "styled-breakpoints";

import { variantsAndStyles } from "../../utils/variantsAndStyles";
import { css } from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  top: 0;
  left: 0;
  ${variantsAndStyles()}
`;

export const ModalPositioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;

  position: relative;
  justify-content: center;
  align-items: center;

  ${up("tablet")} {
    height: 400px;
    width: 600px;
    border-radius: 4px;
    border: 2px solid rgb(0, 0, 0, 0.3);
  }

  ${up("desktop")} {
    height: 600px;
    width: 900px;
  }
  ${variantsAndStyles()}
`;
export const buttonPosition = css`
  position: absolute;
  right: 10px;
  top: 10px;
`;
