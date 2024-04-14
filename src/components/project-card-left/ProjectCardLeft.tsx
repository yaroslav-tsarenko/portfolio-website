import React from 'react';
import "./ProjectCardLeft.css";
import {IoIosLink} from "react-icons/io";
import {IoLogoGithub} from "react-icons/io";

interface ProjectCardProps {
    image: string | File;
    projectTitle: string;
    projectDescription: string;
    projectStack: string[];
    githubUrl: string;
    liveDemoUrl: string;
}

const ProjectCardLeft: React.FC<ProjectCardProps> = ({
                                                         image,
                                                         projectTitle,
                                                         projectDescription,
                                                         projectStack,
                                                         githubUrl,
                                                         liveDemoUrl
                                                     }) => {
    const imageUrl = typeof image === 'string' ? image : URL.createObjectURL(image);

    return (
        <div className="project-card-wrapper">
            <div className="project-card">
                <img src={imageUrl} alt={projectTitle}/>
                <div className="project-card-description">
                    <h2>{projectTitle}</h2>
                    <p>{projectDescription}</p>
                    <ul>
                        {projectStack.map((tech, index) => <li key={index}>{tech}</li>)}
                    </ul>
                    <div className="project-card-links">
                        <a href={githubUrl}>
                            <IoLogoGithub className="project-link-icon"/>
                            GitHub
                        </a>
                        <a href={liveDemoUrl}>
                            <IoIosLink className="project-link-icon"/>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
};

export default ProjectCardLeft;