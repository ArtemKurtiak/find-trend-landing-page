import styled from "@emotion/styled";

import { FlexPropsType } from "./types";

export const Flex = styled.div<FlexPropsType>`
  display: flex;
  position: relative;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap};
  flex-wrap: ${props => props.wrap};
  width: ${props => props.width};
  margin: ${props => props.margin};
  
  @media (max-width: 1212px) {
    margin: ${props => props.smallDesktopMargin ? props.margin : '0'};
  }
`