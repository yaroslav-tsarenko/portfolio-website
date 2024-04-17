import React from 'react';
import "./ProjectsSectionComponent.css";
import ProjectCardRight from "../project-card-right/ProjectCardRight";
import workingOnLaptop from "../../assets/images/laptop-working.jpg";
import SkiProVideoExample from "../../assets/videos/skipro-video-example-3.mp4";
import HooBankVideoExample from "../../assets/videos/hoobank-example.mp4";
import CarShowcase from "../../assets/videos/car-showcase-video.mp4";
import HilinkVideo from "../../assets/videos/hilink-video-example.mp4";
import OpenshipaiVideo from "../../assets/videos/openshiai-video.mp4";
import BrainwaveAiVideo from "../../assets/videos/brainwave-video-example.mp4";
import ProjectCardLeft from "../project-card-left/ProjectCardLeft";

const ProjectsSectionComponent = () => {
    return (
        <div className="project-section-wrapper">
            <div className="projects-section-title">
                <span>Portfolio</span>
                <p>Every project represents a distinct piece of development work💻</p>
            </div>
            <ProjectCardRight
                video={OpenshipaiVideo}
                projectTitle="OpenShipAI"
                projectDescription="Fullstack project,
                made with React, Node.js, Express, and MongoDB.
                This project have authorization, payment system, AI assistanth which can helps you to find the best shipping option for your package"
                projectStack={["React.js", "JavaScript", "Node.js", "MongoDB"]}
                githubUrl={"https://github.com/yaroslav-tsarenko/jarvis-ai-service.git"}
                liveDemoUrl={"https://jarvis-ai-service.onrender.com"}/>
            <ProjectCardLeft
                video={BrainwaveAiVideo}
                projectTitle="Brainwave AI"
                projectDescription="The project is dedicated to AI that can help with various tasks.
                The landing page is fully responsive"
                projectStack={["React.js", "JavaScript", "Next.js"]}
                githubUrl={"https://github.com/yaroslav-tsarenko/brainwave-project.git"}
                liveDemoUrl={"https://brainwave-project.vercel.app"}/>
            <ProjectCardRight
                video={CarShowcase}
                projectTitle="Car Hub"
                projectDescription="A fully responsive project that receives cars through APIs and demonstrates the ability to filter "
                projectStack={["React.js", "TypeScript", "Next.js"]}
                githubUrl={"https://github.com/yaroslav-tsarenko/car-showcase.git"}
                liveDemoUrl={"https://car-showcase-orpin-rho.vercel.app"}/>
            <ProjectCardLeft
                video={HilinkVideo}
                projectTitle="Hilink"
                projectDescription="A website that demonstrates how a camping app works. The landing page is fully
                responsive for all devices"
                projectStack={["React.js", "TypeScript", "Tailwind", "Next.js"]}
                githubUrl={"https://github.com/yaroslav-tsarenko/hilink-travel/tree/master"}
                liveDemoUrl={"https://hilink-travel-pi.vercel.app"}/>
            <ProjectCardRight
                video={HooBankVideoExample}
                projectTitle="HooBank"
                projectDescription="Responsive landing page for all devices,
                landing page demonstrates the service with a new payment system"
                projectStack={["React.js", "JavaScript", "Tailwind", "Vite"]}
                githubUrl={"https://github.com/yaroslav-tsarenko/project-hoobank-react"}
                liveDemoUrl={"https://project-hoobank-react.netlify.app/"}/>
            <ProjectCardLeft
                video={SkiProVideoExample}
                projectTitle="SkiPro"
                projectDescription="Simple landing page for ski rental service"
                projectStack={["HTML", "CSS", "JavaScript"]}
                githubUrl={"https://github.com/yaroslav-tsarenko/adaptive-layout"}
                liveDemoUrl={"https://adaptive-web-layout.netlify.app/"}/>
        </div>
    );
};

export default ProjectsSectionComponent;