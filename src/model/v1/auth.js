const {
  actionQuery
} = require('../../helper/v1/help')

const auth = {
  checkUser: (email) => {
    return actionQuery('SELECT * FROM users WHERE email = ?', email)
  },
  insertUser: (data) => {
    return actionQuery('INSERT INTO users SET ?', data)
  },
  activate: (id) => {
    return actionQuery(`UPDATE users SET isVerified = 'true' WHERE id = '${id}'`)
  },
  first: (id) => {
    return actionQuery(`UPDATE users SET firstTime = 'false' WHERE id = '${id}'`)
  }
}
module.exports = auth
