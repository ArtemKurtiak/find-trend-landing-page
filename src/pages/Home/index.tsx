import PageContent from "../../components/PageContent";
import Header from "../../components/Header";

import FirstPageBackground from '../../assets/images/png/home_background.png';

import Hint from "../../components/Hint";
import Button from "../../components/Button";
import { Flex } from "../../components/Common/styled";
import { HomePageFirstMainPart, HomePageSubTitle, HomePageTitle } from "./styled";
import { ColorsEnum } from "../../enums/colors.enum";
import { FontFamiliesEnum } from "../../enums/fontFamilies.enum";

import Twitter from '../../assets/images/svg/twitter.svg';
import TabItem from "../../components/TabItem";

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
                <TabItem
                    label={'Cryptopunk - Search'}
                    icon={Twitter}
                />
            </HomePageFirstMainPart>
        </PageContent>
    </>
}

export default Home;