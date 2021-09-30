"use strict";

const errorHandler = (error, req, res, next) => {
  let errorCode;
  let errorMessage;

  switch (error.name) {
    case `InvalidInput`:
      errorCode: 400;
      errorMessage: error.message;

    case "Error":
      errorCode: 400;
      errorMessage: error.message;

    case "RegisteredAccount":
      errorCode: 404;
      errorMessage: error.message;
  }
  res.status(errorCode || 500).send({
    message: errorMessage || "internal Error",
  });
};

module.exports = errorHandler;
