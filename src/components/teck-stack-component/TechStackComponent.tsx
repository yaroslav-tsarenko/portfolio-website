import React, { useState } from 'react';
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
import Tip from "../description-popup/Tip";
const TechStackComponent = () => {
    const [tipText, setTipText] = useState<string | null>(null);

    const handleMouseEnter = (text: string) => {
        setTipText(text);
    };

    const handleMouseLeave = () => {
        setTipText(null);
    };

    const techStack = [
        { src: ReactLogo, alt: "React Logo", tip: "React.js" },
        { src: ReduxLogo, alt: "Redux Logo", tip: "Redux" },
        { src: TypeScriptLogo, alt: "TypeScript Logo", tip: "TypeScript" },
        { src: JavScriptLogo, alt: "JavaScript Logo", tip: "JavaScript" },
        { src: HTMLLogo, alt: "HTML Logo", tip: "HTML" },
        { src: CSSLogo, alt: "CSS Logo", tip: "CSS" },
        { src: TailWindLogo, alt: "TailWindLogo Logo", tip: "Tailwind" },
        { src: SassLogo, alt: "SASS", tip: "SASS" },
        { src: BootstrapLogo, alt: "BootstrapLogo Logo", tip: "Bootstrap" },
        { src: GitLogo, alt: "Git Logo", tip: "GIT" },
        { src: WebStormLogo, alt: "WebStormLogo Logo", tip: "Web Storm" },
        { src: PostgresLogo, alt: "Postgres Logo", tip: "PostgresSQL" },
        { src: MongoDBLogo, alt: "MongoDB Logo", tip: "MongoDB" },
        { src: JQueryLogo, alt: "Jquery Logo", tip: "JQuery" },
        { src: NodeJSLogo, alt: "Node Logo", tip: "Node.js" },
        { src: JestLogo, alt: "Jest Logo", tip: "Jest" },
    ];

    return (
        <div className="tech-stack-wrapper">
            <div className="tech-stack-container-content">
                <h2>My Tech Stack</h2>
                <p>Technologies i've been working recently</p>
                <div className="tech-stack-container">
                    {techStack.map((tech, index) => (
                        <div className="tech-item" key={index}>
                            <img
                                src={tech.src}
                                alt={tech.alt}
                                width={75}
                                onMouseEnter={() => handleMouseEnter(tech.tip)}
                                onMouseLeave={handleMouseLeave}
                            />
                            {tipText === tech.tip && <Tip text={tipText}/>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStackComponent;