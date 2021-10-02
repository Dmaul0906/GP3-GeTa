"use strict"

const lemariRouter = require('express').Router();
const lemariKontroler = require('../controllers/lemariKontroler');


lemariRouter.post('/lemari', lemariKontroler.create)
lemariRouter.get('/lemari/:id', lemariKontroler.getId)
lemariRouter.get('/lemari', lemariKontroler.findAll)
lemariRouter.patch('/lemari/:id', lemariKontroler.update)

module.exports = lemariRouter;