import React from "react";
import Project from '../components/Project';

const Projects = () => {
    return (
        <div>
            <h4>Projects</h4>
            <Project title={"Portfolio"} description={"My profile and projects"}/>
            <Project title={"Pet Shelter"} description={"Pet adoption center"}/>
            <Project title ={"Concer Ticket"} description={"Buy ticket and see concert schedules"}/>
            
        </div>
    )
}

export default Projects;