const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getAllApi = async () => {
  
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/offset=0&limit=2"
    );
    const pokemons = response.data.results;
    const linkToPokemon = [];
    
    pokemons.map((pokemon) =>
    linkToPokemon.push(axios(pokemon.url).then((response) => response.data))
    );
    const pokemonsFromApi = Promise.all(linkToPokemon).then((response) =>
    response.map((pokemon) => {
        console.log("Lista de pokemon controller");
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
      })
    );
    if (!pokemonsFromApi) {
      throw new Error("Pokemon no encontrado en la API")
    }
    return pokemonsFromApi
};

module.exports = {
  getAllApi
};
