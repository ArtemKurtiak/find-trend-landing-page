import styled from "@emotion/styled";

import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";
import { ColorsEnum } from "../../enums/colors.enum";


export const TabItemWrapper = styled.div`
  height: 65px;
  width: 300px;
  display: flex;
  gap: 13px;
  align-items: center;
  padding-left: 40px;
  background-color: ${ColorsEnum.DARK_GREY};
  position: relative;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  
  @media (max-width: 330px) {
    width: 250px;
  }
`

export const TabItemLabel = styled.div`
  display: inline-block;
  font-size: 19px;
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  color: ${ColorsEnum.WHITE};
  max-width: 213px;
  overflow: hidden;
  word-break: keep-all;
`

export const CloseTabItemWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  height: 100%;
  width: 60px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 23px;
  background: linear-gradient(270deg, ${ColorsEnum.DARK_GREY} 53.65%, rgba(24, 24, 24, 0.8) 100%);
`

export const CloseTabTick = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`