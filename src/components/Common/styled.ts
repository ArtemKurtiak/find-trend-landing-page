import styled from "@emotion/styled";
import {FlexPropsType} from "./types";


export const Flex = styled.div<FlexPropsType>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap};
  margin: ${props => props.margin};
`