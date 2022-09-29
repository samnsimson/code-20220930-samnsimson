import { FC } from "react";
import "./App.css";
import AboutUs from "./components/about-us";
import ExploreSection from "./components/explore";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero";
import { Website } from "./components/styled-components";

type Props = {};

const App: FC<Props> = (props) => {
    return (
        /**
         * Landing page is constructied using components
         * and are bundeled into one page
         */
        <Website>
            {/* Header Section */}
            <Header />
            {/* Hero Section */}
            <HeroSection />
            {/* Explore Section */}
            <ExploreSection />
            {/* About us Section*/}
            <AboutUs />
            {/* Footer Section */}
            <Footer />
        </Website>
    );
};

export default App;
