const express = require("express");
const router = express.Router();
const { signup, login, forgoted, activate } = require("../../controller/v1/auth");

router
.post("/signup", signup)
.post("/login", login)
.post("/forgot", forgoted)
.patch("/activate", activate)

module.exports = router;
