"use strict";

require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModel = require("../models").user;

const auth = async (req, res, next) => {
  try {
    const { accesstoken } = req.headers;

    if (!accesstoken) {
      const newError = new Error();
      newError.name = "ErrorAccToken";
      newError.message = "Required Access Token";
      throw newError;
    }

    const jwtPayload = jwt.verify(accesstoken, process.env.JWT_SECREAT);

    const user = await userModel.findOne({
      where: {
        id: jwtPayload.userId,
      },
    });

    if (!user) {
      const newError = new Error();
      newError.name = "ErrorUser";
      newError.message = "User Can't find";
      throw newError;
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
