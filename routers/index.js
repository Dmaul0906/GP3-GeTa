"use strict";

const mainRouter = require("express").Router();
const transaksiRouter = require("./transaksi");
const userRouter = require("./user");

mainRouter.use(transaksiRouter);
mainRouter.use(userRouter);

module.exports = mainRouter;
