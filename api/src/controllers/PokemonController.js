const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getAllApi = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
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
          image: pokemon.sprites.front_default,
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
          types: pokemon.types.map((r) => r.type.name),
        };
      })
    );
    console.log("Lista de pokemons");

    if (!PokemonFromApi) throw new Error("No encontramos pokemons en la api");
    return PokemonFromApi;
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
    console.log(error);
    return error;
  }
};

const getPokeApi_Or_DB = async () => {
  try {
    const pokeApi = await getAllApi();
    const pokeDB = await getPokeDB();
    return [...pokeApi, ...pokeDB];
  } catch (error) {
    console.log(error);
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
      //console.log("Te muestro los pokemon con el id", id);
      return pokefound;
    } else {
      const pokemon = await Pokemon.findByPk(id, { include: Type });
      if (!pokemon) throw new Error("No hay pokemon con ese id");
      return pokemon;
    }
  } catch (error) {
    return error.message;
  }
};

const getPokeByName = async (name) => {
  try {
    const searchPokeNameDB = await Pokemon.findOne({
      where: { name }, //encuentra primera coincidencia
      include: { model: Type },
    });
    if (searchPokeNameDB) {
      let pokedbName = {
        id: searchPokeNameDB.id,
        name: searchPokeNameDB.name,
        image: searchPokeNameDB.sprites.front_default,
        hp: searchPokeNameDB.stats[0].base_stat,
        attack: searchPokeNameDB.stats[1].base_stat,
        defense: searchPokeNameDB.stats[2].base_stat,
        speed: searchPokeNameDB.stats[5].base_stat,
        types:
          searchPokeNameDB.types.length < 2
            ? [searchPokeNameDB.types[0]]
            : [searchPokeNameDB.types[0], searchPokeNameDB.types[1]],
      };
      return pokedbName;
    } else {
      const searchPokeapiName = await axios.get(
        `${`https://pokeapi.co/api/v2/pokemon/`}${name.toLowerCase()}`
      ); //obtengo el pokemon de la url/name
      const foundPokeapiName = objPokeApi(searchPokeapiName.data);
      console.log("Te muestro el Pokemon con el nombre de", name);
      console.log('foundPokeapi', foundPokeapiName)
      return foundPokeapiName;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

const objPokeApi = (poke) => {
  const objPokeapi = {
    id: poke.id,
    name: poke.name,
    life: poke.stats[0].base_stat,
    attack: poke.stats[1].base_stat,
    defense: poke.stats[2].base_stat,
    speed: poke.stats[5].base_stat,
    image: poke.sprites.front_default,
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

const postPokedb = async (pokeData) => {
  try {
    /* Destrucción del objeto pokeData. */
    const {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      types,
    } = pokeData;
    const myPoke = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      sprite,
    });
    const pokeTypedb = await Type.findAll({
      where: { name: types }, //donde el name coincida con los types que me pasan
    });

    let createdMyPoke = myPoke.addType(pokeTypedb);
    return createdMyPoke;
  } catch (error) {
    console.log(error);
    return error;
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
