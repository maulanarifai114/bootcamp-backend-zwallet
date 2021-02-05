const express = require("express");
const router = express.Router();
const { verifyAccess } = require("../../middleware/v1/verify");
const { getAllUser } = require("../../controller/v1/user");

router.get("/alluser", verifyAccess, getAllUser);
// .post('/login', login)

module.exports = router;
