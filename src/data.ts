import RangoImg from './assets/rangoProject.png'
import NotesImg from './assets/notesProject.png'
import PokedexImg from './assets/pokedexProject.png'
export interface Project {
  id: number
  title: string
  description: string
  imgSrc: string
  href: string
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
]

export default projects
