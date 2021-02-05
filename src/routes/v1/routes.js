const express = require("express");
const router = express.Router();
const routerAuth = require("./auth");
const routerUser = require("./user");
const routerTransfer = require("./transfer");
const routerHistory = require("./history");

router
  .use("/auth", routerAuth)
  .use("/user", routerUser)
  .use("/transfer", routerTransfer)
  .use("/history", routerHistory);
module.exports = router;
