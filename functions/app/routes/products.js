const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductsByType,
    createProduct,
} = require("../controllers/products");

router.get("/", getProducts);

router.get("/:type", getProductsByType);

router.post("/:type", createProduct);

module.exports = router;
