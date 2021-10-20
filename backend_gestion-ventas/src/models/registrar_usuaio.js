const mongoose  = require("mongoose"); 

const registrarSchema =  mongoose.Schema({
    nombre: {
        type: String,
        required : true
    }, 
    apellido : {
        type: String,
        required: true
    },
    Correo: {
        type : String,
        required : true
    }, 
    estado_usuaio: {
        type :String,
        require : true 

    },
    estado: {
        type :String,
        require : true 

    }, 
    rol:{
        type:String,
        require: false
    }


}) 
module.exports = mongoose.model("RegitrarUsuario",registrarSchema)
