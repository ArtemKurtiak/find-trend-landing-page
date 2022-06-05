import styled from "@emotion/styled";

import {FontFamiliesEnum} from "../../enums/fontFamilies.enum";
import {ColorsEnum} from "../../enums/colors.enum";
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

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  padding-left: 100px;
  padding-bottom: 20px;

  ${MediaQueriesEnum.MAX_MOBILE} {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const TwitterTab = styled.div`
  transform: rotate(-4deg) translateX(50px);
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MAX_MOBILE} {
    transform: rotate(-4deg);
  }
`

export const PinterestTab = styled.div`
  transform: rotate(2deg) translateX(-40px) translateY(40px);
  z-index: 4;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MAX_MOBILE} {
    transform: rotate(2deg);
  }
`

export const FacebookTab = styled.div`
  transform: rotate(-4deg) translateX(-110px) translateY(-25px);
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MAX_MOBILE} {
    transform: rotate(-4deg);
  }
`;

export const DribbleTab = styled.div`
  transform: rotate(2deg) translateX(-190px) translateY(40px);
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ${MediaQueriesEnum.MAX_MOBILE} {
    transform: rotate(2deg);
  }
`