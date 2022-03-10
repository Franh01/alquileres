const { Router } = require("express");
const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const publications = require("./publications.js");
const router = Router();

router.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", publications);

module.exports = router;
