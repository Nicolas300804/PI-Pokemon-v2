import React, { useState, useEffect } from "react";
import axios from "axios";
import { validate } from "./validate";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";
import styles from "./Form.module.css";
//import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [pokeData, setPokeData] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    /*   name: "",
          image: "",
           hp: "",
          attack: "",
          defense: "",
          speed: "",
          height: "",
          weight: "",
          types: "", */
  });

  const [disableSubmit, setDisableSubmit] = useState(false);  //Estado para que el Botón de submit este desabilitado si hay un campo incorrecto
  const handleInputChange = (e) => {
    setPokeData({                                //cada vez que se ejecute esta funcion a mi estado pokedata
      ...pokeData,                               //agragale lo que tiene y agregale lo que esta modificando
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...pokeData,
        [e.target.name]: e.target.value,
      })
    );
    const value = e.target.value;
    const isInputValid = value !=="";
    setDisableSubmit(!isInputValid)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(errors).length === 0) {
        await axios.post("http://localhost:3001/pokemons/", pokeData);
        alert("Pokemon creado correctamente");
      } else {
        alert("Falta Información o falta completar campos");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect=(e)=>{
    setPokeData({
      ...pokeData,
      types: [...pokeData.types, e.target.value]
    })
  }

  let types = useSelector((state) => state.Types);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <form className={styles.formPoke} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        onChange={handleInputChange}
        value={pokeData.name}
      ></input>
      <p className={styles.error}>{errors.name}</p>
      <label htmlFor="image">Image</label>
      <input
        name="image"
        id="image"
        onChange={handleInputChange}
        value={pokeData.image}
      ></input>
      <p className={styles.error}>{errors.image}</p>
      <label htmlFor="hp">Hp</label>
      <input
        name="hp"
        id="hp"
        onChange={handleInputChange}
        value={pokeData.hp}
      ></input>
      <p className={styles.error}>{errors.hp}</p>
      <label htmlFor="attack">Attack</label>
      <input
        name="attack"
        id="attack"
        onChange={handleInputChange}
        value={pokeData.attack}
      ></input>
      <p className={styles.error}>{errors.attack}</p>
      <label htmlFor="defense">Defense</label>
      <input
        name="defense"
        id="defense"
        onChange={handleInputChange}
        value={pokeData.defense}
      ></input>
      <p className={styles.error}>{errors.defense}</p>
      <label htmlFor="speed">Speed</label>
      <input
        name="speed"
        id="speed"
        onChange={handleInputChange}
        value={pokeData.speed}
      ></input>
      <p className={styles.error}>{errors.speed}</p>

      <label htmlFor="types">Types</label>

      <select
        multiple={true}
        value={pokeData.types}
        name="Types"
        onChange={handleSelect}
      >
        {types.map((type) => (
          <option  value={type.name}>
            {type.name}
          </option>
        ))}
        {/* <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon ">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option> */}
      </select>
      <button type="submit" disabled={disableSubmit}>Create</button>

      {/* <ol>
        <li>
        Normal
        </li>
        <li>
        Fighting
        </li>
        <li>
        Flying
        </li>
        <li>
        Poison
        </li>
        <li>
        Ground
        </li>
        <li>
        Rock
        </li>
        <li>
        Bug
        </li>
        <li>
        Ghost
        </li>
        <li>
        Steel
        </li>
        <li>
          Fire
        </li>
        <li>
          Water
        </li>
        <li>
          Grass
        </li>
        <li>
          Electric
        </li>
        <li>
          Psychic
        </li>
        <li>
          Ice
        </li>
        <li>
          Dragon
        </li>
        <li>
          Dark
        </li>
        <li>
          Fairy
        </li>
        <li>
          Unknown
        </li>
        <li>
          Shadow
        </li>
      </ol> */}
    </form>
  );
};
export default Form;
