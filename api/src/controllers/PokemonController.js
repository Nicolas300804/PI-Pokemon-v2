const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getAllApi = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    const pokemons = response.data.results;

    const linkToPokemon = [];

    pokemons.map((pokemon) =>
      linkToPokemon.push(axios(pokemon.url).then((response) => response.data))
    );

    const PokemonFromApi = Promise.all(linkToPokemon).then((response) =>
      response.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.font_default,
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
          types: pokemon.types.map((r) => r.type.name),
        };
      }));
      console.log("Lista de pokemons")

    if(!PokemonFromApi) throw new Error ("No encontramos pokemons en la api")
    return PokemonFromApi
  } catch (error) {
    return error.message
  }
};

module.exports = {
  getAllApi,
};
