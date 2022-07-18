import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);

    // Default error handler
    return res.status(500).send({
        error: err.message,
    });
};

export default errorHandler;
