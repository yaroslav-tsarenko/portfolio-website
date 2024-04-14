import React from 'react';
import "./ProjectsSectionComponent.css";
import ProjectCardRight from "../project-card-right/ProjectCardRight";
import workingOnLaptop from "../../assets/images/laptop-working.jpg";
import ProjectCardLeft from "../project-card-left/ProjectCardLeft";

const ProjectsSectionComponent = () => {
    return (
        <div className="project-section-wrapper">
            <div className="projects-section-title">
                <span>Portfolio</span>
                <p>Every project represents a distinct piece of development work💻</p>
            </div>
            <ProjectCardRight
                image={workingOnLaptop}
                projectTitle="Project Title"
                projectDescription="Project DescriptionProject DescriptionProject DescriptionProject
                DescrProject DescriptionProject DescriptionProject DescriptioniptionProject
                DescriptionProject Description"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"url"}
                liveDemoUrl={"url"}/>
            <ProjectCardLeft
                image={workingOnLaptop}
                projectTitle="Project Title"
                projectDescription="Project DescriptionProject DescriptionProject DescriptionProject
                DescrProject DescriptionProject DescriptionProject DescriptioniptionProject
                DescriptionProject Description"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"url"}
                liveDemoUrl={"url"}/>
            <ProjectCardRight
                image={workingOnLaptop}
                projectTitle="Project Title"
                projectDescription="Project DescriptionProject DescriptionProject DescriptionProject
                DescrProject DescriptionProject DescriptionProject DescriptioniptionProject
                DescriptionProject Description"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"url"}
                liveDemoUrl={"url"}/>
            <ProjectCardLeft
                image={workingOnLaptop}
                projectTitle="Project Title"
                projectDescription="Project DescriptionProject DescriptionProject DescriptionProject
                DescrProject DescriptionProject DescriptionProject DescriptioniptionProject
                DescriptionProject Description"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"url"}
                liveDemoUrl={"url"}/>
            <ProjectCardRight
                image={workingOnLaptop}
                projectTitle="Project Title"
                projectDescription="Project DescriptionProject DescriptionProject DescriptionProject
                DescrProject DescriptionProject DescriptionProject DescriptioniptionProject
                DescriptionProject Description"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"url"}
                liveDemoUrl={"url"}/>
            <ProjectCardLeft
                image={workingOnLaptop}
                projectTitle="Project Title"
                projectDescription="Project DescriptionProject DescriptionProject DescriptionProject
                DescrProject DescriptionProject DescriptionProject DescriptioniptionProject
                DescriptionProject Description"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"url"}
                liveDemoUrl={"url"}/>
            <ProjectCardRight
                image={workingOnLaptop}
                projectTitle="Project Title"
                projectDescription="Project DescriptionProject DescriptionProject DescriptionProject
                DescrProject DescriptionProject DescriptionProject DescriptioniptionProject
                DescriptionProject Description"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"url"}
                liveDemoUrl={"url"}/>
        </div>
    );
};

export default ProjectsSectionComponent;