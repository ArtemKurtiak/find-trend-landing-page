import styled from "@emotion/styled";

import { ColorsEnum } from "../../enums/colors.enum";
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";
import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    margin-bottom: 100px;
  }
`

export const HeaderLogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const HeaderLogo = styled.img`
  width: 2em;
  height: 2em;
`

export const HeaderTitle = styled.div`
  display: block;
  font-family: ${FontFamiliesEnum.INTER_BOLD}, sans-serif;
  font-size: clamp(1em, 1.3em, 2em);
  color: ${ColorsEnum.WHITE};

  ${MediaQueriesEnum.TABLET} {
    display: block;
  }
  ${MediaQueriesEnum.MAX_MOBILE} {
    display: none;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${MediaQueriesEnum.MAX_TABLET} {
    gap: 25px;
  }
  ${MediaQueriesEnum.MAX_MOBILE} {
    display: none;
  }
`

export const HeaderLinkItem = styled.div`
  color: ${ColorsEnum.WHITE};
  font-size: clamp(0.6em, 0.9em, 1.3em);
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  cursor: pointer;
`

export const HeaderAuthActions = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  
  ${MediaQueriesEnum.SMALL_SCREEN} {
    display: flex;
  }
  ${MediaQueriesEnum.MOBILE} {
    display: none;
  }
`

export const HeaderLogin = styled.div`
  font-size: clamp(0.6em, 0.9em, 1.3em);
  color: ${ColorsEnum.WHITE};
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR};
  cursor: pointer;
`

export const HeaderBurgerMenu = styled.img`
  display: none;
  cursor: pointer;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    display: block;
  }
`
