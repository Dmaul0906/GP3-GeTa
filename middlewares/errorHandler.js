"use strict";

const errorHandler = (error, req, res, next) => {
  let errorCode;
  let errorMessage;

  switch (error.name) {
    case "ErrorAccToken":
      errorCode = 411;
      errorMessage = error.message;
      break;

    case "AcountRegistered":
      errorCode = 406;
      errorMessage = error.message;
      break;

    case "AccessDenided":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "Forbidden":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "ForbiddenGetAll":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "UserNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "ErrorUser":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "ErrorUpdateUser":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "AcoundNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "ForbiddenUpdatingData":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "LukisanNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;

    case "TransaksiNotFound":
      errorCode = 404;
      errorMessage = error.message;
      break;
  }
  res.status(errorCode || 500).send({
    message: errorMessage || "internal Error",
  });
};

module.exports = errorHandler;
