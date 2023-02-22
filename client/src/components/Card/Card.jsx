import style from "./Card.module.css"
const Card = (props) => {
    return (
        <div className={style.card}>
            <img src={props.image}  alt={props.name}/>
            <p>ID: {props.id}</p>
            <p>Name: {props.name}</p>
            {/* <p>HP: {props.hp}</p>
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
            <p>Speed: {props.speed}</p>
            <p>Types: {props.types}</p> */}
        </div>
    )
}

export default Card