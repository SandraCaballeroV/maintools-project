// Montar el servidor
const express = require("express"); // requerimos el modulo de express
const mongoose = require("mongoose"); // requerimo el modulo de mongoose

const app = express(); // ejecutamos express (express() retorna el objeto de la aplicación)
const port = process.env.PORT || 4000; // process.env.PORT toma el puerto del hosting cuando ya este en producción
require("dotenv").config(); // ruta para conectarnos a la base de datos mongodb atlas

const productRouter = require("./routes/producto_route") //requerimos el archivo donde esta la ruta

// Variable de entrono para la conexion
const mongo_uri = "MONGODB_URI=mongodb+srv://Maintools:maintools@registroventas.jih7d.mongodb.net/GestionVentas?retryWrites=true&w=majority";
//middleware
app.use(express.json()) // hace que la peticion sea reconocida
app.use('/api', productRouter) // que le agregue '/api' a todas las rutas que se crean

//routes
app.get("/", (req, res) => {
  res.send("welcome to my api");
});

//mongobd connection
mongoose
  .connect(mongo_uri)
  .then(() => console.log("Database connect"))
  .catch((error) => console.error(error))

app.listen(port, () => console.log("server listning on port", port)); // que el servidor escucher en un pyerto especifico