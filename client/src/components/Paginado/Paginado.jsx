import React from "react";
import style from "./Paginado.module.css"

const Paginado =({pokemonPerPage, pokemons, paginado})=>{ // Me traigo el estado PokemonsPerPage, la constante que me muestra todos los pokemon y la constante paginado del componente Home
    const pageNumbers = [] // creo una constante con un arreglo vacio 
    for (let i = 1; i <= Math.ceil(pokemons/pokemonPerPage); i++) { //recorro un arreglo en el que tomo un numero redondo que resulta de dividir todos los personajes por los personajes por pagina que yo quiero 

        pageNumbers.push(i) //pusheo todo en mi arreglo de Page numbers
    }
    return(
        <nav className={style.nave}>
            <ul className={style.paginado}>
                {pageNumbers && //si tengo algo en el arreglo lo mapea y me devuleve cada numerito que me devuelva el paginado
                pageNumbers.map(number=>(
                    <li className={style.number} key={number}>
                    <a onClick={()=> paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginado
