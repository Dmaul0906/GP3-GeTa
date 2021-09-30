"use strict";

const jwt = require("jsonwebtoken");
const userModel = require("../models").user;

const auth = async (req, res, next) => {
  try {
    const { accesstoken } = req.headers;

    if (!accesstoken) {
      const newError = new Error();
      newError.name = "ErrorAccToken";
      newError.message = "Required Access Token";
      next(newError);
    }

    const jwtPayload = jwt.verify(accesstoken, "key");

    const user = await userModel.findOne({
      where: {
        id: jwtPayload.userId,
      },
    });

    if (!user) {
      const newError = new Error();
      newError.name = "ErrorUser";
      newError.message = "User Can't find";
      next(newError);
    }

    req.currentUser = {
      ...user.dataValues,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
