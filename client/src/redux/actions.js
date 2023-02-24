import axios from "axios"
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONSBYID = "GET_POKEMONSBYID"

export const getPokemons = () => {
  return async function (dispatch) {
    const apiPokemon = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apiPokemon.data    
    dispatch({ 
        type: GET_POKEMONS, 
        payload: pokemons });
  };
};

export const getPokemonsByID = (id) => {
    return async function (dispatch) {
      const apiPokemon = await axios.get(`http://localhost:3001/pokemons${id}`);
      const pokemon = apiPokemon.data  
      dispatch({ 
          type: GET_POKEMONSBYID, 
          payload: pokemon });
    };
  };
