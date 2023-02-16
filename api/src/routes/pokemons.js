const { Router } = require ("express")
const {getAllApi} = require ("../controllers/PokemonController")

const router = Router()

router.get('/', async (req, res) => {
    try {
        const {name} = req.query;    //cuando hago el search en el front
        let allPokemon;
        if(name) { 
            allPokemon = await getPokeByName(name)            
        }else{
            allPokemon = await getAllApi() 
        }
        if (allPokemon.error) {
            throw new Error(allPokemon.error)
        }
        console.log("Lista de Pokemon");
        return res.status(200).json(allPokemon)
    } catch (error) {
        console.log("error no se que");
        return res.status(404).send(error)
    }
});





module.exports = router

// router.get('/', async (req, res) => {
//     try {
//         const {name} = req.query;    //cuando hago el search en el front
//         let allPokemon;
//         if(name) { 
//             allPokemon = await getPokeByName(name)            
//         }else{
//             allPokemon = await getAllApi()
//         }
//         if (allPokemon.error) {
//             throw new Error(allPokemon.error)
//         }
//         return res.status(200).json(allPokemon)
//     } catch (error) {
//         return res.status(404).send(error)
//     }
// });