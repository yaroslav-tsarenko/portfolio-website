import React from 'react';
import myPhoto from '../../assets/images/personal-photo-3.jpg';
import wavingHand from '../../assets/images/waving-hand.png';
import "./GreetingComponent.css";
import {FaLinkedin} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa6";
import {IoLogoGithub} from "react-icons/io";

const GreetingComponent = () => {
    return (
        <div className="greeting-wrapper">
            <div className="greeting-hero-content">
                <section className="greeting-content">
                    <h1>
                        Front-End React Developer
                        <img className="waving-hand-image" src={wavingHand} alt="hand" width="50" height="50"/>
                    </h1>
                    <p>
                        Hi, I'm <span>Yaroslav Tsarenko</span>. A purposeful and responsible person who is always ready
                        to
                        learn
                        something new. I am a front-end developer with a focus on <span>React</span>. 🎯
                    </p>
                    <span className="contact-icons">
<FaTelegram className="social-icon"/>
<IoLogoGithub className="social-icon"/>
<FaLinkedin className="social-icon"/>
                </span>
                </section>
                <div className="personal-photo-wrapper">
                    <img className="personal-photo" src={myPhoto} alt="Personal Photo"/>
                </div>
            </div>
        </div>
    );
};

export default GreetingComponent;