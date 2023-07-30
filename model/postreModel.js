const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//configuramos con Schema nuestra collección de db
const postreSchema = new Schema({
    producto: {
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    precio: { 
        type: String, 
        required: true,
    }
});

//exportamos la configuración con el nombre de la colección
module.exports = mongoose.model('Postre', postreSchema);