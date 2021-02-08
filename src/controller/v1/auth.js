const { signup } = require('./auth/signup')
const { login } = require('./auth/login')
const { forgoted } = require('./auth/forgot')
const { activate } = require('./auth/activate')
const { firstTime } = require('./auth/first')

const auth = { signup, login, forgoted, activate, firstTime }
module.exports = auth
