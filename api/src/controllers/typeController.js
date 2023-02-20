const axios = require('axios');
const {Type} = require("../db")

const getTypesTotal = async () => {
    try {
        const foundTypesDB = await Type.findAll({
            attributes: ['name']
        });
        if(foundTypesDB.length === 0){
            const typesPokeapi = await axios.get("https://pokeapi.co/api/v2/type");
            let typesCreatedDB = typesPokeapi.data.results.map(type => Type.create({name: type.name}));  //me guarda types en DB
            typesCreatedDB = await axios.all(typesCreatedDB);
            const getTypesPokeapi = getTypes(typesCreatedDB);
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

module.exports= {getTypesTotal}
