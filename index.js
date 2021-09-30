"use strict";

const express = require("express");
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/errorHandler");
const mainRouter = require("./routers/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mainRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`server running on localhost:${port}`));
