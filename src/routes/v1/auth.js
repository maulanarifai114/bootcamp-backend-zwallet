const express = require('express')
const router = express.Router()
const { signup, login} = require('../../controller/v1/auth')

router
  .post('/signup', signup)
  .post('/login', login)

module.exports = router