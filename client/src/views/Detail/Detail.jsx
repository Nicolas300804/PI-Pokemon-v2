import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsByID } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
    const {id} = useParams()
    
    const dispatch = useDispatch()
    const myPokemon = useSelector((state)=>state.Detail)
    console.log(id);
    useEffect(()=>{
        dispatch(getPokemonsByID(id)) //yo accedo al id del pokemon a detallar
    },[id])

    useEffect(()=>{
        console.log(myPokemon)
    },[myPokemon])


    return (
        <div>
            <img src={myPokemon.image}  alt={myPokemon.name}/>
            <p>Name: {myPokemon.name}</p>
            <p>ID: {myPokemon.id}</p>
            <p>HP: {myPokemon.hp}</p>
            <p>Attack: {myPokemon.attack}</p>
            <p>Defense: {myPokemon.defense}</p>
            <p>Speed: {myPokemon.speed}</p>
            <p>Types: {myPokemon.types}</p>
            <Link to= {"/home"}>
                <button>Volver</button>
            </Link>
        </div>
    )
};

export default Detail


            // <img src={pokemon.image}  alt={pokemon.name}/>
            // <p>Name: {pokemon.name}</p>
            // <p>ID: {pokemon.id}</p>
            // <p>HP: {pokemon.hp}</p>
            // <p>Attack: {pokemon.attack}</p>
            // <p>Defense: {pokemon.defense}</p>
            // <p>Speed: {pokemon.speed}</p>
            // <p>Types: {pokemon.types}</p>