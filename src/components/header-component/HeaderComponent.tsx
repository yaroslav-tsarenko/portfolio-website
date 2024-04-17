import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import "./HeaderComponent.css";
import {
    ReactComponent as PersonalLogo
} from "../../assets/images/logo.svg";

interface TouchPosition {
    x: number;
    y: number;
}

const HeaderComponent: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [startTouch, setStartTouch] = useState<TouchPosition>({ x: 0, y: 0 });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        setStartTouch({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touch = e.changedTouches[0];
        const endTouch: TouchPosition = { x: touch.clientX, y: touch.clientY };

        if (Math.abs(endTouch.y - startTouch.y) < 50) {
            if (endTouch.x > startTouch.x + 50) {
                setSidebarOpen(false);
            } else if (endTouch.x < startTouch.x - 50) {
                setSidebarOpen(true);
            }
        }
    };

    return (
        <header className="header-nav" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
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
