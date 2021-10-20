const express = require("express");
// exportamos el modelo de productos
const productSchema = require("../models/producto_model");
const router = express.Router(); //Constructor llamado router

// Insertar un producto
router.post("/productos", (req, res) => {
  const product = productSchema(req.body); // me trae los datos (que creamos en models producto)
  product
    .save() // Guarda el producto en la base de datos mongodb
    .then((data) => res.json(data)) // promesa para responder con esos datos
    .catch((error) => res.json({ message: error })); // recoger si hay algun error
});

// Consultar todos los productos
router.get("/productos", (req, res) => {
  productSchema // para get solo usamos el esquema
    .find() // para recuperar los productos
    .then((data) => res.json(data)) // promesa para responder con esos datos
    .catch((error) => res.json({ message: error })); // recoger si hay algun error
});

// Consultar solo con el indice
router.get("/productos/:id", (req, res) => {
  const { id } = req.params; // obtenemos el id desde los parametros
  productSchema // para get solo usamos el esquema
    .findById(id) // para encontrar el id
    .then((data) => res.json(data)) // promesa para responder con esos datos
    .catch((error) => res.json({ message: error })); // recoger si hay algun error
});

// Actualizar un producto
router.put("/productos/:id", (req, res) => {
  const { id } = req.params; // obtenemos el id desde los parametros
  const { nombre, valor, estado_producto, Descripcion, estado } = req.body; //Extraer los datos que queremos actualizar del producto
  productSchema // para get solo usamos el esquema
    .updateOne(
      { _id: id },
      { $set: {  nombre, valor, estado_producto, Descripcion, estado } }
    ) // para actualizar el id
    .then((data) => res.json(data)) // promesa para responder con esos datos
    .catch((error) => res.json({ message: error })); // recoger si hay algun error
});

// Eliminar un producto
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params; // obtenemos el id desde los parametros
  productSchema // para get solo usamos el esquema
    .remove({ _id: id }) // para actualizar el id
    .then((data) => res.json(data)) // promesa para responder con esos datos
    .catch((error) => res.json({ message: error })); // recoger si hay algun error
});

module.exports = router;
