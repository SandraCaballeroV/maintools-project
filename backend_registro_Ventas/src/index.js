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

// Mongoose
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conexion exitosa con el servidor'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));