const { validationResult } = require("express-validator");

const resultChecking = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        res.status(400).json({ error: err.array() });
    }
};

module.exports = { resultChecking };
