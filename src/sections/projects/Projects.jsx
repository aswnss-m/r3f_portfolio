import React from 'react'
import { projects } from './details'
const Card = ({name,description,link,stack}) =>{
    return(
        <div className="card">
            {name}
            {description}
            {stack}
        </div>
    )
}
function Projects() {
  return (
    <div>
        {
            projects.map((project,index)=>{
                return(
                    <Card 
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        stack={project.stack} />
                )
            })
        }
    </div>
  )
}

export default Projects
