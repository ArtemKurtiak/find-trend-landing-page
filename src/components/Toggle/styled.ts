import styled from "@emotion/styled";

import { IToggleIndicatorProps, IToggleWrapperProps } from "./types";
import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";

export const ToggleWrapper = styled.div<IToggleWrapperProps>`
  display: flex;
  cursor: pointer;
  width: 88px;
  border-radius: 99px;
  padding: 8px;
  background-color: ${props => props.isActive ? props.activeColor : props.inactiveColor};
`;

export const ToggleIndicator = styled.div<IToggleIndicatorProps>`
  transition: 0.4s all;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? props.activeColor : props.inactiveColor};
  transform: ${props => props.isActive ? 'translateX(52px)' : 'translateX(0px)'};
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    width: 28px;
    height: 28px;
    transform: ${props => props.isActive ? 'translateX(60px)' : 'translateX(0px)'};
  }
`;