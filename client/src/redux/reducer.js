import { GET_POKEMONS, FILTER_BY_TYPE, FILTER_CREATED, FILTER_BY_NAME, FILTER_BY_ATTACK, SEARCH_BY_NAME, GET_TYPES } from "./actions";


const initialState={
    TotalPokemons:[],
    allpokemons:[],
    Types:[]
    
    
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
      case GET_POKEMONS:
        return {
            ...state, 
            TotalPokemons:action.payload,
            allpokemons:action.payload
        }
        case FILTER_BY_TYPE:
            /* Crear una copia de la matriz state.allpokemons. */
            const allPokemons = state.allpokemons
            /* Filtrando los pokemon por tipo. */
            const PokemonsByTypeFiltered = action.payload === "all" ? allPokemons : allPokemons.filter(el => el.types.includes(action.payload))
            return {
                ...state,
                TotalPokemons : PokemonsByTypeFiltered 
            }
        case FILTER_CREATED:
            const allPokemons2 = state.allpokemons
            const createdFilter = action.payload === "Db" ? allPokemons2.filter(el => el.createdAt) : allPokemons2.filter(el=>!el.createdAt)
            return{
                ...state,
                TotalPokemons: createdFilter
            }
        case FILTER_BY_NAME:
            let sortedArr = action.payload === "asc" ? state.TotalPokemons.sort(function(a, b){
                if (a.name > b.name){
                    return 1;
                }
                if (b.name > a.name){
                    return -1;
                }
                return 0
            }) :
            state.TotalPokemons.sort(function(a,b){
                if (a.name > b.name) {
                    return-1
                }
                if (b.name>a.name) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                TotalPokemons: sortedArr
            }
        case FILTER_BY_ATTACK:
            let sortedArrATTACK = action.payload === "Ascendent" ? state.TotalPokemons.sort(function(a, b){
                if (a.attack > b.attack){
                    return 1;
                }
                if (b.attack > a.attack){
                    return -1;
                }
                return 0
            }) :
            state.TotalPokemons.sort(function(a,b){
                if (a.attack > b.attack) {
                    return-1
                }
                if (b.name>a.name) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                TotalPokemons: sortedArrATTACK
            }
        case SEARCH_BY_NAME:
            return{
                ...state,
                TotalPokemons: state?.allpokemons.filter(pokemon => pokemon.name.includes(action.payload)) //hace un filtro sobre los pokemones que me trae este array para buscar el nombre
            }
        // case GET_POKEMONSBYID:
        //     return{
        //         ...state,
        //         Detail:action.payload
        //     }
        case GET_TYPES:
            return {
                ...state,
                Types: action.payload
            }
        default:
            return {...state};
    }
}

export default rootReducer