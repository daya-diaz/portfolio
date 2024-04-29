export interface Project {
  id: number
  title: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'RangoList',
    description:
      'Site que consulta uma DB e exibe uma lista de restaurantes e seus cardápios.',
  },
  {
    id: 2,
    title: 'Pokédex',
    description:
      'Pokédex que mostra os 300 primeiros pokémons e suas informações.',
  },
  {
    id: 3,
    title: 'Notes',
    description: 'Aplicação para criação de notas digitadas e/ou faladas.',
  },
]

export default projects
