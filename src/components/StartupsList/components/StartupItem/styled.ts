import styled from "@emotion/styled";

import { MediaQueriesEnum } from "../../../../enums/mediaQueries.enum";
import { ColorsEnum } from "../../../../enums/colors.enum";

export const StartupItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 265px;
  height: 120px;
  background-color: ${ColorsEnum.START_UP_BACKGROUND};
  border-radius: 8px;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.1);
  }
  
  ${MediaQueriesEnum.MAX_TABLET} {
    width: 260px;
    height: 90px;
  }
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    width: 162px;
    height: 74px;
  }
`;

export const StartupItemImage = styled.img`
  zoom: 1;
  
  ${MediaQueriesEnum.TABLET} {
    zoom: 1;
  }
  ${MediaQueriesEnum.MOBILE} {
    zoom: 0.8;
  }
  ${MediaQueriesEnum.MAX_MOBILE} {
    zoom: 0.6;
  }
`