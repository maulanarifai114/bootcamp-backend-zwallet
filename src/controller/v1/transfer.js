const { checkPin } = require('../../middleware/v1/checkPin')
const { transfer } = require('./transfer/transfer')
const { checkBalance } = require('./transfer/checkBalance')
const transfered = {
  checkPin,
  transfer,
  checkBalance
}
module.exports = transfered
