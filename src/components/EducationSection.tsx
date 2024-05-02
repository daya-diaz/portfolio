import EducationCard from './EducationCard'
import TitleSections from './TitleSections'

import { educations } from '../data'
export default function EducationSection() {
  return (
    <section className="px-3 flex flex-col items-center m-auto justify-start gap-14 py-16 md:w-[706px]">
      <TitleSections title="Cursos e Certificados" />
      <div className="flex flex-col gap-12">
        {educations.map((education) => {
          return (
            <EducationCard
              title={education.title}
              finishedAt={education.finishedAt}
              certificateUrl={education.certificateUrl}
              institute={education.institute}
              resume={education.resume}
              startAt={education.startAt}
              key={education.id}
            />
          )
        })}
      </div>
    </section>
  )
}
