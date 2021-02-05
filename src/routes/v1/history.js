const express = require("express");
const router = express.Router();
const { history } = require("../../controller/v1/history");
const { verifyAccess } = require("../../middleware/v1/verify");

router.get("/", verifyAccess, history);

module.exports = router;
