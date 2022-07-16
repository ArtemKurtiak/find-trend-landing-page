import styled from "@emotion/styled";

import { MediaQueriesEnum } from "../../enums/mediaQueries.enum";
import { ISubscriptionPlanWrapperProps } from "./types";
import {FontFamiliesEnum} from "../../enums/fontFamilies.enum";
import {ColorsEnum} from "../../enums/colors.enum";

export const SubscriptionPlanWrapper = styled.div<ISubscriptionPlanWrapperProps>`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  justify-content: space-between;
  max-height: 640px;
  width: 360px;
  height: 640px;
  padding: 32px;
  background-color: ${(props) => props.backgroundColor};
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    padding: 24px 30px;
    width: calc(100vw - 80px);
    height: 620px;
  }
`;

export const SubscriptionPlanTitle = styled.div`
  font-family: ${FontFamiliesEnum.EFFRA_BOLD}, sans-serif;
  font-size: 36px;
  text-align: left;
  color: ${ColorsEnum.BLACK};
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    font-size: 32px;
  }
`;

export const SubscriptionPlanDescription = styled.div`
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  font-size: 18px;
  color: ${ColorsEnum.BLACK};
  margin-top: 8px;
  text-align: left;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    margin-top: 14px;
  }
`;

export const SubscriptionPlanDivider = styled.div`
  width: 100%;
  background-color: ${ColorsEnum.BLACK_OPACITY_0_2};
  height: 1px;
  margin-top: 32px;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    margin-top: 24px;
  }
`;

export const SubscriptionPlanPriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 32px;
`;

export const SubscriptionPlanPrice = styled.div`
  font-family: ${FontFamiliesEnum.EFFRA_BOLD}, sans-serif;
  font-size: 64px;
  color: ${ColorsEnum.BLACK};
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    font-size: 60px;
  }
`;

export const SubscriptionPlanPeriod = styled.div`
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  font-size: 18px;
  color: ${ColorsEnum.BLACK};
  margin-bottom: 8px;
  text-transform: capitalize;
`;

export const SubscriptionPlanPreferencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 24px;
  
  ${MediaQueriesEnum.MAX_MOBILE} {
    margin-top: 24px;
  }
`;

export const SubscriptionPlanPreferenceItem = styled.div`
  font-family: ${FontFamiliesEnum.EFFRA_REGULAR}, sans-serif;
  font-size: 18px;
  color: ${ColorsEnum.BLACK};
  text-align: left;
`;
