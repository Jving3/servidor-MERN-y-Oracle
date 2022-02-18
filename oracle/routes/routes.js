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
    sql = "select * from person where (USERNAME = 'jving' and CANT = 50)";

    let result = await BD.Open(sql, [], false);
    console.log(personas);

    result.rows.map(person=>{

        let useSchema ={
            "ID": person[0],
            "USERNAME": person[1],
            "FIRSTNAME": person[2],
            "LASTNAME": person[3],
            "CANT": person[4],
        }
        
        personas.push(useSchema)
    })

    res.json(personas);
})

//READ PRODUCCION
router.get('/getProd', async (req, res) => {
    let produccion=[];
    sql = "select * from produccion where (FECHA = 'jueves, 7 de octubre de 2021' and USUARIO = 'kelly crespo')";

    let result = await BD.Open(sql, [], false);
    console.log(produccion);

    result.rows.map(producto=>{

        let useSchema ={
            "USUARIO": producto[2],
            "ACTIVIDAD": producto[1],
            "COMPLETED_QUANTITY": producto[6],
            "FECHA": producto[5],
        }
        
        produccion.push(useSchema)
    })

    res.json(produccion);
})




module.exports = router;