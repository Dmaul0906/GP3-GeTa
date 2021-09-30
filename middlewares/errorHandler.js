"use strict";

const errorHandler = (error, req, res, next) => {
  let errorCode;
  let errorMessage;

  switch (error.name) {
    case "AcountRegistered":
      errorCode = 406;
      errorMessage = error.message;
      break;

    case "AccessDenided":
      errorCode = 403;
      errorMessage = error.message;
      break;

    case "Forbiden":
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
  }

  res.status(errorCode || 500).send({
    message: errorMessage || "Internal Error",
  });
};

module.exports = errorHandler;
