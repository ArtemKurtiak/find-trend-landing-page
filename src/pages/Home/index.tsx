import PageContent from "../../components/PageContent";
import Header from "../../components/Header";

import FirstPageBackground from '../../assets/images/png/home_background.png';

import Hint from "../../components/Hint";
import Button from "../../components/Button";
import {Flex} from "../../components/Common/styled";
import {
    DribbleTab,
    FacebookTab,
    HomePageFirstMainPart,
    HomePageSubTitle,
    HomePageTitle, OpenNewTabsDescription,
    OpenNewTabsTabWrapper,
    OpenNewTabsTitle,
    PinterestTab,
    TabsWrapper,
    TwitterTab
} from "./styled";
import TabItem from "../../components/TabItem";
import {ColorsEnum} from "../../enums/colors.enum";
import {FontFamiliesEnum} from "../../enums/fontFamilies.enum";

import Twitter from '../../assets/images/svg/twitter.svg';
import Pinterest from '../../assets/images/svg/pinterest.svg';
import Facebook from '../../assets/images/svg/facebook.svg';
import Dribble from '../../assets/images/svg/dribble.svg';
import Logo from '../../assets/images/svg/logo.svg';

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
                >
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
    </>
}

export default Home;