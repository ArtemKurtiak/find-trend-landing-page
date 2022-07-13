import React from 'react';

import {
    SubscriptionPlanDescription,
    SubscriptionPlanDivider,
    SubscriptionPlanPeriod,
    SubscriptionPlanPreferenceItem,
    SubscriptionPlanPreferencesWrapper,
    SubscriptionPlanPrice,
    SubscriptionPlanPriceWrapper,
    SubscriptionPlanTitle,
    SubscriptionPlanWrapper
} from './styled';
import {ISubscriptionPlanWrapper} from "./types";
import {Flex} from '../Common/styled';
import {FontFamiliesEnum} from "../../enums/fontFamilies.enum";

import Button from "../Button";

import Tick from '../../assets/images/svg/tick.svg';
import {PlanTypesEnum} from "../../pages/Home/types";

const SubscriptionPlan: React.FC<ISubscriptionPlanWrapper> = ({
    monthPrice,
    preferences,
    backgroundColor,
    buttonColor,
    title,
    description,
    selectedPeriod,
    buttonTextColor,
    yearPrice
}) => {
    return <SubscriptionPlanWrapper
        backgroundColor={backgroundColor}
    >
        <div>
            <SubscriptionPlanTitle>
                {title}
            </SubscriptionPlanTitle>
            <SubscriptionPlanDescription>
                {description}
            </SubscriptionPlanDescription>
            <SubscriptionPlanDivider/>
            <SubscriptionPlanPriceWrapper>
                <SubscriptionPlanPrice>
                    ${selectedPeriod === PlanTypesEnum.MONTH ? monthPrice : yearPrice}
                </SubscriptionPlanPrice>
                <SubscriptionPlanPeriod>
                    /{selectedPeriod}
                </SubscriptionPlanPeriod>
            </SubscriptionPlanPriceWrapper>
            <SubscriptionPlanPreferencesWrapper>
                {preferences.map((preferenceItem) => {
                    return <Flex
                        key={preferenceItem}
                        gap={'12px'}
                    >
                        <img
                            src={Tick}
                            alt={'tick'}
                            width={19}
                            height={19}
                        />
                        <SubscriptionPlanPreferenceItem>
                            {preferenceItem}
                        </SubscriptionPlanPreferenceItem>
                    </Flex>
                })}
            </SubscriptionPlanPreferencesWrapper>
        </div>
        <Button
            bgColor={buttonColor}
            color={buttonTextColor}
            label={'Start Free Trial'}
            fontFamily={FontFamiliesEnum.EFFRA_BOLD}
        />
    </SubscriptionPlanWrapper>
}

export default SubscriptionPlan;