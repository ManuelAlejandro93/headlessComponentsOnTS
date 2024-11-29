import { PokemonUsefulData } from '@/interfaces';

const Pokemon1: PokemonUsefulData = {
  id: 1,
  name: 'bulbasaur',
  images: {
    imageDefaultFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    imageShinyFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
  }
};

const Pokemon2: PokemonUsefulData = {
  id: 2,
  name: 'ivysaur',
  images: {
    imageDefaultFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    imageShinyFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png'
  }
};

const Pokemon3: PokemonUsefulData = {
  id: 3,
  name: 'venusaur',
  images: {
    imageDefaultFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    imageShinyFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png'
  }
};

const Pokemon4: PokemonUsefulData = {
  id: 4,
  name: 'charmander',
  images: {
    imageDefaultFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    imageShinyFront:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png'
  }
};

export const PokemonDataArray: PokemonUsefulData[] = [
  Pokemon1,
  Pokemon2,
  Pokemon3,
  Pokemon4
];
