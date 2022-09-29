import { FC } from "react";
import {
    Container,
    Feature,
    FeatureBox,
    FeatureDescription,
    FeatureInfo,
    FeatureTitile,
    MasonryColumn,
    MasonryRow,
    SectionContainer,
    SectionDescription,
    SectionTitle,
} from "./styled-components";
import Image1 from "../assets/pexels-max-vakhtbovych-5998051.jpg";
import Image2 from "../assets/pexels-max-vakhtbovych-6492403.jpg";
import Image3 from "../assets/pexels-houzlook-com-3356416.jpg";
import Image4 from "../assets/pexels-oleg-zaicev-4834891.jpg";

type Props = {};

const AboutUs: FC<Props> = (props) => {
    return (
        <SectionContainer id="about-us">
            <Container>
                <SectionTitle>About Us</SectionTitle>
                <SectionDescription>
                    Allow us to tell you a short story...
                </SectionDescription>
                <MasonryRow>
                    <MasonryColumn>
                        <FeatureBox width={100}>
                            <Feature bg={Image1} height={267}>
                                <FeatureInfo maxWidth={350}>
                                    <div>
                                        <FeatureTitile weight={700}>
                                            Chapter I
                                        </FeatureTitile>
                                        <FeatureDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididun
                                        </FeatureDescription>
                                    </div>
                                </FeatureInfo>
                            </Feature>
                        </FeatureBox>
                    </MasonryColumn>
                    <MasonryColumn>
                        <FeatureBox width={100}>
                            <Feature bg={Image2} height={334}>
                                <FeatureInfo maxWidth={350}>
                                    <div>
                                        <FeatureTitile weight={700}>
                                            Chapter II
                                        </FeatureTitile>
                                        <FeatureDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididun
                                        </FeatureDescription>
                                    </div>
                                </FeatureInfo>
                            </Feature>
                        </FeatureBox>
                    </MasonryColumn>
                    <MasonryColumn>
                        <FeatureBox width={100}>
                            <Feature bg={Image3} height={502}>
                                <FeatureInfo maxWidth={350}>
                                    <div>
                                        <FeatureTitile weight={700}>
                                            Chapter III
                                        </FeatureTitile>
                                        <FeatureDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididun
                                        </FeatureDescription>
                                    </div>
                                </FeatureInfo>
                            </Feature>
                        </FeatureBox>
                    </MasonryColumn>
                    <MasonryColumn>
                        <FeatureBox width={100}>
                            <Feature bg={Image4} height={500}>
                                <FeatureInfo maxWidth={350}>
                                    <div>
                                        <FeatureTitile weight={700}>
                                            Chapter IV
                                        </FeatureTitile>
                                        <FeatureDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididun
                                        </FeatureDescription>
                                    </div>
                                </FeatureInfo>
                            </Feature>
                        </FeatureBox>
                    </MasonryColumn>
                </MasonryRow>
            </Container>
        </SectionContainer>
    );
};

export default AboutUs;
