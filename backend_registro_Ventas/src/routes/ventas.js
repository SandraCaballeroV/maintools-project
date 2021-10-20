const express = require("express");
const ventaSchema = require("../models/venta");

const router = express.Router();

// Crear venta
router.post('/ventas',(req,res) => {
    //res.send("Crear venta");
    const venta = ventaSchema(req.body);
    venta.save()
    .then((data) => res.json(data))
    .catch((error)=>res.json({message:error}));
    res.send("correcto")
});

// obtener todas las ventas
router.get('/listaventas',(req,res) => {
    //res.send("Crear venta");
    ventaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=>res.json({message:error}));
    
});

//obtener solo una venta
router.get('/ventas/:id',(req,res) => {
    //res.send("Crear venta");
    const{id} = req.params;
    ventaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=>res.json({message:error}));
});

//actualizar una venta
router.put('/ventas/:id',(req,res) => {
    //res.send("Crear venta");
    const{id} = req.params;
    const{fecha, idVenta, nombreCliente} = req.body;
    ventaSchema
    .updateOne({_id:id},{ $set:{fecha, idVenta, nombreCliente}})
    .then((data) => res.json(data))
    .catch((error)=>res.json({message:error}));
});

//Eliminar una venta
router.delete('/ventas/:id',(req,res) => {
    //res.send("Crear venta");
    const{id} = req.params;
    ventaSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error)=>res.json({message:error}));
});

module.exports = router;