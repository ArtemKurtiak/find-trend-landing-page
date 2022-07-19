import styled from "@emotion/styled";

import { ColorsEnum } from "../../enums/colors.enum";
import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";

export const HeaderPopUpWrapper = styled.div<{ isVisible: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${ColorsEnum.BLACK_OPACITY_0_5};
  transform: translateY(${(props) => props.isVisible ? '0px' : '-101vh'});
  transition: all .5s ease;
`;

export const HeaderPopUpContentWrapper = styled.div`
  background-color: ${ColorsEnum.BLACK};
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    padding: 2.5vh 2vh;
  }
  ${MediaQueriesEnum.MAX_TABLET} {
    padding: 50px 45px 50px 50px;
  }
`;

export const HeaderPopUpCloseTick = styled.img`
  width: 2em;
  height: 2em;
`;

export const HeaderPopUpItems = styled.div`
  display: flex;
  margin-top: 105px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
