"use strict";

const userRouter = require("express").Router();
const userKontroler = require("../controllers/userKontroler");
const auth = require("../middlewares/auth");
const otor = require("../middlewares/otor");

userRouter.post("/users/register", userKontroler.register);
userRouter.post("/users/login", userKontroler.login);
userRouter.get("/users", auth, otor(["admin"]), userKontroler.getAll);
userRouter.get(
  "/users/:id",
  auth,
  otor(["admin", "user"]),
  userKontroler.getById
);
userRouter.patch("/users/:id", auth, otor(["user"]), userKontroler.update);

module.exports = userRouter;
