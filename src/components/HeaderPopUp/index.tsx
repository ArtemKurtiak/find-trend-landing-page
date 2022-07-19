import React, {useEffect} from 'react';

import Button from "../Button";

import { HeaderLinkItem, HeaderLogin, HeaderLogo } from "../Header/styled";
import { HeaderPopUpCloseTick, HeaderPopUpContentWrapper, HeaderPopUpItems, HeaderPopUpWrapper } from "./styled";
import { IHeaderPopUpProps } from "./types";
import { Flex } from '../Common/styled';
import { ColorsEnum } from "../../enums/colors.enum";

import Logo from '../../assets/images/svg/logo.svg';
import CloseTick from '../../assets/images/svg/close_tick.svg';

const html = document.querySelector('html') as HTMLHtmlElement;

const HeaderPopUp: React.FC<IHeaderPopUpProps> = ({ isVisible, handleClick }) => {

    useEffect(() => {
        isVisible && (html.style.overflowY = 'hidden');

        return () => {
            html.style.overflowY = 'scroll';
        }
    }, [isVisible]);

    return <HeaderPopUpWrapper isVisible={isVisible}>
        <HeaderPopUpContentWrapper>
            <Flex justifyContent={'space-between'} >
                <HeaderLogo
                    src={Logo}
                    alt={'logo'}
                />
                <HeaderPopUpCloseTick
                    src={CloseTick}
                    alt={'tick'}
                    onClick={handleClick}
                />
            </Flex>
            <HeaderPopUpItems>
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
                <HeaderLogin>
                    Login
                </HeaderLogin>
                <Button
                    label={'Register'}
                    bgColor={ColorsEnum.WHITE}
                    color={ColorsEnum.BLACK}
                    width={'130px'}
                />
            </HeaderPopUpItems>
        </HeaderPopUpContentWrapper>
    </HeaderPopUpWrapper>
}

export default HeaderPopUp;
