import CardContainer from "../../components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";
const Home = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])
    // cuando se monta que haga el dispatch
    return(
        <div>
            <h1>Esta es la Home </h1>
            <CardContainer/>
        </div>
    )
}

export default Home;