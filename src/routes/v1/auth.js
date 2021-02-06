const express = require("express");
const router = express.Router();
const { signup, login, forgoted } = require("../../controller/v1/auth");

router.post("/signup", signup).post("/login", login).post("/forgot", forgoted);

module.exports = router;
