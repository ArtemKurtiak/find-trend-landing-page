import styled from "@emotion/styled";

import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";
import { ColorsEnum } from "../../enums/colors.enum";
import {MediaQueriesEnum} from "../../enums/mediaQueries.enum";

export const HomePageFirstMainPart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const HomePageTitle = styled.div`
  text-align: center;
  font-family: ${FontFamiliesEnum.EFFRA_HEAVY}, sans-serif;
  color: ${ColorsEnum.WHITE};
  
  ${MediaQueriesEnum.MOBILE} {
    font-size: 36px;
  }
  ${MediaQueriesEnum.TABLET} {
    font-size: 72px;
  }
`

export const HomePageSubTitle = styled.div`
  text-align: center;
  color: ${ColorsEnum.GREY};
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  line-height: 30px;
  padding-left: 30px;
  padding-right: 30px;

  ${MediaQueriesEnum.MOBILE} {
    font-size: 14px;
  }
  ${MediaQueriesEnum.TABLET} {
    font-size: 18px;
  }
`