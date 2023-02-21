const { Router } = require("express");
const { getAllApi, pokeBYId, getPokeByName, postPokedb } = require("../controllers/PokemonController");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let allPokemon;

    if (name) {
      //cuando hago el search en el front
      allPokemon = await getPokeByName(name); // falta crearla
    } else {
      allPokemon = await getAllApi();
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
    //console.log(id);
    console.log("te muestro el pokemon con el id" ,id);
    const pokeFoundId = await pokeBYId(id);
    if (pokeFoundId) return res.status(200).json(pokeFoundId);
  } catch (error) {
    console.log("entro error");
    return res.status(404).send("Pokemon not found");
  }
});

router.post('/', async (req, res) => {
    try {
        const pokeData = req.body
        // console.log('holaaaaa', pokeData)
        await postPokedb(pokeData)
        return res.status(200).send('Pokemon creado con exito')

    } catch (error) {
        res.status(400).send('Fallo al crear el pokemon')
    }
});

module.exports = router;
