import styled from "@emotion/styled";

import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";
import { PageContentWrapperProps } from "./types";

export const PageContentWrapper = styled.div<PageContentWrapperProps>`
  display: ${props => props.display || 'block'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  gap: ${props => props.gap};
  padding: 3.9vh 11vh;
  background-image: url(${props => props.backgroundImage});
  background-color: ${props => props.backgroundColor};
  background-size: cover;
  height: ${props => props.height || '100vh'};
  box-sizing: border-box;
  max-height: ${props => props.maxHeight || '100vh'};
  overflow: hidden;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    padding: 2.5vh 2vh;
    height: fit-content;
    min-height: ${props => props.maxHeight || '100vh'};
  } 
  
  ${MediaQueriesEnum.TABLET} {
    padding: 50px;
  }
`;
