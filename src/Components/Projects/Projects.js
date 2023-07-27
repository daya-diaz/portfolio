import projects from '../../Data/data';
import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <section className='container projects' id='projects'>
      <h2>Ultimos <br/>Projetos</h2>
        <div id="projectCards">
          {
            projects.map((project) => (
              <ProjectCard 
                key={project.id}
                name={project.name}
                urlImage={project.urlImage}
                githubLink={project.githubLink}
                techLinks={project.techLinks}
              />
            ))
          }
        </div>
    </section>
  )
}

export default Projects;
