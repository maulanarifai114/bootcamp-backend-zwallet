const express = require("express");
const router = express.Router();
const { verifyAccess } = require("../../middleware/v1/verify");
const { getAllUser, search } = require("../../controller/v1/user");

router
  .get("/alluser", verifyAccess, getAllUser)
  .get("/search", verifyAccess, search);

module.exports = router;
