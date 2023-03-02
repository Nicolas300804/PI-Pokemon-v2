import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Paginado  from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import { getNamePokemons } from "../../redux/actions";

const CardContainer = () => {

  const dispatch = useDispatch()
  

  const pokemons = useSelector(state=>state.TotalPokemons)
  
  const [currentPage, setCurrentPage] = useState(1) //guarda en un estado local la pagina actual y arranca en 1 poruq es el inicio
  const [pokemonPerPage, setPokemonPerPage] = useState(12) //guarda en un estado local cuantod pokemons quiero que se vean en la pagina en este caso 12
  const indexOfLastPokemon = currentPage* pokemonPerPage //12
  const indexOfCFirstPokemon= indexOfLastPokemon-pokemonPerPage //0
  const currentPokemons=  pokemons.slice(indexOfCFirstPokemon, indexOfLastPokemon)
  
  function handleSearch (event){
        setCurrentPage(1)
        dispatch(getNamePokemons(event.target.value))
    }

  const paginado=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  return (
    <div className={style.containerCards}>
       <div className={style.searchCards}>
                <SearchBar 
                    handleSearch={handleSearch}
                />
            </div>
      {currentPokemons.map(pokemon=>{
        return <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            types={pokemon.types}
        />
      })}
      <div className={style.PaginadoContainer}>
        <Paginado
        pokemonPerPage={pokemonPerPage} //Estas son las Props
        pokemons={pokemons.length}
        paginado={paginado}
        />
      </div>
    </div>
  );
};

export default CardContainer;
