import React from 'react';
import HeaderComponent from "./components/header-component/HeaderComponent";
import HeroComponent from "./components/hero-component/HeroComponent";
import FooterComponent from "./components/footer-component/FooterComponent";
import TechStackComponent from "./components/teck-stack-component/TechStackComponent";
import AboutMeSection from "./components/about-me-component/AboutMeSection";
import ProjectsSectionComponent from "./components/projects-section-component/ProjectsSectionComponent";
import ContactMeComponent from "./components/contact-me-component/ContactMeComponent";

const App = () => {
    return (
        <>
            <HeaderComponent/>
            <HeroComponent/>
            <TechStackComponent/>
            <AboutMeSection/>
            <ProjectsSectionComponent/>
            <ContactMeComponent/>
            <FooterComponent/>
        </>
    );
};

export default App;