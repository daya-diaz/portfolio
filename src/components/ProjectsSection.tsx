import ProjectCard from './ProjectCard'
import TitleSections from './TitleSections'
import projects from '../data'
export default function ProjectsSection() {
  return (
    <section className="flex flex-col items-center m-auto justify-start gap-6 md:h-[400px] md:w-[706px]">
      <TitleSections title="Projetos recentes" />
      <div className="flex flex-col items-center justify-center md:justify-between flex-wrap gap-6 md:flex-row">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          )
        })}
      </div>
    </section>
  )
}
