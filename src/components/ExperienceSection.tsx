import SkillCard from './SkillCard'
import TitleSections from './TitleSections'

export default function ExperienceSection() {
  return (
    <section className="px-3 flex flex-col items-center m-auto justify-start gap-6 py-16 md:w-[706px]">
      <TitleSections title="Experiêcia" />
      <div className="px-3 w-full flex flex-col gap-8">
        <div className="flex justify-center md:justify-between items-center">
          <span className="text-lg text-white font-inter">
            <strong className="font-inter font-extrabold">
              Neat Solutions /
            </strong>{' '}
            Software Developer
          </span>
          <span className="text-xs text-right text-gray-body uppercase font-inter">
            JAN 2023 - PRESENTE
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base font-inter font-medium text-gray-body md:w-[706px] text-center md:text-left">
            Atualmente, atuo como Desenvolvedora de Software Freelancer,
            prestando serviços para diversas empresas e clientes. Meu principal
            parceiro é o grupo Neat Solutions, onde exerço regularmente o papel
            de Desenvolvedora Front-End. Minha expertise se baseia em
            tecnologias como ReactJS, React Native, TypeScript, NextJS,
            TailwindCSS e Sass, as quais utilizo para criar soluções inovadoras
            e de alta qualidade.
          </p>
          <p className="text-base font-inter font-medium text-gray-body md:w-[706px] text-center md:text-left">
            Recentemente, concluí um projeto significativo para o grupo: o
            desenvolvimento de um site de venda de cursos voltados para
            apostadores online. Neste projeto, pude aplicar minhas habilidades
            em design e desenvolvimento web para criar uma plataforma intuitiva
            e atrativa para os usuários.
          </p>
        </div>
        <div className="px-3 flex flex-wrap gap-2 items-center justify-center md:justify-start">
          <SkillCard skillUrl="https://react.dev/" skill="ReactJS" />
          <SkillCard skillUrl="https://reactnative.dev/" skill="React Native" />
          <SkillCard
            skillUrl="https://www.typescriptlang.org/"
            skill="TypeScript"
          />
          <SkillCard skillUrl="https://nextjs.org/" skill="NextJS" />
          <SkillCard skillUrl="https://tailwindcss.com/" skill="TailwindCSS" />
          <SkillCard skillUrl="https://jestjs.io/pt-BR/" skill="Jest" />
        </div>
      </div>
    </section>
  )
}
