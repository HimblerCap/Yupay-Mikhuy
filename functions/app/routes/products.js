const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductsByType,
    createProduct,
} = require("../controllers/products");

const { validateCreateProduct } = require("../validators/products");

router.get("/", getProducts);

router.post("/", validateCreateProduct, createProduct);

router.get("/:type", getProductsByType);

module.exports = router;
