//const express = require('express');
import Express from "express";

const app = Express();
app.use(Express.json());

app.get('/vehiculos',(req,res)=>{
    console.log("alguien hizo get en la ruta /vehiculos");
    const vehiculos = [
        {nombre:"corolla", marca: "toyota", modelo:"2014"},
        {nombre:"picanto", marca: "kia", modelo:"2013"},
        {nombre:"6", marca: "mazda", modelo:"2012"}
    ]

    res.send(vehiculos);
})

app.post("/vehiculos/nuevo",(req,res)=>{
    //implementar codigo para crear vehiculo en la BD
    //console.log("esto es una solicitud post a /vehiculos/nuevo");
    const datosVehiculo = req.body;
    //console.log("vehiculo a crear",req.body);
    console.log('llaves',Object.keys(datosVehiculo));
    try{
        if (Object.keys(datosVehiculo).includes('name')&&
        Object.keys(datosVehiculo).includes('marca')&&
        Object.keys(datosVehiculo).includes('modelo')
        )
        {
            res.sendStatus(200);
        }
        else{
            res.sendStatus(500);
        }
    }
    catch{
        res.sendStatus(500);
    }

})

app.listen(5000,()=>{
    console.log("escuchado puerto 5000");

})