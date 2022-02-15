const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');

router.get('/', (req, res) => {

    res.status(200).json({
        message:'Este es un mensaje del servidor'
    })

});

//READ PERSONAS
router.get('/getUsers', async (req, res) => {
    let personas=[];
    sql = "select * from person";

    let result = await BD.Open(sql, [], false);
    console.log(personas);

    result.rows.map(person=>{

        let useSchema ={
            "CODU": person[0],
            "USERNAME": person[1],
            "FIRSTNAME": person[2],
            "LASTNAME": person[3],
        }
        
        personas.push(useSchema)
    })

    res.json(personas);
})

//READ PRODUCCION
router.get('/getProd', async (req, res) => {
    let produccion=[];
    sql = "select * from produccion";

    let result = await BD.Open(sql, [], false);
    console.log(produccion);

    result.rows.map(producto=>{

        let useSchema ={
            "ACTIVIDAD": producto[1],
            "COMPLETED_QUANTITY": producto[6],
        }
        
        produccion.push(useSchema)
    })

    res.json(produccion);
})




module.exports = router;