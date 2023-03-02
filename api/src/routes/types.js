const {Router} = require("express")
const {getTypesTotal} = require ("../controllers/typeController")

const router = Router();

router.get('/', async (req, res) => {
    try{
        const currentTypes = await getTypesTotal();
        if(currentTypes.error){
            throw new Error (currentTypes.error)
        }
        return res.status(200).json(currentTypes);
    }catch(error){
        return res.status(404).json('No se encontraron tipos')
    }
});

module.exports=router