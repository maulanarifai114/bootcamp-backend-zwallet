const express = require("express");
const router = express.Router();
const { verifyAccess } = require("../../middleware/v1/verify");
const {
  getAllUser,
  search,
  updatePhone,
  updatePin,
  updatePassword,
  checkPin,
  checkPassword,
} = require("../../controller/v1/user");

router
  .get("/alluser", verifyAccess, getAllUser)
  .get("/search", verifyAccess, search)
  .patch("/phone", verifyAccess, updatePhone)
  .patch("/pin", verifyAccess, updatePin)
  .patch("/password", verifyAccess, checkPassword, updatePassword)
  .get("/checkpin", verifyAccess, checkPin);
module.exports = router;
