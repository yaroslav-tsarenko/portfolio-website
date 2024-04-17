import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import "./HeaderComponent.css";
import {
    ReactComponent as PersonalLogo
} from "../../assets/images/logo.svg";
import {useSwipeable} from "react-swipeable";

const HeaderComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const handlers = useSwipeable({
        onSwipedLeft: () =>  setSidebarOpen(!sidebarOpen),
        onSwipedRight: () => setSidebarOpen(!sidebarOpen),
        trackMouse: true
    });
    return (
        <header className="header-nav">
            <div className="logo">
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}><PersonalLogo/></a>

            </div>
            <div className="nav-container">
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
            </div>
            <div className="burger-button" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars as any}/>
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} {...handlers}>
                <FontAwesomeIcon className="fa-times-sibebar-button" icon={faTimes as any} onClick={toggleSidebar}/>
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}>Home</a>
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({top: 1900, behavior: 'smooth'});
                }}>About</a>
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({top: 3000, behavior: 'smooth'});
                }}>Projects</a>
                <a href="#" onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({top: 12000, behavior: 'smooth'});
                }}>Contact</a>
            </div>
        </header>
    );
};

export default HeaderComponent;