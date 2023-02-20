const { Router } = require('express');
// Importar todos los routers;
const RoutePKM = require ("./pokemons")
const TypesPKM = require ("./types")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/pokemons", RoutePKM)
router.use("/types", TypesPKM) 
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
