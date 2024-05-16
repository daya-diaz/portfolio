import RangoImg from './assets/rangoProject.png'
import NotesImg from './assets/notesProject.png'
import PokedexImg from './assets/pokedexProject.png'
import TimerImg from './assets/timerProject.png'
export interface Project {
  id: number
  title: string
  description: string
  imgSrc: string
  href: string
}

export interface Education {
  id: number
  title: string
  institute: string
  resume: string
  startAt: string
  finishedAt: string
  certificateUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'RangoList',
    description:
      'Site que consulta uma DB e exibe uma lista de restaurantes e seus cardápios.',
    imgSrc: RangoImg,
    href: 'https://github.com/daya-diaz/goomerRangoList',
  },
  {
    id: 2,
    title: 'Pokédex',
    description:
      'Pokédex que mostra os 300 primeiros pokémons e suas informações.',
    imgSrc: PokedexImg,
    href: 'https://pokedex-maino-ten.vercel.app/',
  },
  {
    id: 3,
    title: 'Notes',
    description: 'Aplicação para criação de notas digitadas e/ou faladas.',
    imgSrc: NotesImg,
    href: 'https://github.com/daya-diaz/nlw-expert-notes',
  },
  {
    id: 4,
    title: 'Ignite Timer',
    description:
      'Aplicação de Timer utilizando Local Storage, Context APIs e Reducer.',
    imgSrc: TimerImg,
    href: 'https://02-ignite-timer-ashen.vercel.app/',
  },
]

const educations: Education[] = [
  {
    id: 2,
    title: 'NLW - Expert',
    institute: 'RocketSeat',
    resume:
      'Evento onde foi desenvolvido uma aplicação de criação de notas que oferece aos usuários a capacidade de criar notas digitando ou gravando áudios, os quais são posteriormente transcritos utilizando uma API de reconhecimento de voz.',
    startAt: 'JAN 2024',
    finishedAt: 'JAN 2024',
    certificateUrl:
      'https://app.rocketseat.com.br/certificates/14f6bec4-7132-43d2-b2b0-ac036f7a9254',
  },
  {
    id: 3,
    title: 'NLW - Unite',
    institute: 'RocketSeat',
    resume:
      'Evento onde foi desenvolvido a apliação de um sistema de gerenciamento de participantes para eventos presenciais na Trilha ReactJS.',
    startAt: 'MAR 2024',
    finishedAt: 'ABR 2024',
    certificateUrl:
      'https://app.rocketseat.com.br/certificates/3fe8a27f-b723-4bac-bedc-85e0082398a6',
  },
  {
    id: 5,
    title: 'Figma - Design de Interfaces',
    institute: 'Udemy',
    resume:
      'Curso voltado para criação de interfaces (UI), protótipos de sites e aplicativos com Figma do zero com projetos reais.',
    startAt: 'DEZ 2022',
    finishedAt: 'JAN 2023',
    certificateUrl:
      'https://www.udemy.com/certificate/UC-32fbd189-f96c-45d6-8ab5-5a051c15dfa4/',
  },
  {
    id: 1,
    title: 'Análise e Desenvolvimento de Sistemas',
    institute: 'Descomplica',
    resume:
      'Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Descomplica Faculdade Digital, onde estou adquirindo conhecimentos em diversas áreas de tecnologia. Desde o básico em Desenvolvimento Front-end e Back-end até assuntos mais avançados como DevOps.',
    startAt: 'JUN 2023',
    finishedAt: 'Cursando',
    certificateUrl: '',
  },
  {
    id: 4,
    title: 'ReactJS',
    institute: 'RocketSeat',
    resume:
      "Curso voltado para o Desenvolvimento de Aplicações Web responsivas utilizando a lib ReactJS. Ensina desde o básico como os fundamentos do ReactJS, Criação de SPA's com ReactJS, até o avançado como Next.js App Router e Testes.",
    startAt: 'JAN 2024',
    finishedAt: 'Cursando',
    certificateUrl: '',
  },
]

export { projects as default, educations }
