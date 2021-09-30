"use strict";

const userRouter = require("express").Router();
const userKontroler = require("../controllers/userKontroler");
const auth = require("../middlewares/auth");
const otor = require("../middlewares/otor");

userRouter.post("/user/register", userKontroler.register);
userRouter.post("/user/login", userKontroler.login);
userRouter.get("/user", auth, otor(["admin"]), userKontroler.getAll);

module.exports = userRouter;
