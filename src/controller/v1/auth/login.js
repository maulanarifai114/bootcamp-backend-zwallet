const model = require('../../../model/v1/auth')
const helper = require('../../../helper/v1/help')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
  // Take data from body
  const { email, password } = req.body
  // If Body is empty
  if (email === '' || password === '') {
    return helper.response(
      res,
      null,
      401,
      'Cannot login, some or all data is empty'
    )
  } else {
    // Check user from database
    model
      .checkUser(email)
      .then((result) => {
        const user = result[0]
        // Check user if not registered
        if (!user) {
          return helper.response(
            res,
            null,
            401,
            'Your account is not registered'
          )
        } else if (user.isVerified === 'false') {
          helper.response(res, null, 401, 'Your account is not verified')
        } else {
          // Compare Password
          bcrypt.compare(password, user.password, function (err, check) {
            if (!check) {
              return helper.response(res, null, 401, 'Password Wrong!')
            } else {
              delete user.password
              delete user.pin
              // JSON Web Token
              const payload = {
                id: user.id
              }
              const option = {
                expiresIn: '24h'
              }
              const secret = process.env.SECRET_KEY
              const getToken = (err, token) => {
                user.token = token
                console.log('error get token =', err)
                return helper.response(res, user, 200, null) // User got the information
              }
              jwt.sign(payload, secret, option, getToken) // Run jwt to get token
              console.log('err bcrypt =', err)
            }
          })
        }
      })
      .catch((err) => {
        console.log('error checking user', err)
        return helper.reject(res, null, 400, err)
      })
  }
}
