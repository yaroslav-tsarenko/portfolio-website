import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import "./HeaderComponent.css";
import {
    ReactComponent as PersonalLogo
} from "../../assets/images/logo.svg";

const HeaderComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header className="header-nav">
            <div className="logo">
                <PersonalLogo/>
            </div>
            <div className="nav-container">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
            <div className="burger-button" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars as any} />
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <FontAwesomeIcon className="fa-times-sibebar-button" icon={faTimes as any} onClick={toggleSidebar} />
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </header>
    );
};

export default HeaderComponent;