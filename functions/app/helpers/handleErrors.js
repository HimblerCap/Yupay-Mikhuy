const httpError = (res, err) => {
    res.status(500).json({
        error: "Internal server error",
    });
};

module.exports = { httpError };
