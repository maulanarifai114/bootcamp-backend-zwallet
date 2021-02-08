const express = require("express");
const router = express.Router();
const { getAllUserExAdmin, deleteUser } = require("../../controller/v1/admin");
const { verifyAccess } = require("../../middleware/v1/verify");

router
  .get("/", verifyAccess, getAllUserExAdmin)
  .delete("/", verifyAccess, deleteUser)

module.exports = router;
