const { actionQuery } = require('../../helper/v1/help')

const transfer = {
  transfer: (data) => {
    return actionQuery('INSERT INTO transactions SET ?', data)
  },
  checkPin: (id) => {
    return actionQuery('SELECT pin FROM users WHERE id = ?', id)
  },
  checkBalance: (id) => {
    return actionQuery('SELECT balance FROM users WHERE id = ?', id)
  },
  senderBalance: (balance, id) => {
    return actionQuery('UPDATE users SET balance = balance - ? WHERE id = ?', [
      balance,
      id
    ])
  },
  receiverBalance: (balance, id) => {
    return actionQuery('UPDATE users SET balance = balance + ? WHERE id = ?', [
      balance,
      id
    ])
  }
}
module.exports = transfer
