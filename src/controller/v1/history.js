const { history } = require('./history/getAllHistory')
const { historyLimit } = require('./history/getAllHistoryLimit')
const { deleteHistoryById } = require('./history/deleteHistoryById')
const historied = {
  history,
  historyLimit,
  deleteHistoryById
}
module.exports = historied
