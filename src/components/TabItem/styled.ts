import styled from "@emotion/styled";

import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";
import { ColorsEnum } from "../../enums/colors.enum";


export const TabItemWrapper = styled.div`
  height: 65px;
  width: 300px;
  display: flex;
  gap: 13px;
  align-items: center;
  justify-content: center;
  background-color: ${ColorsEnum.DARK_GREY};
  position: relative;
`

export const TabItemLabel = styled.div`
  font-size: 20px;
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  color: ${ColorsEnum.WHITE};
  max-width: 213px;
  overflow: hidden;
`

export const CloseTabItemWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  height: 100%;
  width: 85px;
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