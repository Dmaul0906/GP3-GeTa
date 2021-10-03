"use strict";

const errorHandler = (error, req, res, next) => {
  let errorCode;
  let errorMessage;

  switch (error.name) {
    case "InputRequired":
      errorCode = 422;
      errorMessage = error.message;
      break;

    case "UserNotFound":
      errorCode = 422;
      errorMessage = error.message;
      break;

    case "InvalidInput":
      errorCode = 422;
      errorMessage = error.message;
      break;

    case "DataLukisanNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "LukisanNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "TransactionNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "PaintingNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "ErrorAccToken":
      errorCode = 401;
      errorMessage = error.message;
      break;

    case "AcountRegistered":
      errorCode = 409;
      errorMessage = error.message;
      break;

    case "Forbidden":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "ErrorUser":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "ForbiddenUpdate":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "DataNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "RakNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "LemariNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "InvalidPainting":
      errorCode = 403;
      errorMessage = error.message;
      break;
  }

  // case "":
  // errorCode = ;
  // errorMessage: error.message;
  // break

  res.status(errorCode || 500).json({
    message: errorMessage || "internal Error",
  });
};

module.exports = errorHandler;
