const { checkSchema } = require("express-validator");
const { resultChecking } = require("../helpers/validateHelper");

const name = {
    in: ["body"],
    exists: true,
    notEmpty: true,
    isString: true,
    errorMessage: "Name is wrong",
};

const type = {
    in: ["body"],
    exists: true,
    notEmpty: true,
    isString: true,
    errorMessage: "Type is wrong",
};

const quantity = {
    in: ["body"],
    exists: true,
    notEmpty: true,
    isNumeric: true,
    errorMessage: "Quantity is wrong",
};

const validateCreateUser = [
    checkSchema({
        name: name,
        user_id: {
            in: ["body"],
            exists: true,
            notEmpty: true,
            isString: true,
            errorMessage: "User_id is wrong",
        },
    }),
    (req, res, next) => {
        resultChecking(req, res, next);
    },
];

const validateUserProductCreate = [
    checkSchema({
        name: name,
        type: type,
        quantity: quantity,
    }),
    (req, res, next) => {
        resultChecking(req, res, next);
    },
];

const validateUserProductUpdate = [
    checkSchema({
        name: name,
        quantity: quantity,
        operation: {
            in: ["body"],
            errorMessage: "Operation is wrong",
            exists: true,
            notEmpty: true,
            isString: true,
        },
    }),
    (req, res, next) => {
        resultChecking(req, res, next);
    },
];

const validateUserProductDelete = [
    checkSchema({
        name: name,
    }),
    (req, res, next) => {
        resultChecking(req, res, next);
    },
];

module.exports = {
    validateCreateUser,
    validateUserProductCreate,
    validateUserProductUpdate,
    validateUserProductDelete,
};
