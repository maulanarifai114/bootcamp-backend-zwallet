const express = require("express");
const router = express.Router();
const { verifyAccess } = require("../../middleware/v1/verify");
const {
  getUser,
  getAllUser,
  getAllUserLimit,
  search,
  updatePhone,
  updatePin,
  updatePassword,
  updatePhoto,
  checkPin,
  checkPassword,
  checkImage,
} = require("../../controller/v1/user");

router
  .get("/alluser", verifyAccess, getAllUser)
  .get("/alluserlimit", verifyAccess, getAllUserLimit)
  .get("/search", verifyAccess, search)
  .patch("/phone", verifyAccess, updatePhone)
  .patch("/pin", verifyAccess, updatePin)
  .patch("/password", verifyAccess, checkPassword, updatePassword)
  .patch("/reset", verifyAccess, updatePassword)
  .get("/checkpin", verifyAccess, checkPin)
  .patch("/photo", verifyAccess, checkImage, updatePhoto)
  .get("/", verifyAccess, getUser)
module.exports = router;
