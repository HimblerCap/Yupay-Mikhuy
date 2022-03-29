const { checkSchema } = require("express-validator");
const { resultChecking } = require("../helpers/validateHelper");

const validateCreateProduct = [
    checkSchema({
        type: {
            in: ["body"],
            exists: true,
            notEmpty: true,
            isString: true,
            errorMessage: "Type is wrong",
        },
        name: {
            in: ["body"],
            exists: true,
            notEmpty: true,
            isString: true,
            errorMessage: "Name is wrong",
        },
        images: {
            in: ["body"],
            exists: true,
            isArray: true,
            errorMessage: "Images is wrong",
        },
    }),
    (req, res, next) => {
        resultChecking(req, res, next);
    },
];

module.exports = { validateCreateProduct };
