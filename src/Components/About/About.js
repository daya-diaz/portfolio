import React from 'react';
import './About.css';
import avatar from '../../Assets/avatar-about.png'
import techs from '../../Data/techData';
import TechCard from '../TechCard/TechCard';
const About = () => {
  return (
    <section className='container' id="about">
      <h2>Sobre <br/>mim</h2>
      <div className="about-content">
        <div className="about-text">
        <p className='paragraph-with-line'>
          Busco criar experiências digitais envolventes e funcionais, sempre em busca da satisfação dos usuários. 
          Minha jornada é marcada pelo entusiasmo em explorar a interseção entre a criatividade e a 
          tecnologia para oferecer soluções inovadoras e impactantes.
        </p>
        <div className='skills'>
          <h3>Skills</h3>
          <div className='skillsContent'>
            {
              techs.map((tech) => (
                <TechCard 
                  key={tech.id}
                  techName={tech.techName}
                  techImage={tech.techImage}
                />
              ))
            }
          </div>
        </div>
        </div>
        <div className="about-image">
          <img src={avatar} alt="Memoji com notebook" />
        </div>
      </div>
    </section>
  )
}

export default About