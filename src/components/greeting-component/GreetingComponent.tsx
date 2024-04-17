import React, {useState} from 'react';
import myPhoto from '../../assets/images/personal-photo-3.jpg';
import wavingHand from '../../assets/images/waving-hand.png';
import "./GreetingComponent.css";
import {FaLinkedin} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa6";
import {IoLogoGithub} from "react-icons/io";

const GreetingComponent = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handlePhotoClick = () => {
        setIsPopupOpen(true);
    };
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
                        <a href="https://github.com/yaroslav-tsarenko">
                                <IoLogoGithub className="social-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/yaroslav-tsarenko-36807622a/">
                                <FaLinkedin className="social-icon"/>
                        </a>
                        <a href="https://t.me/yyrrsllvv">
                                <FaTelegram className="social-icon"/>
                        </a>
                    </span>
                </section>
                <div className="personal-photo-wrapper" onClick={handlePhotoClick}>
                    <img className="personal-photo" src={myPhoto} alt="Personal Photo"/>
                </div>
                {isPopupOpen && (
                    <div className={`popup ${isPopupOpen ? 'popup-open' : ''}`}>
                        <img src={myPhoto} alt="Personal Photo"/>
                        <button onClick={() => setIsPopupOpen(false)}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GreetingComponent;