import {
    HeaderAuthActions, HeaderBurgerMenu,
    HeaderLinkItem,
    HeaderLinks, HeaderLogin,
    HeaderLogo,
    HeaderLogoWrapper,
    HeaderTitle,
    HeaderWrapper
} from "./styled";
import Button from "../Button";
import { ColorsEnum } from "../../enums/colors.enum";

import Logo from '../../assets/images/svg/logo.svg';
import BurgerMenu from '../../assets/images/svg/burger_menu.svg';

const Header = () => {
    return <HeaderWrapper>
        <HeaderLogoWrapper>
            <HeaderLogo
                src={Logo}
                alt={'logo'}
            />
            <HeaderTitle>
                Findtrend
            </HeaderTitle>
        </HeaderLogoWrapper>
        <HeaderLinks>
            <HeaderLinkItem>
                About
            </HeaderLinkItem>
            <HeaderLinkItem>
                How it work
            </HeaderLinkItem>
            <HeaderLinkItem>
                Pricing
            </HeaderLinkItem>
            <HeaderLinkItem>
                Solution
            </HeaderLinkItem>
            <HeaderLinkItem>
                Features
            </HeaderLinkItem>
        </HeaderLinks>
        <HeaderAuthActions>
            <HeaderLogin>
                Login
            </HeaderLogin>
            <Button
                label={'Register'}
                bgColor={ColorsEnum.WHITE}
                color={ColorsEnum.BLACK}
            />
        </HeaderAuthActions>
        <HeaderBurgerMenu
            src={BurgerMenu}
            alt={'menu'}
        />
    </HeaderWrapper>
}

export default Header;