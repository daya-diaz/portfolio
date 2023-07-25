import pokedexCardImage from '../Assets/pokedex-card.png';
import dtMoneyCardImage from '../Assets/dtmoney-card.png';
import foodieCardImage from '../Assets/foodie-card.png';

const projects = [
  {
    id: 1,
    name: 'Pokedex',
    urlImage: pokedexCardImage,
    githubLink: 'https://github.com/daya-diaz/pokedex',
    techLinks: ['Angular']
  },
  {
    id: 2,
    name: 'Foodie',
    urlImage: foodieCardImage,
    githubLink: 'https://github.com/daya-diaz/foodie',
    techLinks: ['React']
  },
  {
    id: 32,
    name: 'DT Money',
    urlImage: dtMoneyCardImage,
    githubLink: 'https://github.com/daya-diaz/ignite-dtmoney',
    techLinks: ['React', 'TypeScript']
  },
];

export default projects;