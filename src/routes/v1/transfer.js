const express = require("express");
const router = express.Router();
const {
  checkPin,
  transfer,
  checkBalance,
} = require("../../controller/v1/transfer");
const { verifyAccess } = require("../../middleware/v1/verify");

router
  .post("/", verifyAccess, checkPin, transfer)
  .get("/balance", verifyAccess, checkBalance);

module.exports = router;
