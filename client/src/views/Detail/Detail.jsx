import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import styles from "./Detail.module.css"

const Detail = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/pokemons/${id}`)
            .then(response => setPokemon(response.data))
            .catch(error => console.error(error))
    }, [id]);

    return (

        <div className={styles.detail}>
            
            <img src={pokemon.image}  alt={pokemon.name}/>
            <p>Name: {pokemon.name}</p>
            <p>ID: {pokemon.id}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
            <p>Speed: {pokemon.speed}</p>
            <p>Types: {pokemon.types}</p>

        </div>

    );
};

export default Detail