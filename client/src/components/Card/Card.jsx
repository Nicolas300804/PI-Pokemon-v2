//import { Link } from "react-router-dom"
import style from "./Card.module.css"
const Card = ({image, name, types}) => {
    return (
        <div className={style.card}>
            

            <img src={image}  alt={name}/>
            <p>Name: {name}</p>
            {/* <p>ID: {props.id}</p>
            <p>HP: {props.hp}</p>
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
            <p>Speed: {props.speed}</p> */}
            <p>Types: {types}</p>
            
        </div>
    )
}

export default Card