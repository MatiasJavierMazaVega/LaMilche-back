const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
require('./conexion/conexion');
const Estandar = require('./model/estandarModel');
const Veggie = require('./model/veggieModel');
const Postre = require('./model/postreModel');
const Bebida = require('./model/bebidaModel')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<h1>Soy el Back del Proyecto</h1>`)
});


// Insertamos nuevos productos 
app.post('/estandar', async (req, res) => {
    console.log(req.body);
    const { producto, imagen, precio } = req.body;

    
       //4. si no Existe, creamos un nuevo usuario
    const nuevoEstandar = new Estandar(req.body);

 

    await nuevoEstandar.save();

    res.json({
        saludo: 'Dato guardado'
    })


}); 


app.post('/veggie', async (req, res) => {
    console.log(req.body);
    const { producto, imagen, precio } = req.body;

    
       //4. si no Existe, creamos un nuevo usuario
    const nuevoVeggie = new Veggie(req.body);

 

    await nuevoVeggie.save();

    res.json({
        saludo: 'Dato guardado'
    })


}); 

app.post('/postre', async (req, res) => {
    console.log(req.body);
    const { producto, imagen, precio } = req.body;

    
       //4. si no Existe, creamos un nuevo usuario
    const nuevoPostre = new Postre(req.body);

 

    await nuevoPostre.save();

    res.json({
        saludo: 'Dato guardado'
    })


}); 

app.post('/bebida', async (req, res) => {
    console.log(req.body);
    const { producto, imagen, precio } = req.body;

    
       //4. si no Existe, creamos un nuevo usuario
    const nuevoBebida = new Bebida(req.body);

 

    await nuevoBebida.save();

    res.json({
        saludo: 'Dato guardado'
    })


}); 
// obtenemos toda la lista de clientes 
app.get('/estandar', async (req, res) => {

    const estandar = await Estandar.find({},
        {
            "producto": 1,
            "imagen": 1,
            "precio": 1,

        });

    console.log(estandar);

    res.json({
        estandar
    })

}) 

app.get('/veggie', async (req, res) => {

    const veggie = await Veggie.find({},
        {
            "producto": 1,
            "imagen": 1,
            "precio": 1,

        });

    console.log(veggie);

    res.json({
        veggie
    })

}) 

app.get('/postre', async (req, res) => {

    const postre = await Postre.find({},
        {
            "producto": 1,
            "imagen": 1,
            "precio": 1,

        });

    console.log(postre);

    res.json({
        postre
    })

}) 

app.get('/bebida', async (req, res) => {

    const bebida = await Bebida.find({},
        {
            "producto": 1,
            "imagen": 1,
            "precio": 1,

        });

    console.log(bebida);

    res.json({
        bebida
    })

}) 

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el Puerto ${PORT}`);
})

