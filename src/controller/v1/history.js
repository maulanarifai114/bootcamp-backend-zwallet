const { history } = require("./history/getAllHistory");
const { deleteHistoryById } = require("./history/deleteHistoryById");
const historied = {
  history,
  deleteHistoryById,
};
module.exports = historied;
