const express = require('express')
const router = express.Router()
const { history, historyLimit, deleteHistoryById } = require('../../controller/v1/history')
const { verifyAccess } = require('../../middleware/v1/verify')

router
  .get('/limit', verifyAccess, historyLimit)
  .get('/', verifyAccess, history)
  .delete('/', verifyAccess, deleteHistoryById)

module.exports = router
