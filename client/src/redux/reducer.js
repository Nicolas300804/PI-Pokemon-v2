import { GET_POKEMONS } from "./actions";


const initialState={
    TotalPokemons:[]
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
      case GET_POKEMONS:
        return {...state, TotalPokemons:action.payload}
        default:
            return {...state};
    }
}

export default rootReducer