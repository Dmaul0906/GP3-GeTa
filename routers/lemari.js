"use strict"

const lemariRouter = require('express').Router();
const lemariKontroler = require('../controllers/lemariKontroler');
const auth = require('../middlewares/auth')
const otor = require('../middlewares/otor')


// lemariRouter.post('/lemaris', auth, otor(['admin']), lemariKontroler.create)
lemariRouter.get('/lemaris/:id', auth, otor(["admin", "user"]), lemariKontroler.getId)
lemariRouter.get('/lemaris', auth, otor(['admin']), lemariKontroler.findAll)
lemariRouter.patch('/lemaris/:id', auth, otor(["admin"]), lemariKontroler.update)

module.exports = lemariRouter;