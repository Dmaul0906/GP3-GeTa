"use strict";

const transaksiRouter = require("express").Router();
const transaksiKontroler = require("../controllers/transaksiKontroler");
const auth = require("../middlewares/auth");
const otor = require("../middlewares/otor");

transaksiRouter.post(
  "/transaksi",
  auth,
  otor(["user"]),
  transaksiKontroler.store
);

module.exports = transaksiRouter;
