import { FooterLinkItem, FooterLinks, FooterLogo, FooterTitle, FooterWrapper } from "./styled";
import { Flex } from "../Common/styled";

import Logo from '../../assets/images/svg/black_logo.svg';

const Footer = () => {
    return <FooterWrapper>
        <Flex
            alignItems={'center'}
            gap={'20px'}
        >
            <FooterLogo
                src={Logo}
                alt={'logo'}
            />
            <FooterTitle>
                Findtrend
            </FooterTitle>
        </Flex>
        <FooterLinks>
            <FooterLinkItem>
                Privacy Policy
            </FooterLinkItem>
            <FooterLinkItem>
                Terms and Conditions
            </FooterLinkItem>
            <FooterLinkItem>
                Contact Us
            </FooterLinkItem>
            <FooterLinkItem>
                Careers
            </FooterLinkItem>
        </FooterLinks>
    </FooterWrapper>
}

export default Footer;
