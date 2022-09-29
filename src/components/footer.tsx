import { FC } from "react";
import {
    Container,
    CopyText,
    FooterCopy,
    FooterLogoAndCopy,
    Navbar,
    NavButton,
    NavItem,
    NavParent,
    SectionFooter,
    StyledLogo,
} from "./styled-components";

type Props = {};

const Footer: FC<Props> = (props) => {
    return (
        <Container style={{ marginTop: 0, marginBottom: 0 }}>
            <SectionFooter>
                <FooterLogoAndCopy>
                    <StyledLogo>Your logo</StyledLogo>
                    <FooterCopy>
                        <CopyText>&copy; 2021 Company Name</CopyText>
                        <CopyText>All rights reserved</CopyText>
                    </FooterCopy>
                </FooterLogoAndCopy>
                <Navbar>
                    <NavParent>
                        <NavItem>Explore</NavItem>
                        <NavItem>About us</NavItem>
                        <NavItem>Cities</NavItem>
                        <NavButton type="button">Call</NavButton>
                    </NavParent>
                </Navbar>
            </SectionFooter>
        </Container>
    );
};

export default Footer;
