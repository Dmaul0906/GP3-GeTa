"use strict";

const transaksiRouter = require("express").Router();
const transaksiKontroler = require("../controllers/transaksiKontroler");
const auth = require("../middlewares/auth");
const otor = require("../middlewares/otor");

transaksiRouter.post(
  "/transaksis",
  auth,
  otor(["user"]),
  transaksiKontroler.store
);
transaksiRouter.patch(
  "/transaksis/:id",
  auth,
  otor(["admin", "user"]),
  transaksiKontroler.update
);
transaksiRouter.get(
  "/transaksis",
  auth,
  otor(["admin"]),
  transaksiKontroler.getAll
);
transaksiRouter.get(
  "/transaksis/:id",
  auth,
  otor(["admin", "user"]),
  transaksiKontroler.getById
);
module.exports = transaksiRouter;
