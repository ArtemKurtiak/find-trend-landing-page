import styled from "@emotion/styled";

import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";
import { PageContentWrapperProps } from "./types";

export const PageContentWrapper = styled.div<PageContentWrapperProps>`
  padding: 3.9vh 11vh;
  background-image: url(${props => props.backgroundImage});
  background-color: ${props => props.backgroundColor};
  background-size: cover;
  height: 100vh;
  box-sizing: border-box;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    padding: 2.5vh 2vh;
  } 
  
  ${MediaQueriesEnum.TABLET} {
    padding: 3.9vh 11vh;
  }
`