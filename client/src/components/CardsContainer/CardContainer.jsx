import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import { useSelector } from "react-redux";
const CardContainer = () => {
  

  const pokemons = useSelector(state=>state.TotalPokemons)
  return (
    <div className={style.containerCards}>
      {pokemons.map(pokemon=>{
        return <Card
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
    </div>
  );
};

export default CardContainer;
