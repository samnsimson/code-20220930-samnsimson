/**
 * Styled Components
 * Library that enabled to use CSS as a component
 */
import styled from "styled-components";
import {
    IBg,
    IHeight,
    IMaxWidth,
    IVariant,
    IWeight,
    IWidth,
} from "../../types";

export const Website = styled.section`
    position: relative;
`;

export const Container = styled.div`
    max-width: 1024px;
    margin: 80px auto;
    position: relative;
    display: block;
    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;

export const Row = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    gap: 5%;
`;

export const SectionContainer = styled.section`
    display: block;
    padding-bottom: 40px;
`;

export const SectionHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    z-index: 10;
    position: absolute;
    left: 0;
    right: 0;
    color: #fff;
    @media (max-width: 768px) {
        padding: 24px 15px;
    }
`;

export const SectionFooter = styled(SectionHeader)`
    color: #000;
`;

export const StyledLogo = styled.div`
    font-family: "Dancing Script";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
`;

export const Menu = styled.div`
    display: none;
    color: #ffffff;
    font-size: 32px;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const Navbar = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavParent = styled.div`
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 10%;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

export const NavItem = styled.a`
    display: flex;
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    align-items: center;
    justify-content: space-around;
    padding: 5px 10px;
    color: #ffffff;
    text-decoration: none;
`;

export const NavButton = styled.button<IVariant>`
    border: 2px solid;
    border-color: ${({ variant }) => (variant === "white" ? `#fff` : `#000`)};
    border-radius: 10px;
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    padding: 6px 25px;
    background-color: transparent;
    color: ${({ variant }) => (variant === "white" ? `#ffffff` : `#000000`)};
    :hover {
        cursor: pointer;
    }
`;

export const HeroSectionContainer = styled.section<IBg>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 700px;
    background-image: url(${({ bg }) => bg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

export const HeroSectionContentContainer = styled.div`
    max-width: 1024px;
    z-index: 2;
`;

export const HeroTitle = styled.h1`
    width: 100%;
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 110px;
    text-align: center;
    margin-bottom: 0;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 52px;
        line-height: 57px;
    }
`;

export const HeroSubTitle = styled.h4`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 110%;
    align-items: center;
    text-align: center;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 22px;
    }
`;

export const GlassBackground = styled.div`
    background: linear-gradient(
        94.43deg,
        rgba(249, 249, 249, 0.49) 34.95%,
        rgba(249, 249, 249, 0.175) 67.01%
    );
    backdrop-filter: blur(5px);
    border-radius: 30px;
    padding: 15px 18px;
`;

export const Backdrop = styled.div`
    background: rgba(21, 20, 20, 0.25);
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0;
    right: 0;
    z-index: 1;
`;

export const SearchContainer = styled.div`
    display: flex;
    gap: 2%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 25%;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 1em;
        overflow: hidden;
        :last-child {
            margin-bottom: 0;
        }
    }
`;

export const InputLabel = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-radius: 16px;
    z-index: -1;
    padding: 8px 16px;
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    color: #6d6d6d;
`;

export const InputBox = styled.input`
    padding: 8px 16px;
    background-color: #ffffff;
    width: 100%;
    outline: none;
    border: none;
    z-index: 12;
    background-color: transparent;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 110%;
    margin-top: 30px;
    color: #000;
    ::placeholder {
        color: #000;
    }
    @media (max-width: 768px) {
        padding-top: 5px;
        padding-bottom: 5px;
    }
`;

export const GradientButton = styled.button`
    border-radius: 16px;
    background: linear-gradient(90deg, #ff594c 0%, #fac527 100%);
    color: white;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 110%;
    width: 100%;
    border: none;
    outline: none;
    height: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        padding-top: 11px;
        padding-bottom: 11px;
    }
`;

export const GradientButtonSmall = styled.button`
    border-radius: 16px;
    background: linear-gradient(90deg, #ff594c 0%, #fac527 100%);
    color: #000;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
    width: 100%;
    border: none;
    outline: none;
    padding: 15px 25px;
`;

export const SectionDivider = styled.div`
    position: absolute;
    bottom: -4px;
    width: 100%;
    left: 0;
    z-index: 2;
`;

export const SectionTitle = styled.h2`
    font-family: "Exo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    color: #000;
    margin-top: 0;
    margin-bottom: 21px;
`;

export const SectionDescription = styled.p`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
`;

export const FeatureContainer = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 3%;
    margin-top: 56px;
    margin-bottom: 56px;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const FeatureBox = styled.div<IWidth>`
    position: relative;
    width: ${({ width }) => width}%;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 6em;
        :last-child {
            margin-bottom: 0;
        }
    }
`;

export const Feature = styled.div<IBg & IHeight>`
    border-radius: 25px;
    height: ${({ height }) => height}px;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding: 0 30px;
`;

export const FeatureInfo = styled(GlassBackground)<IMaxWidth>`
    position: absolute;
    width: calc(100% - 135px);
    max-width: ${({ maxWidth }) => maxWidth}px;
    padding: 22px 37px;
    bottom: -50px;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 22px 18px;
        width: calc(100% - 100px);
        bottom: -75px;
    }
`;

export const FeatureTitile = styled.h3<IWeight>`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: ${({ weight }) => weight};
    font-size: 18px;
    line-height: 110%;
    color: #000;
    margin: 0;
`;

export const FeatureDescription = styled.p`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 110%;
    display: flex;
    align-items: center;
    margin-bottom: 0;
`;

export const FeatureDetail = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15%;
    margin-top: 13px;
    @media (max-width: 768px) {
        justify-content: space-between;
        margin-bottom: 15px;
    }
`;

export const GradientChip = styled.span`
    background: linear-gradient(90deg, #ff594c 0%, #fac527 100%);
    border-radius: 10px;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 110%;
    display: flex;
    align-items: center;
    padding: 5px 20px;
`;

export const SectionTwoThird = styled.div<IWidth>`
    display: block;
    width: ${({ width }) => width}%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SectionOneThird = styled.div<IWidth>`
    display: block;
    width: ${({ width }) => width}%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AlignBottom = styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
`;

export const MasonryRow = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
    height: 960px;
    counter-reset: items;
    column-gap: 5%;
    row-gap: 8%;
    margin-top: 50px;
    @media (max-width: 768px) {
        display: block;
        height: auto;
    }
`;

export const MasonryColumn = styled.div`
    :nth-child(2n + 1) {
        width: 45%;
    }
    :nth-child(2n + 2) {
        width: 55%;
    }
    :nth-child(1) {
        height: 266px;
    }
    ::before {
        counter-increment: items;
    }
    :nth-of-type(2n + 1) {
        order: 1;
    }
    :nth-of-type(2n) {
        order: 2;
    }
    @media (max-width: 768px) {
        :nth-child(n + 1) {
            width: 100%;
            margin-bottom: 6em;
        }
        :last-child {
            margin-bottom: 0;
        }
    }
`;

export const FooterLogoAndCopy = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterCopy = styled.div`
    margin-top: 34px;
`;

export const CopyText = styled.p`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 132%;
    margin: 0;
`;

export const DownArrow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px auto;
    color: white;
    font-size: 34px;
    margin-top: 2em;
    @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 1em;
    }
`;
