const express = require("express");
const router = express.Router();
const {
  checkPin,
  transfer,
  checkBalance,
} = require("../../controller/v1/transfer");
const { verifyAccess } = require("../../middleware/v1/verify");

router
  .get("/balance", verifyAccess, checkBalance)
  .post("/", verifyAccess, checkPin, transfer);

module.exports = router;
