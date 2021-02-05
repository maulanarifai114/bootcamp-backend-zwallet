const express = require("express");
const router = express.Router();
const routerAuth = require("./auth");
const routerUser = require("./user");
const routerTransfer = require("./transfer");

router
  .use("/auth", routerAuth)
  .use("/user", routerUser)
  .use("/transfer", routerTransfer);
module.exports = router;
