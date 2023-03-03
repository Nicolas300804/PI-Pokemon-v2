const axios = require("axios");
const { Pokemon, Type } = require("../db");


const getAllApi = async () => {
  const pokemones = [];
  let PokemonsURL = "https://pokeapi.co/api/v2/pokemon";

  try {
    while (pokemones.length <= 80) {
      const { data } = await axios.get(PokemonsURL);
      pokemones.push(...data.results);

      PokemonsURL = data.next;
    }
    const promises = await Promise.all(
      pokemones.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return response.data;
      })
    );

    const pokemonsAPI = promises.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        types: pokemon.types.map((r) => r.type.name),
      };
    });
    return pokemonsAPI;
  } catch (error) {
    
    return error.message;
  }
};

// Esta es para que me traiga los Pokemon de la base de datos
const getPokeDB = async () => {
  try {
    return await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
      },
    });
  } catch (error) {
    
    return error;
  }
};

const getPokeApi_Or_DB = async () => {
  try {
    const pokeApi = await getAllApi();
    const pokeDB = await getPokeDB();
    return [...pokeDB, ...pokeApi];
  } catch (error) {
    
    return error;
  }
};

const pokeBYId = async (id) => {
  try {
    if (id <= 1008) {
      let response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let data = response.data;
      let pokefound = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        types: data.types.map((r) => r.type.name),
      };
      
      return pokefound;
    } else {
      const pokemon = await Pokemon.findByPk(id, { include: Type });
      if (!pokemon) throw new Error("No hay pokemon con ese id");
      return pokemon;
      //Busca el pokemon en La DB con su respectivo tipo
    }
  } catch (error) {
    return error.message;
  }
};

const getPokeByName = async (name) => {
  try {
    const searchPokeNameDB = await Pokemon.findOne({
      where: { name }, //encuentra primera coincidencia
      include: [Type],
      // attributes: {
      //   exclude: ["createdAt", "updateAt"],
      // },
    });

    if (searchPokeNameDB) {
      let pokedbName = {
        id: searchPokeNameDB.id,
        name: searchPokeNameDB.name,
        hp: searchPokeNameDB.hp,
        attack: searchPokeNameDB.attack,
        defense: searchPokeNameDB.defense,
        speed: searchPokeNameDB.speed,
        sprite: searchPokeNameDB.sprite,
        types:
          searchPokeNameDB.types.length < 2
            ? [searchPokeNameDB.types[0]] // Si el Pokémon tiene un solo tipo, el objeto de tipo se asigna como un array con un solo elemento.
            : [searchPokeNameDB.types[0], searchPokeNameDB.types[1]], //Si el Pokémon tiene dos tipos, se asigna como un array con ambos elementos.
      };
      return pokedbName;
    } else {
      const searchPokeapiName = await axios.get(
        `${`https://pokeapi.co/api/v2/pokemon/`}${name.toLowerCase()}` 
      ); //obtengo el pokemon de la url/name
      const foundPokeapiName = objPokeApi(searchPokeapiName.data);
      
      return foundPokeapiName;
    }
  } catch (error) {
    
    return error;
  }
};

const objPokeApi = (poke) => {
  const objPokeapi = {
    id: poke.id,
    name: poke.name,
    image: poke.sprites.front_default,
    hp: poke.stats[0].base_stat,
    attack: poke.stats[1].base_stat,
    defense: poke.stats[2].base_stat,
    speed: poke.stats[5].base_stat,
    types:
      poke.types.length < 2
        ? [{ name: poke.types[0].type.name }]
        : [
            { name: poke.types[0].type.name },
            { name: poke.types[1].type.name },
          ],
  };
  return objPokeapi;
};

const postPokedb = async (pokemon) => {
  try {
    const { name, image, hp, attack, defense, speed, types } = pokemon;
    if (!name || !image || !hp || !attack || !defense)
      throw new Error("Missing information");
    const pokemonToPost = { name, image, hp, attack, defense, speed, types };
    let newPokemon = await Pokemon.create(pokemonToPost);
    newPokemon.addTypes(types);
    return pokemonToPost;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getAllApi,
  getPokeDB,
  getPokeApi_Or_DB,
  pokeBYId,
  getPokeByName,
  postPokedb,
};
