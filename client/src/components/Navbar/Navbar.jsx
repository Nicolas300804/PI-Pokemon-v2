import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

const Navbar = () =>{
    return(
        <div className={style.navbar}>
            <Link to="/home">Home</Link>
            <Link to="/create">Form</Link>
        </div>
    )
}

export default Navbar
