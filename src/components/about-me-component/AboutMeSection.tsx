import React from 'react';
import "./AboutMeSection.css";
import laptopWorking from '../../assets/images/laptop-working.jpg';

const AboutMeSection = () => {
    return (
        <div className="about-me-wrapper">
            <div className="about-me-content">
                <img className="laptop-image" src={laptopWorking} alt="Working on Laptop" width={200} height={200}/>
                <div className="description-text">
                    <span>About Me</span>
                    <h2>Front-End Developer
                        based in Khmelnitsky, Ukraine 📍</h2>
                    <p>
                        Hey, I'm a skilled Front-End Developer with 2 years of experience in commercial projects,
                        focusing on React.js and TypeScript for improving page speed, compatibility, and user
                        engagement.
                    </p>
                    <p>
                        Experienced in integrating interfaces with backend logic, automating tests, and optimizing
                        performance. I actively solve responsive challenges, stay updated with new technologies, and
                        streamline project development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;