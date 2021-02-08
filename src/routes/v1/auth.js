const express = require('express')
const router = express.Router()
const {
  signup,
  login,
  forgoted,
  activate,
  firstTime
} = require('../../controller/v1/auth')
const { verifyAccess } = require('../../middleware/v1/verify')

router
  .post('/signup', signup)
  .post('/login', login)
  .post('/forgot', forgoted)
  .patch('/activate', verifyAccess, activate)
  .patch('/first', firstTime)

module.exports = router
