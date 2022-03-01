const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    getUserProducts,
    createUserProducts,
} = require("../controllers/users");

// Lista completa de usuarios
router.get("/", getUsers);

// Detalle de un solo usuario
router.get("/:id", getUser);

// Creación de la colección del usuario
router.post("/", createUser);

// Productos de usuarios

router.get("/products/:user_id", getUserProducts);

router.get("/products/:user_id/:type", getUserProducts);

router.post("/products/:user_id", createUserProducts);

module.exports = router;
