import React from 'react';
import "./TechStackComponent.css";
import ReactLogo from '../../assets/images/react-logo.svg';
import ReduxLogo from '../../assets/images/redux-logo.svg';
import TypeScriptLogo from '../../assets/images/typescript-logo-svgrepo-com.svg';
import JavScriptLogo from '../../assets/images/js-logo.svg';
import HTMLLogo from '../../assets/images/html-logo.svg';
import CSSLogo from '../../assets/images/css-logo.svg';
import TailWindLogo from '../../assets/images/tailwind-css-logo.svg';
import SassLogo from '../../assets/images/saas-logo.svg';
import BootstrapLogo from '../../assets/images/bootstrap-logo.svg';
import GitLogo from '../../assets/images/git-logo.svg';
import WebStormLogo from '../../assets/images/webstorm-logo.svg';
import PostgresLogo from '../../assets/images/postgreesql-logo.svg';
import MongoDBLogo from '../../assets/images/mongodb-logo.svg';
import JQueryLogo from '../../assets/images/jquery-logo.svg';
import NodeJSLogo from '../../assets/images/nodejs-logo.svg';
import JestLogo from '../../assets/images/jest-testing-logo.svg';
const TechStackComponent = () => {
    return (
        <div className="tech-stack-wrapper">
            <div className="tech-stack-container-content">
                <h2>My Tech Stack</h2>
                <p>Technologies i've been working recently</p>
                <div className="tech-stack-container">
                    <img src={ReactLogo} alt="React Logo" width={75}/>
                    <img src={ReduxLogo} alt="Redux Logo" width={75}/>
                    <img src={TypeScriptLogo} alt="TypeScript Logo" width={75}/>
                    <img src={JavScriptLogo} alt="JavaScript Logo" width={75}/>
                    <img src={NodeJSLogo} alt="NodeJS Logo" width={75}/>
                    <img src={HTMLLogo} alt="HTML Logo" width={75}/>
                    <img src={CSSLogo} alt="CSS Logo" width={75}/>
                    <img src={TailWindLogo} alt="TailWind Logo" width={75}/>
                    <img src={SassLogo} alt="Sass Logo" width={75}/>
                    <img src={JQueryLogo} alt="Jquery Logo" width={75}/>
                    <img src={BootstrapLogo} alt="BootStrapLogo" width={75}/>
                    <img src={GitLogo} alt="Git Logo" width={75}/>
                    <img src={WebStormLogo} alt="WebStorm Logo" width={75}/>
                    <img src={PostgresLogo} alt="Postgres Logo" width={75}/>
                    <img src={JestLogo} alt="Jest Logo" width={75}/>
                    <img src={MongoDBLogo} alt="MongoDB Logo" width={75}/>
                </div>
            </div>
        </div>
    );
};

export default TechStackComponent;