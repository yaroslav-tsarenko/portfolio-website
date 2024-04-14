import React from 'react';
import "./HeroComponent.css";
import GreetingComponent from "../greeting-component/GreetingComponent";

const HeroComponent = () => {
    return (
        <main className="main-content">
            <GreetingComponent/>
        </main>
    );
};

export default HeroComponent;