import styled from "@emotion/styled";

import { ColorsEnum } from "../../enums/colors.enum";
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";
import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ColorsEnum.WHITE};
  padding: 30px 80px;
  
  ${MediaQueriesEnum.MAX_TABLET} {
    padding: 30px;
  } 
  ${MediaQueriesEnum.MAX_MOBILE} {
    padding: 80px;
    gap: 80px;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const FooterLogo = styled.img`
  width: 2em;
  height: 2em;
`;

export const FooterTitle = styled.div`
  font-family: ${FontFamiliesEnum.INTER_BOLD}, sans-serif;
  color: ${ColorsEnum.BLACK};
  font-size: 24px;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 40px;
  
  ${MediaQueriesEnum.MAX_TABLET} {
    gap: 30px;
  }
  ${MediaQueriesEnum.MAX_MOBILE} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinkItem = styled.div`
  cursor: pointer;
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  color: ${ColorsEnum.BLACK};
  font-size: 18px;
`;
