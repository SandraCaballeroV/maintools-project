// Esquema para productos
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    estado_producto: {
        type: String,
        required: true
    },
    Descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('productos', productSchema) // 'sproductos hace referencia a la collections'