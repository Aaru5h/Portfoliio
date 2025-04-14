import React from 'react'
import {Github, ExternalLink} from 'lucide-react'

const Project = ({project}) => {
  return (
    <div className="project-card">
      <h3 className='project-title'>{project.name}</h3>
      
      <div className='project-image-container'>
        <a href={project.deployed} target = "_blank" rel="noopener noreferrer">
          <img src={project.image} alt = {`${project.name}`} className="project-image" />
          <div className='project-image-overlay'></div>
        </a>
      </div>

      <div className='project-code-link'>
        <a href={project.code} className='github-link' target='_blank' rel = 'noopener noreferrer'>
          <span>View Code</span>
          <Github size={18} />
        </a>
      </div>
    </div>
  )
}

const ProjectList = ({projects}) =>{
  return(
    <div className='projects-grid'>
      {projects.map((project,i)=>(
        <Project key={i} project={project} />
      ))}
    </div>
  )
}

export {Project, ProjectList}