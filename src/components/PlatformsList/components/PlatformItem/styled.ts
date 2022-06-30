import styled from "@emotion/styled";

import { MediaQueriesEnum } from "../../../../enums/mediaQueries.enum";
import { IPlatformItemWrapperProps } from "./types";
import { ColorsEnum } from "../../../../enums/colors.enum";

export const PlatformItemWrapper = styled.div<IPlatformItemWrapperProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 124px;
  background-color: ${props => props.active ? ColorsEnum.GREEN : ColorsEnum.WHITE};
  border-radius: 8px;
  transition: 0.5s all;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    width: 64px;
    height: 64px;
  }
`;

export const PlatformItemIcon = styled.img`
  width: 60px;
  height: 60px;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.2);
  }
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    width: 30px;
    height: 30px;
  }
`;