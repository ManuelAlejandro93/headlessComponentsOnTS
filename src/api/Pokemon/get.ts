import axios from 'axios';

import {
  SinglePokemonInterface,
  UsefulInApplicationPokemon
} from '@/interfaces';

export const getAPI = async (
  pokemonID: number
): Promise<UsefulInApplicationPokemon> => {
  let { data } = await axios.get<SinglePokemonInterface>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonID}#`
  );

  return {
    id: data.id,
    name: data.name,
    images: {
      imageDefaultFront: data.sprites.front_default,
      imageShinyFront: data.sprites.front_shiny
    }
  };
};
