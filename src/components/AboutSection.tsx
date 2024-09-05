import TitleSection from './TitleSections'

export default function AboutSection() {
  return (
    <section className="p-3 flex flex-col items-center m-auto justify-start py-16 gap-6">
      <TitleSection title="Sobre mim" />
      <div className="flex flex-col gap-5">
        <p className="text-base font-inter font-medium text-gray-body md:w-[706px] text-center">
          Como uma entusiasta do Software Development, meu campo de atuação
          reside no dinâmico mundo do Web Development, atuando com{' '}
          <strong>ReactJS</strong>, <strong>React Native</strong> e{' '}
          <strong>TypeScript</strong>. Utilizando estas tecnologias, busco
          integrar inovação e funcionalidade em cada projeto que abraço.
        </p>
        <p className="text-base font-inter font-medium text-gray-body md:w-[706px] text-center">
          Com um fervor pela criação de soluções web elegantes, navego
          habilmente pelo cenário em constante evolução do desenvolvimento de
          software. Minha jornada consiste em transformar conceitos em código,
          projetar experiências de usuário fluidas e continuamente desafiar os
          limites do que é possível na web.
        </p>
      </div>
    </section>
  )
}
