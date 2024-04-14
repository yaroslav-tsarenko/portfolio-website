import React, {useState} from 'react';
import "./FooterComponent.css";
import {
    ReactComponent as FooterLogo
} from "../../assets/images/logo-grey.svg";
import {
    ReactComponent as GitHubIcon
} from "../../assets/icons/github-icon.svg";
import {
    ReactComponent as GitHubIconHovered
} from "../../assets/icons/github-icon-hovered.svg";
import {
    ReactComponent as LinkedInIcon
} from "../../assets/icons/linkedin-icon.svg";
import {
    ReactComponent as LinkedInIconHovered
} from "../../assets/icons/linkedin-icon-hovered.svg";
import {
    ReactComponent as TelegramIcon
} from "../../assets/icons/telegram-icon.svg";
import {
    ReactComponent as TelegramIconHovered
} from "../../assets/icons/telegram-icon-hovered.svg";
const FooterComponent = () => {

    const [isGitHubIconHovered, setIsGitHubIconHovered] = useState(false);
    const [isLinkedInIconHovered, setIsLinkedInIconHovered] = useState(false);
    const [isTelegramIconHovered, setIsTelegramIconHovered] = useState(false);

    return (
        <footer className="footer-content">
            <div className="footer-content-upper">
                <FooterLogo/>
                <section className="nav-container-wrapper">
                    <nav className="contact-info">
                        <a href="#">+380 97 279 68 55</a>
                        <a href="#">yaroslavtsarenkodev@gmail.com</a>
                    </nav>
                    <nav className="icon-info">
                        <a href="#"
                           onMouseEnter={() => setIsGitHubIconHovered(true)}
                           onMouseLeave={() => setIsGitHubIconHovered(false)}>
                            {isGitHubIconHovered ? <GitHubIconHovered/> :
                                <GitHubIcon className="hovered-github"/>}
                        </a>
                        <a href="#"
                           onMouseEnter={() => setIsLinkedInIconHovered(true)}
                           onMouseLeave={() => setIsLinkedInIconHovered(false)}>
                            {isLinkedInIconHovered ? <LinkedInIconHovered/> :
                                <LinkedInIcon/>}
                        </a>
                        <a href="#" onMouseEnter={() => setIsTelegramIconHovered(true)}
                           onMouseLeave={() => setIsTelegramIconHovered(false)}>
                            {isTelegramIconHovered ? <TelegramIconHovered/> :
                                <TelegramIcon/>}
                        </a>
                    </nav>
                </section>
            </div>
            <hr className="divider-line"/>
            <div className="footer-content-bottom">
                <nav className="bottom-nav">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </nav>
                <p>
                    Designed and built by <span> Yaroslav Tsarenko</span> with <span>Love & Coffee</span>
                </p>
            </div>
        </footer>
    );
};

export default FooterComponent;