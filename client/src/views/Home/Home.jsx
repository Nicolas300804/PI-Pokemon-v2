import CardContainer from "../../components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getPokemons } from "../../redux/actions";
import { filterByType, filterCreated, orderByName, orderByAttack } from "../../redux/actions";
import style from "./Home.module.css"
//import SearchBar from "../../components/SearchBar/SearchBar";
const Home = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])
    // cuando se monta que haga el dispatch
    const [orden, setOrden] =useState(" ")
    const [attack, setAttack] =useState(" ")

    function handleFilterdByType (event) {
        dispatch(filterByType(event.target.value))
    }
    function handleFilterCreated (event) {
        dispatch(filterCreated(event.target.value))
    }
    function handleOrderByName (event) {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setOrden(`Ordenado ${event.target.value}`)
    }
    function handleOrderByAttack (event){
        event.preventDefault();
        dispatch(orderByAttack(event.target.value))
        setAttack(`Ordenado_ataque ${event.target.value}`)
    }

    // function handleSearch (event){
    //     dispatch(getNamePokemons(event.target.value))
    // }
    return(
        <div className={style.home}>
            
            <h1 className={style.pokedex}>Bienvenido a la Pokedex </h1>
            {/* <div>
                <SearchBar 
                    handleSearch={handleSearch}
                />
            </div> */}
            <div className={style.filtros}>
                <div className={style.abc}>
                    <h4>Orden Alfabetico</h4>
                    <select onChange={event=>handleOrderByName(event)}>
                        <option value="asc">Ascendente</option>
                        <option value= "desc">Descendente</option>
                    </select>
                </div>
                <div className={style.tipos}>
                    <h4>Filtrado por tipos</h4>
                    <select onChange={event=>handleFilterdByType(event)}>
                        <option value="all">Todos</option>
                        <option value="ground">Ground</option>
                        <option value="steel">Steel</option>
                        <option value="dark">Dark</option>
                        <option value="flying">Flying</option>
                        <option value="rock">Rock</option>
                        <option value="water">Water</option>
                        <option value="psychic">Psychic</option>
                        <option value="unknown">Unknown</option>
                        <option value="poison">Poison</option>
                        <option value="fire">Fire</option>
                        <option value="ice">Ice</option>
                        <option value="shadow">Shadow</option>
                        <option value="normal">Normal</option>
                        <option value="bug">Bug</option>
                        <option value="grass">Grass</option>
                        <option value="dragon ">Dragon</option>
                        <option value="fairy">Fairy</option>
                        <option value="fighting">Fighting</option>
                        <option value="ghost">Ghost</option>
                        <option value="electric">Electric</option>
                    </select>
                </div>
                <div className={style.created}>
                    <h4>Filtrar por creados</h4>
                    <select onChange={event=>handleFilterCreated(event)}>
                        <option value="default" disabled>Filter by source</option>
                        <option value="all">Todos</option>
                        <option value="Api">Api</option>
                        <option value="Db">Db</option>
                    </select>
                </div>
                <div className={style.ataque}>
                    <h4>Ordenar por ataque</h4>
                    <select onChange={event=>handleOrderByAttack(event)}>
                        <option value="default" disabled>Order by attack</option>
                        <option value="Ascendent">Ascendent</option>
                        <option value="Descendent">Descendent</option>
                    </select>
                </div>    
                
            </div>
            <CardContainer/>
        </div>
    )
}

export default Home;