import React from 'react'
import githubLogo from '../../Assets/github.svg'
import './ProjectCard.css'
const ProjectCard = ({ name, urlImage, githubLink, techLinks}) => {
  return (
    <div className='cardContainer'>
      <span>{name}</span>
      {techLinks ? (
        <ul className='tech_label_container'>
          {techLinks.map((techLink) => (
            <li key={techLink}>
              <a className='tech_label' href={techLink}>{techLink}</a>
            </li>
          ))}
        </ul>
      ) : null}
      <img src={urlImage} alt={name} />
      <div className="link">
        <a target='_blank' href={githubLink} rel="noreferrer">Github <img src={githubLogo} alt="Logo do Github" /></a>
      </div>
    </div>
  )
}

export default ProjectCard