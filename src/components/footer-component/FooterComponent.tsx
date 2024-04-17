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
                        <a href="https://github.com/yaroslav-tsarenko"
                           onMouseEnter={() => setIsGitHubIconHovered(true)}
                           onMouseLeave={() => setIsGitHubIconHovered(false)}>
                            {isGitHubIconHovered ? <GitHubIconHovered/> :
                                <GitHubIcon className="hovered-github"/>}
                        </a>
                        <a href="https://www.linkedin.com/in/yaroslav-tsarenko-36807622a/"
                           onMouseEnter={() => setIsLinkedInIconHovered(true)}
                           onMouseLeave={() => setIsLinkedInIconHovered(false)}>
                            {isLinkedInIconHovered ? <LinkedInIconHovered/> :
                                <LinkedInIcon/>}
                        </a>
                        <a href="https://t.me/yyrrsllvv" onMouseEnter={() => setIsTelegramIconHovered(true)}
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
                    <a href="#" onClick={(event) => {
                        event.preventDefault();
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }}>Home</a>
                    <a href="#" onClick={(event) => {
                        event.preventDefault();
                        window.scrollTo({top: 1500, behavior: 'smooth'});
                    }}>About</a>
                    <a href="#" onClick={(event) => {
                        event.preventDefault();
                        window.scrollTo({top: 2200, behavior: 'smooth'});
                    }}>Projects</a>
                    <a href="#" onClick={(event) => {
                        event.preventDefault();
                        window.scrollTo({top: 14000, behavior: 'smooth'});
                    }}>Contact</a>
                </nav>
                <p>
                    Designed and built by <span> Yaroslav Tsarenko</span> with <span>Love & Coffee</span>
                </p>
            </div>
        </footer>
    );
};

export default FooterComponent;