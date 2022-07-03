import {Tweet} from 'react-twitter-widgets';

import PageContent from "../../components/PageContent";
import Header from "../../components/Header";
import Hint from "../../components/Hint";
import Button from "../../components/Button";
import TabItem from "../../components/TabItem";
import StartupsList from "../../components/StartupsList";
import PlatformsList from "../../components/PlatformsList";

import {Flex} from "../../components/Common/styled";
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
    StartupsTitle,
    StartupsWrapper,
    TabsWrapper,
    TweetsWrapper,
    TwitterTab
} from "./styled";
import {ColorsEnum} from "../../enums/colors.enum";
import {FontFamiliesEnum} from "../../enums/fontFamilies.enum";

import Twitter from '../../assets/images/svg/twitter.svg';
import Pinterest from '../../assets/images/svg/pinterest.svg';
import Facebook from '../../assets/images/svg/facebook.svg';
import Dribble from '../../assets/images/svg/dribble.svg';
import Logo from '../../assets/images/svg/logo.svg';
import FirstPageBackground from '../../assets/images/png/home_background.png';

const Home = () => {
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
                />
                <OpenNewTabsTabWrapper>
                    <TabItem
                        label={'Findtrend - Elon Musk'}
                        icon={Logo}
                    />
                </OpenNewTabsTabWrapper>
                <Hint
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
    </>
}

export default Home;