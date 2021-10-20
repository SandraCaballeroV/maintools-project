const mongoose = require("mongoose");

const ventaSchema = mongoose.Schema({
    fecha: {
        type: Number,
        required: true
    },
    idVenta: {
        type: Number,
        required: true
    },
    nombreCliente: {
        type: String,
        required: true
    }
    

});

module.exports = mongoose.model('venta',ventaSchema);