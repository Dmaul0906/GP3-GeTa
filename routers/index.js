"use strict";

const mainRouter = require("express").Router();
const transaksiRouter = require("./transaksi");
const userRouter = require("./user");
const lemariRouter = require("./lemari");
const rakRouter = require("./rak");


mainRouter.use(transaksiRouter);
mainRouter.use(userRouter);
mainRouter.use(lemariRouter);
mainRouter.use(rakRouter);

module.exports = mainRouter;
