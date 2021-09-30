"use strict";

const errorHandler = (error, req, res, next) => {
  let errorCode;
  let errorMessage;

  switch (error.name) {
    case "AccountNotFound":
      errorCode: 404;
      errorMessage: error.message;

    case "InvalidInput":
      errorCode: 400;
      errorMessage: error.message;

    case "ErrorInputRegister":
      errorCode: 400;
      errorMessage: error.message;

    case "ErrorInputLogin":
      errorCode: 400;
      errorMessage: error.message;
  }

  res.status(errorCode || 500).send({
    message: errorMessage || "Internal Error",
  });
};

module.exports = errorHandler;
