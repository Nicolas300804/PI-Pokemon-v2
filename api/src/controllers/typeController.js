const axios = require('axios');
const {Type} = require("../db")

const getTypesTotal = async () => {
    try {
        const foundTypesDB = await Type.findAll();
        if(foundTypesDB.length === 0){
            const typesPokeapi = await axios.get("https://pokeapi.co/api/v2/type");
            let typesCreatedDB = typesPokeapi.data.results.map(type => Type.create({name: type.name}));  //me guarda types en DB
            typesCreatedDB = await axios.all(typesCreatedDB); //axios.all se usa para esperar que se completen todas las operaciones de la DB y seguir con el resto del flujo
            const getTypesPokeapi = getTypes(typesCreatedDB); //llamado a la funcion getTypes()
            return getTypesPokeapi;
        }else{
            const getTypesPokeDB = getTypes(foundTypesDB);
            return getTypesPokeDB;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getTypes = (array) => {
    let types = array.map( type => type.name); 
    return types;
}
/* toma un array que devuelve arriba y los mapea a un array de solo los nombres de los tipos. Luego devuelve el array resultante. */

module.exports= {getTypesTotal}
