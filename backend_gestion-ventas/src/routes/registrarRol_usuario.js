const express = require("express");
const registrarRolSchema = require("../models/registrar_rol");
const router = express.Router();

// Insertar registro usuario
router.post("/user/rol", (req, res) => {
    const registrarRol = registrarRolSchema(req.body);
    registrarRol
      .save()
      .then((data) => res.json(data))
      .catch((error) => ({ message: error }));
  });
  // Consultar usuario
router.get("/user/rol", (req, res) => {
  // para get solo usamos el esquema
  registrarRolSchema
    .find() // para recuperar los productos
    .then((data) => res.json(data)) // promesa para responder con esos datos
    .catch((error) => res.json({ message: error })); // recoger si hay algun error
}); 

module.exports = router;