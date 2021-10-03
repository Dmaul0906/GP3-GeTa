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
  "/lukisans",
  auth,
  otor(["admin"]),
  transaksiKontroler.getAll
);
transaksiRouter.get(
  "/lukisans/:id",
  auth,
  otor(["admin", "user"]),
  transaksiKontroler.getById
);
transaksiRouter.get(
  "/transaksis",
  auth,
  otor(["admin"]),
  transaksiKontroler.trGetAll
);
transaksiRouter.get(
  "/transaksis/:id",
  auth,
  otor(["admin", "user"]),
  transaksiKontroler.trGetById
);
transaksiRouter.get(
  "/takes/:id",
  auth,
  otor(["admin", "user"]),
  transaksiKontroler.take
);
module.exports = transaksiRouter;
