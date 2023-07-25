import React from 'react';
import './TechCard.css';
const TechCard = ({techImage, techName, key}) => {
  return (
    <div className='techCard' key={key}>
      <img src={techImage} alt={techName} />
      <p>{techName}</p>
    </div>
  )
}

export default TechCard