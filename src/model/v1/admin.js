const { actionQuery } = require('../../helper/v1/help')

const auth = {
  getAllUserExAdmin: () => {
    return actionQuery(
      'SELECT id, CONCAT( firstName, \' \', lastName) AS name, photo, phone, createAt AS date FROM users WHERE id != \'fb1b35a1-2ec2-4828-bb35-033930554214\' ORDER BY createAt DESC LIMIT 6'
    )
  },
  getAllUserExAdminLimit: (date) => {
    return actionQuery(
      `SELECT id, CONCAT( firstName, ' ', lastName) AS name, photo, phone, createAt AS date FROM users WHERE id != 'fb1b35a1-2ec2-4828-bb35-033930554214' AND createAt < '${date}' ORDER BY createAt DESC LIMIT 6`
    )
  },
  deleteUser: (id) => {
    return actionQuery(`DELETE FROM users WHERE id = '${id}'`)
  }
}
module.exports = auth
