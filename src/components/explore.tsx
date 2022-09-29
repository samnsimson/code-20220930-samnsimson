import {
    AlignBottom,
    Container,
    Feature,
    FeatureBox,
    FeatureContainer,
    FeatureDetail,
    FeatureInfo,
    FeatureTitile,
    GradientButtonSmall,
    GradientChip,
    SectionContainer,
    SectionDescription,
    SectionOneThird,
    SectionTitle,
    SectionTwoThird,
} from "./styled-components";
import FeatureImage1 from "../assets/pexels-dmitry-zvolskiy-2082087.jpg";
import FeatureImage2 from "../assets/pexels-naim-benjelloun-2029670.jpg";
import { FC } from "react";

type Props = {};

const ExploreSection: FC<Props> = (props) => (
    <SectionContainer id="explore">
        <Container>
            <SectionTitle>Explore</SectionTitle>
            <SectionDescription>
                From one-guest rooms to <br />
                penthouses with pools and gardens
            </SectionDescription>
            <FeatureContainer>
                <FeatureBox width={50}>
                    <Feature bg={FeatureImage1} height={300}>
                        <FeatureInfo maxWidth={424}>
                            <SectionTwoThird width={66}>
                                <FeatureTitile weight={400}>
                                    Room with one king-size bed
                                </FeatureTitile>
                                <FeatureDetail>
                                    <GradientChip>35$</GradientChip>
                                    <GradientChip>
                                        28m<sup>2</sup>
                                    </GradientChip>
                                </FeatureDetail>
                            </SectionTwoThird>
                            <SectionOneThird width={33}>
                                <AlignBottom>
                                    <GradientButtonSmall>
                                        Book!
                                    </GradientButtonSmall>
                                </AlignBottom>
                            </SectionOneThird>
                        </FeatureInfo>
                    </Feature>
                </FeatureBox>
                <FeatureBox width={50}>
                    <Feature bg={FeatureImage2} height={300}>
                        <FeatureInfo maxWidth={424}>
                            <SectionTwoThird width={66}>
                                <FeatureTitile weight={400}>
                                    Penthouse for 8 person
                                </FeatureTitile>
                                <FeatureDetail>
                                    <GradientChip>2039$</GradientChip>
                                    <GradientChip>
                                        438m<sup>2</sup>
                                    </GradientChip>
                                </FeatureDetail>
                            </SectionTwoThird>
                            <SectionOneThird width={33}>
                                <AlignBottom>
                                    <GradientButtonSmall>
                                        Book!
                                    </GradientButtonSmall>
                                </AlignBottom>
                            </SectionOneThird>
                        </FeatureInfo>
                    </Feature>
                </FeatureBox>
            </FeatureContainer>
        </Container>
    </SectionContainer>
);

export default ExploreSection;
