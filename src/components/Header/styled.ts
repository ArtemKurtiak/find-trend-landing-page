import styled from "@emotion/styled";

import { ColorsEnum } from "../../enums/colors.enum";
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";
import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    display: none;
  }
  
  ${MediaQueriesEnum.TABLET} {
    display: block;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5em, 1.6em, 2.5em);

  ${MediaQueriesEnum.MOBILE} {
    display: none;
  }

  ${MediaQueriesEnum.SMALL_SCREEN} {
    display: flex;
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

  ${MediaQueriesEnum.MOBILE} {
    display: none;
  }

  ${MediaQueriesEnum.SMALL_SCREEN} {
    display: flex;
  }
`

export const HeaderLogin = styled.div`
  font-size: clamp(0.6em, 0.9em, 1.3em);
  color: ${ColorsEnum.WHITE};
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR};
  cursor: pointer;
`

export const HeaderBurgerMenu = styled.img`
  cursor: pointer;
  display: block;

  ${MediaQueriesEnum.MOBILE} {
    display: block;
  }

  ${MediaQueriesEnum.SMALL_SCREEN} {
    display: none;
  }
`