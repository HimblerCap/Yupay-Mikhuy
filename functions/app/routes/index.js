const express = require("express");
const fs = require("fs");

const router = express.Router();

const pathRouter = `${__dirname}`;

const removeExtensions = (fileName) => {
    return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtensions(file);
    const skip = ["index"].includes(fileWithOutExt);
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)); // localhost/users
    }
});

router.get('*', (req, res) => {
    res.status(404).send({ error: "Not route found" });
});

module.exports = router;
