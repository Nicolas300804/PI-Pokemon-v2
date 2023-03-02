import axios from "axios";
import React from "react";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";
//import { getPokemonsByID } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [detailPKM, setDetailPKM] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((response) => setDetailPKM(response.data)) //yo accedo al id del pokemon a detallar
      .catch((error) => console.error(error));
    
  }, [id]);

  return (
    <div className={style.detail}>
      {detailPKM && (
        <div>
          <p>ID: {detailPKM.id}</p>
          <p>Name: {detailPKM.name}</p>
          <img src={detailPKM.image} alt={detailPKM.name} />
          <p>HP: {detailPKM.hp}</p>
          <p>Attack: {detailPKM.attack}</p>
          <p>Defense: {detailPKM.defense}</p>
          <p>Speed: {detailPKM.speed}</p>
          <p>Types: {detailPKM.types}</p>
          <Link to={"/home"}>
            <button>Volver</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Detail;

// <img src={pokemon.image}  alt={pokemon.name}/>
// <p>Name: {pokemon.name}</p>
// <p>ID: {pokemon.id}</p>
// <p>HP: {pokemon.hp}</p>
// <p>Attack: {pokemon.attack}</p>
// <p>Defense: {pokemon.defense}</p>
// <p>Speed: {pokemon.speed}</p>
// <p>Types: {pokemon.types}</p>
