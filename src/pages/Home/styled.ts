import styled from "@emotion/styled";

import {FontFamiliesEnum} from "../../enums/fontFamilies.enum";
import {ColorsEnum} from "../../enums/colors.enum";
import {MediaQueriesEnum} from "../../enums/mediaQueries.enum";
import {StartupsTitleProps} from "./types";

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

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  padding-left: 100px;
  padding-bottom: 20px;

  ${MediaQueriesEnum.MOBILE} {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
  ${MediaQueriesEnum.SMALL_DESKTOP} {
    flex-direction: row;
    padding-left: 100px;
  }
`;

export const TwitterTab = styled.div`
  transform: rotate(-4deg) translateX(50px);
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MOBILE} {
    transform: rotate(-4deg);
  }
  ${MediaQueriesEnum.SMALL_DESKTOP} {
    transform: rotate(-4deg) translateX(50px);
  }
`

export const PinterestTab = styled.div`
  transform: rotate(2deg) translateX(-40px) translateY(40px);
  z-index: 4;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MOBILE} {
    transform: rotate(2deg);
  }
  ${MediaQueriesEnum.SMALL_DESKTOP} {
    transform: rotate(2deg) translateX(-40px) translateY(40px);
  }
`

export const FacebookTab = styled.div`
  transform: rotate(-4deg) translateX(-110px) translateY(-25px);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MOBILE} {
    transform: rotate(-4deg);
  }
  ${MediaQueriesEnum.SMALL_DESKTOP} {
    transform: rotate(-4deg) translateX(-110px) translateY(-25px);
  }
`;

export const DribbleTab = styled.div`
  transform: rotate(2deg) translateX(-190px) translateY(40px);
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MOBILE} {
    transform: rotate(2deg);
  }
  ${MediaQueriesEnum.SMALL_DESKTOP} {
    transform: rotate(2deg) translateX(-190px) translateY(40px);
  }
`

export const OpenNewTabsTitle = styled.div`
  font-family: ${FontFamiliesEnum.EFFRA_HEAVY}, sans-serif;
  color: ${ColorsEnum.BLACK};
  text-align: center;
  font-size: 72px;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    font-size: 36px;
  }
`;

export const OpenNewTabsTabWrapper = styled.div`
  padding: 60px 80px;
  background-color: ${ColorsEnum.WHITE};
  border-radius: 16px;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    padding: 7px;
    border-radius: 5px;
  }
`;

export const OpenNewTabsDescription = styled.div`
  font-size: 20px;
  text-align: center;
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  color: ${ColorsEnum.BLACK};
  max-width: 660px;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    max-width: 280px;
  }
`;

export const StartupsTitle = styled.div<StartupsTitleProps>`
  display: inline;
  font-family: ${FontFamiliesEnum.EFFRA_HEAVY}, sans-serif;
  font-size: 64px;
  color: ${props => props.color};
  max-width: 75vw;
  margin: ${props => props.margin};
  text-align: ${props => props.align};
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    font-size: 35px;
  }
`;

export const StartupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.9vh 8vh;
  
  ${MediaQueriesEnum.MAX_TABLET} {
    padding: 4vh 0 4vh 0;
  }
`;