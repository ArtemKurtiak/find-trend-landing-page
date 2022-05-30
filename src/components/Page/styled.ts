import styled from "@emotion/styled";
import {MediaQueriesEnum} from "../../enums/mediaQueries.enum";

export const PageWrapper = styled.div`
  padding: 3.9vh 11vh;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    padding: 2.5vh 2vh;
  } 
  
  ${MediaQueriesEnum.TABLET} {
    padding: 3.9vh 11vh;
  }
`