import {
    Container,
    Menu,
    Navbar,
    NavButton,
    NavItem,
    NavParent,
    SectionHeader,
    StyledLogo,
} from "./styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FC } from "react";

type Props = {};

const Header: FC<Props> = (props) => {
    return (
        <Container style={{ marginTop: 0, marginBottom: 0 }}>
            <SectionHeader>
                <StyledLogo>Your logo</StyledLogo>
                <Navbar>
                    <NavParent>
                        <NavItem href="#explore">Explore</NavItem>
                        <NavItem href="#about-us">About us</NavItem>
                        <NavItem href="#cities">
                            Cities
                            <FiChevronDown
                                style={{ marginTop: "5px", paddingLeft: "5px" }}
                            />
                        </NavItem>
                        <NavButton type="button" variant="white">
                            Call
                        </NavButton>
                    </NavParent>
                </Navbar>
                <Menu>
                    <FaBars />
                </Menu>
            </SectionHeader>
        </Container>
    );
};

export default Header;
