import {
    HeroTitle,
    HeroSectionContainer,
    HeroSubTitle,
    HeroSectionContentContainer,
    GlassBackground,
    Backdrop,
    InputBox,
    SearchContainer,
    InputContainer,
    InputLabel,
    GradientButton,
    SectionDivider,
    DownArrow,
} from "./styled-components";
import HeroBG from "../assets/pexels-vecislavas-popa-1571460.png";
import DividerSVG from "../assets/Vector.svg";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { FC } from "react";

type Props = {};

const HeroSection: FC<Props> = (props) => {
    return (
        <HeroSectionContainer bg={HeroBG}>
            <Backdrop />
            <HeroSectionContentContainer>
                <HeroTitle>
                    Rethink your <br />
                    living & renting
                </HeroTitle>
                <HeroSubTitle>Make your stay painless with us</HeroSubTitle>
                <GlassBackground>
                    <SearchContainer>
                        <InputContainer>
                            <InputLabel>CITY</InputLabel>
                            <InputBox placeholder="Select your city" />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>DATES</InputLabel>
                            <InputBox placeholder="Select your dates" />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>GUESTS</InputLabel>
                            <InputBox placeholder="Add guests" />
                        </InputContainer>
                        <InputContainer>
                            <GradientButton type="button">
                                <FaSearch style={{ paddingRight: "15px" }} />
                                Search
                            </GradientButton>
                        </InputContainer>
                    </SearchContainer>
                </GlassBackground>
                <DownArrow>
                    <FaChevronDown />
                </DownArrow>
            </HeroSectionContentContainer>
            <SectionDivider>
                <img src={DividerSVG} alt="Divider" width="100%" />
            </SectionDivider>
        </HeroSectionContainer>
    );
};

export default HeroSection;
