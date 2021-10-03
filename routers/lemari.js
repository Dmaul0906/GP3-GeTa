"use strict";

const lemariRouter = require("express").Router();
const lemariKontroler = require("../controllers/lemariKontroler");
const auth = require("../middlewares/auth");
const otor = require("../middlewares/otor");

lemariRouter.get("/lemaris", auth, otor(["admin"]), lemariKontroler.findAll);

module.exports = lemariRouter;
