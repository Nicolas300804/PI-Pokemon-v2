const { Router } = require('express');
// Importar todos los routers;
const RoutePKM = require ("./pokemons")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/pokemons", RoutePKM)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
