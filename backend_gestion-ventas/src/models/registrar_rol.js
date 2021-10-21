const mongoose  = require("mongoose");
const registrarRolSchema =  mongoose.Schema({
    nombreRol: {
        type: String,
        required : true
    }, 
    
    estado: {
        type :String,
        require : true 

    }


}) 
module.exports = mongoose.model("AgregarRol",registrarRolSchema)