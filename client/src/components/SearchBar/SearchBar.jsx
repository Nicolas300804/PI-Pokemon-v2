import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getNamePokemons } from "../../redux/actions";

const SearchBar =()=>{
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleInputChange = (event) =>{
        event.preventDefault()
        setName(event.target.value)
        
    }
    const handleSumbmit = (event)=>{
        event.preventDefault()
        dispatch(getNamePokemons(name))
    }

    return(
        <form  onSubmit={handleSumbmit}>
            <input  type="search" placeholder='Buscar...' onChange={handleInputChange}  />
            <button>Buscar</button>
        </form>
    )
}

export default SearchBar