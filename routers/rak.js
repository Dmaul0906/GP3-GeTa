const rakRouter = require("express").Router();
const rakController = require("../controllers/rakController");
const auth = require("../middlewares/auth");
const otor = require("../middlewares/otor");

rakRouter.post(
    "/raks",
    auth,
    otor(["user"]),
    rakController.post
  );

rakRouter.get("/raks",
    auth,
    otor(["admin"]),
    rakController.getAll
  );

rakRouter.get("/raks/:id",
    auth,
    otor(["admin", "user"]),
    rakController.getById
)  

module.exports = rakRouter;
