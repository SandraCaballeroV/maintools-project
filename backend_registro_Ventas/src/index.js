const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ventaRoutes = require('./routes/ventas');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
//Middleware
app.use(express.json());
app.use('/api',ventaRoutes);

// routes
app.get('/',(req, res) => {
    res.send("Bienvenido");
});

//Test clase
app.get('/ventatest',(req,res)=>{

    const vents = [
        {
            Fecha:"dd/mm/aaaa",
            idVenta:"111",
            nombreCliente:"cliente1",
            identificacionCliente:"12345",
            vendedor:"usuario1"
          },
          {
            Fecha:"dd/mm/aaaa",
            idVenta:"222",
            nombreCliente:"cliente1",
            identificacionCliente:"12345",
            vendedor:"usuario2"
          },
          {
            Fecha:"dd/mm/aaaa",
            idVenta:"333",
            nombreCliente:"cliente1",
            identificacionCliente:"12345",
            vendedor:"usuario3"
          }
    ];
    res.send(vents);
})

app.post('/ventatest/nuevo',(req,res)=>{
    const datosvent = req.body;
    console.log("llaves ",Object.keys(datosvent))
    //console.log("venta a crear",req.body);
    //condiciones de campos (status)
    res.send("Creado")
})

// Mongoose
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conexion exitosa con el servidor'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));