const { actionQuery } = require('../../helper/v1/help')

const user = {
  getUser: (id) => {
    return actionQuery(
      `SELECT * FROM users WHERE id = '${id}'`
    )
  },
  getAllUser: (id) => {
    return actionQuery(
      "SELECT * FROM users WHERE (id != 'fb1b35a1-2ec2-4828-bb35-033930554214' AND id != ?) ORDER BY createAt DESC LIMIT 4",
      id
    )
  },
  getAllUserLimit: (id, date) => {
    return actionQuery(
      `SELECT * FROM users WHERE (id != 'fb1b35a1-2ec2-4828-bb35-033930554214' AND id != '${id}') AND createAt < '${date}' ORDER BY createAt DESC LIMIT 4`
    )
  },
  search: (keyword, id) => {
    return actionQuery(
      `SELECT * FROM users WHERE firstName LIKE '%${keyword}%' AND id != '${id}' OR lastName LIKE '%${keyword}%' AND id != '${id}' ORDER BY createAt DESC`
    )
  },
  updatePhone: (phone, id) => {
    return actionQuery(
      `UPDATE users SET phone = '${phone}' WHERE id = '${id}'`
    )
  },
  updatePin: (pin, id) => {
    return actionQuery(`UPDATE users SET pin = '${pin}' WHERE id = '${id}'`)
  },
  updatePassword: (password, id) => {
    return actionQuery(
      `UPDATE users SET password = '${password}' WHERE id = '${id}'`
    )
  },
  updatePhoto: (photo, id) => {
    return actionQuery(
      `UPDATE users SET photo = '${photo}' WHERE id = '${id}'`
    )
  },
  deletePhoto: (id) => {
    return actionQuery(`SELECT photo FROM users WHERE id = '${id}'`)
  },
  checkPin: (id) => {
    return actionQuery(`SELECT pin FROM users WHERE id = '${id}'`)
  },
  checkPassword: (id) => {
    return actionQuery(`SELECT password FROM users WHERE id = '${id}'`)
  }
}
module.exports = user
