const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    getUserProducts,
    createUserProducts,
    updateUserProducts,
    deleteUserProducts,
} = require("../controllers/users");

const {
    validateCreateUser,
    validateUserProductCreate,
    validateUserProductUpdate,
    validateUserProductDelete,
} = require("../validators/users");

// Lista completa de usuarios
router.get("/", getUsers);

// Detalle de un solo usuario
router.get("/:id", getUser);

// Creación de la colección del usuario
router.post("/", validateCreateUser, createUser);

// Productos de usuarios

router.get("/products/:user_id", getUserProducts);

router.get("/products/:user_id/:type", getUserProducts);

router.post(
    "/products/:user_id",
    validateUserProductCreate,
    createUserProducts
);

router.patch(
    "/products/:user_id",
    validateUserProductUpdate,
    updateUserProducts
);

router.delete(
    "/products/:user_id",
    validateUserProductDelete,
    deleteUserProducts
);

module.exports = router;
