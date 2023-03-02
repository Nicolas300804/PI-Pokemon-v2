const { Router } = require("express");
const { getAllApi, pokeBYId, getPokeByName, postPokedb, getPokeApi_Or_DB } = require("../controllers/PokemonController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let allPokemon;

    if (name) {
      //cuando hago el search en el front
      allPokemon = await getPokeByName(name); // si hay nombre me mandas el pokemon con el nombre
    } else {
      allPokemon = await getAllApi(); // si no mandas todos
    }
    if (allPokemon.error) {
      throw new Error(allPokemon.error);
    }
    return res.status(200).json(allPokemon);
  } catch (error) {
    return res.status(404).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const pokeFoundId = await pokeBYId(id);
    if (pokeFoundId) return res.status(200).json(pokeFoundId);
  } catch (error) {
    
    return res.status(404).send("Pokemon not found");
  }
});

router.post('/', async (req, res) => {
  try {
    const pokemonToPost = await postPokedb(req.body);
    if (pokemonToPost.error) throw new Error(pokemonToPost.error);
    return res.status(200).json(pokemonToPost);
} catch (error) {
    return res.status(404).send(error);
}

});

module.exports = router;
