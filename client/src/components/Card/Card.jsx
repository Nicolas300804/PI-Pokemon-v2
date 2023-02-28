import { Link } from "react-router-dom"
import style from "./Card.module.css"
const Card = ({image, name, types, id}) => {
    return (
        <div className={style.card}>
            
            <Link to ={`/detail/${id}`}>
            <img src={image}  alt={name}/>
            </Link>
            <p>Name: {name}</p>
            {/* <p>ID: {id}</p>
            <p>HP: {props.hp}</p>
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
        <p>Speed: {props.speed}</p> */}
            <p>Types: {types}</p>
            
        </div>
    )
}

export default Card