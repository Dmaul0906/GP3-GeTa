"use strict";

const mainRouter = require("express").Router();
const transaksiRouter = require("./transaksi");
const userRouter = require("./user");
const lemariRouter = require("./lemari");


mainRouter.use(transaksiRouter);
mainRouter.use(userRouter);
mainRouter.use(lemariRouter)

module.exports = mainRouter;
