const express = require("express");
const staticRouter = express.Router();

staticRouter.get("/", function (req, res) {
  res.render("home");
});

module.exports = staticRouter;
