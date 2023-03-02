import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
//export const GET_POKEMONSBYID = "GET_POKEMONSBYID"
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_TYPES = "GET_TYPES";

export const getPokemons = () => {
  return async function (dispatch) {
    const apiPokemon = await axios.get("http://localhost:3001/pokemons");
    const pokemons = apiPokemon.data;
    dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
  };
};

// export const getPokemonsByID = (id) => {
//     return async function (dispatch) {
//       try {
//         const apiPokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
//         
//         dispatch({
//             type: GET_POKEMONSBYID,
//             payload: apiPokemon.data });

//       } catch (error) {
//            
//       }
//     };
//   };

export const filterByType = (payload) => {
  
  return function (dispatch) {
    dispatch({
      type: FILTER_BY_TYPE,
      payload,
    });
  };
};

export const filterCreated = (payload) => {
  return function (dispatch) {
    dispatch({
      type: FILTER_CREATED,
      payload,
    });
  };
};

export const orderByName = (payload) => {
  return function (dispatch) {
    dispatch({
      type: FILTER_BY_NAME,
      payload,
    });
  };
};

export const orderByAttack = (payload) => {
  return function (dispatch) {
    dispatch({
      type: FILTER_BY_ATTACK,
      payload,
    });
  };
};

export const getNamePokemons = (name) => {
  return function (dispatch) {
    dispatch({
      type: SEARCH_BY_NAME,
      payload: name,
    });
  };
};

export const getTypes = () => {
  return async function (dispatch) {
      const apiData = await axios.get(
          "http://localhost:3001/types"
      );
      const types = apiData.data;
      dispatch({ type: GET_TYPES, payload: types })
  }
}
