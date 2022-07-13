import { useState } from "react";
import { Tweet } from 'react-twitter-widgets';

import PageContent from "../../components/PageContent";
import Header from "../../components/Header";
import Hint from "../../components/Hint";
import Button from "../../components/Button";
import TabItem from "../../components/TabItem";
import StartupsList from "../../components/StartupsList";
import PlatformsList from "../../components/PlatformsList";
import Toggle from "../../components/Toggle";

import { Flex } from "../../components/Common/styled";
import {
    DribbleTab,
    FacebookTab,
    HomePageFirstMainPart,
    HomePageSubTitle,
    HomePageTitle,
    OpenNewTabsDescription,
    OpenNewTabsTabWrapper,
    OpenNewTabsTitle,
    PinterestTab,
    PlatformsTitle,
    PlatformsWrapper,
    PricingPeriodItem,
    PricingPlansPeriodsWrapper,
    PricingTitle,
    PricingWrapper,
    StartupsTitle,
    StartupsWrapper,
    SubscriptionPlansWrapper,
    TabsWrapper,
    TweetsWrapper,
    TwitterTab,
    YearlyPlanSavingHint
} from "./styled";
import { ColorsEnum } from "../../enums/colors.enum";
import { ISubscriptionPlan, PlanTypesEnum } from "./types";
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";

import Twitter from '../../assets/images/svg/twitter.svg';
import Pinterest from '../../assets/images/svg/pinterest.svg';
import Facebook from '../../assets/images/svg/facebook.svg';
import Dribble from '../../assets/images/svg/dribble.svg';
import Logo from '../../assets/images/svg/logo.svg';
import FirstPageBackground from '../../assets/images/png/home_background.png';
import SubscriptionPlan from "../../components/SubscriptionPlan";

const subscriptionPlans: ISubscriptionPlan[] = [
    {
        title: 'Personal',
        monthPrice: 8,
        yearPrice: 88,
        backgroundColor: ColorsEnum.WHITE,
        buttonColor: ColorsEnum.GREEN,
        preferences: [
            'Up to 5 page each group',
            'Up to 10 group page',
            '5 Days group page saved'
        ],
        description: 'Special first packet for all',
        buttonTextColor: ColorsEnum.BLACK
    },
    {
        title: 'Regular',
        monthPrice: 20,
        yearPrice: 220,
        backgroundColor: ColorsEnum.GREEN,
        buttonColor: ColorsEnum.BLACK,
        preferences: [
            'Up to 15 page each group',
            'Download page up to 20 page',
            'Up to 10 group page',
            '15 Days group page saved'
        ],
        description: 'Recommended for personal pro',
        buttonTextColor: ColorsEnum.WHITE
    },
    {
        title: 'Premium',
        monthPrice: 48,
        yearPrice: 550,
        backgroundColor: ColorsEnum.WHITE,
        buttonColor: ColorsEnum.GREEN,
        preferences: [
            'Unlimited group pages',
            'Unlimited download page',
            'Unlimited page each group',
            'Customize sorting group pages',
            'Customize group page name',
            '30 Days group page saved'
        ],
        description: 'Packet for Startup & Company',
        buttonTextColor: ColorsEnum.BLACK
    }
];

const Home = () => {
    const [selectedPlanPeriod, setSelectedPlanPeriod] = useState<PlanTypesEnum>(PlanTypesEnum.MONTH);

    const handlePlanTypeChange = () => {
        setSelectedPlanPeriod(selectedPlanPeriod === PlanTypesEnum.YEAR ? PlanTypesEnum.MONTH : PlanTypesEnum.YEAR);
    }

    return <>
        <PageContent
            backgroundImage={FirstPageBackground}
        >
            <Header/>
            <HomePageFirstMainPart>
                <HomePageTitle>
                    Minimize your tabs.
                </HomePageTitle>
                <HomePageTitle>
                    Find the trends!
                </HomePageTitle>
                <HomePageSubTitle>
                    Don’t let your computer memories consumes all of those browser tabs.
                </HomePageSubTitle>
                <HomePageSubTitle>
                    Findtrend  let you gathers all of your favorite website into one place.
                </HomePageSubTitle>
                <Flex
                    margin={'30px 0 0 0'}
                    gap={'18px'}
                    alignItems={'center'}
                    smallDesktopMargin
                >
                    <Hint
                        color={ColorsEnum.WHITE}
                        label={'Just click, and start your journey'}
                        arrowPosition={'left'}
                        forMobile={false}
                    />
                    <Button
                        fontFamily={FontFamiliesEnum.EFFRA_HEAVY}
                        label={'Get Started'}
                        bgColor={ColorsEnum.GREEN}
                        color={ColorsEnum.BLACK}
                    />
                    <Hint
                        color={ColorsEnum.WHITE}
                        label={'All research start from here'}
                        arrowPosition={'right'}
                        forMobile={false}
                    />
                </Flex>
                <TabsWrapper>
                    <TwitterTab>
                        <TabItem
                            label={'Cryptopunk - Search'}
                            icon={Twitter}
                        />
                    </TwitterTab>
                    <PinterestTab>
                        <TabItem
                            label={'Popular Design - Search'}
                            icon={Pinterest}
                        />
                    </PinterestTab>
                    <FacebookTab>
                        <TabItem
                            label={'Product Design - Search'}
                            icon={Facebook}
                        />
                    </FacebookTab>
                    <DribbleTab>
                        <TabItem
                            label={'Elon Musk - Search'}
                            icon={Dribble}
                        />
                    </DribbleTab>
                </TabsWrapper>
            </HomePageFirstMainPart>
        </PageContent>
        <PageContent
            backgroundColor={ColorsEnum.GREEN}
            maxHeight={'80vh'}
            display={'flex'}
            gap={'60px'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <OpenNewTabsTitle>
                Open new tabs is sh*t
            </OpenNewTabsTitle>
            <Flex
                gap={'24px'}
                alignItems={'center'}
            >
                <Hint
                    color={ColorsEnum.BLACK}
                    arrowPosition={'left'}
                    label={'Solution for discover a trend'}
                    forMobile={false}
                />
                <OpenNewTabsTabWrapper>
                    <TabItem
                        label={'Findtrend - Elon Musk'}
                        icon={Logo}
                    />
                </OpenNewTabsTabWrapper>
                <Hint
                    forMobile={false}
                    color={ColorsEnum.BLACK}
                    arrowPosition={'right'}
                    label={'You just need one tab now'}
                />
            </Flex>
            <OpenNewTabsDescription>
                A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.
            </OpenNewTabsDescription>
        </PageContent>
        <PageContent
            maxHeight={'fit-content'}
            backgroundColor={ColorsEnum.WHITE}
            height={'fit-content'}
        >
            <StartupsWrapper>
                <Flex>
                    <StartupsTitle
                        color={ColorsEnum.BLACK}
                    >
                        Findtrend helps you to increase your productivity and reduce your computer's memory load,
                        <StartupsTitle
                            color={ColorsEnum.LIGHT_GREY}
                        >
                            {' '} ann aplication that can fulfill your daily browsing needs.
                        </StartupsTitle>
                    </StartupsTitle>
                </Flex>
                <StartupsTitle
                    margin={'15vh 0 80px 0'}
                    color={ColorsEnum.BLACK}
                    align={'center'}
                >
                    Findtrend make +1000 Startup grow
                </StartupsTitle>
                <StartupsList />
            </StartupsWrapper>
        </PageContent>
        <PageContent
            backgroundColor={ColorsEnum.PLATFORMS_BACKGROUND}
            height={'fit-content'}
            maxHeight={'fit-content'}
            display={'flex'}
            justifyContent={'center'}
        >
            <PlatformsWrapper>
                <PlatformsTitle>All platform connect to Findtrend</PlatformsTitle>
                <PlatformsList />
                <TweetsWrapper>
                    <Tweet
                        tweetId={'1532715028742385668'}
                    />
                    <Tweet
                        tweetId={'1542645823435153408'}
                    />
                </TweetsWrapper>
                <Button
                    bgColor={ColorsEnum.BLACK}
                    color={ColorsEnum.WHITE}
                    label={'View more trend'}
                    fontFamily={FontFamiliesEnum.EFFRA_BOLD}
                />
            </PlatformsWrapper>
        </PageContent>
        <PageContent
            backgroundColor={ColorsEnum.BLACK}
            height={'fit-content'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            maxHeight={'fit-content'}
        >
            <PricingWrapper>
                <PricingTitle>
                    Get your best deal
                </PricingTitle>
                <PricingPlansPeriodsWrapper>
                    <PricingPeriodItem
                        isActive={selectedPlanPeriod === PlanTypesEnum.MONTH}
                        margin={'0 24px 0 0'}
                    >Month</PricingPeriodItem>
                    <Toggle
                        onChange={handlePlanTypeChange}
                        isActive={selectedPlanPeriod === PlanTypesEnum.YEAR}
                        activeBackgroundColor={ColorsEnum.WHITE}
                        inactiveBackgroundColor={ColorsEnum.WHITE}
                        activeIndicatorColor={ColorsEnum.GREEN}
                        inactiveIndicatorColor={ColorsEnum.GREEN}
                    />
                    <PricingPeriodItem
                        isActive={selectedPlanPeriod === PlanTypesEnum.YEAR}
                        margin={'0 15px 0 24px'}
                    >Year</PricingPeriodItem>
                    <YearlyPlanSavingHint>
                        <Hint
                            forMobile
                            color={ColorsEnum.WHITE}
                            arrowPosition={'right'}
                            label={'Save 10% per month'}
                        />
                    </YearlyPlanSavingHint>
                </PricingPlansPeriodsWrapper>
                <SubscriptionPlansWrapper>
                    {subscriptionPlans.map((planItem) => {
                        return <SubscriptionPlan
                            key={planItem.monthPrice}
                            selectedPeriod={selectedPlanPeriod}
                            {...planItem}
                        />
                    })}
                </SubscriptionPlansWrapper>
            </PricingWrapper>
        </PageContent>
    </>
}

export default Home;