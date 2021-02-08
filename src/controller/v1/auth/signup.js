const model = require('../../../model/v1/auth')
const helper = require('../../../helper/v1/help')
const emailer = require('../../../helper/v1/email')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid')

exports.signup = (req, res) => {
  const id = uuidv4() // Make id to uuidv4
  const roleid = uuidv4() // Make id to uuidv4
  const { firstName, lastName, email, password } = req.body // Take value from Body
  if (
    // If Body is empty
    firstName === '' ||
    lastName === '' ||
    email === '' ||
    password === ''
  ) {
    return helper.reject(
      res,
      null,
      401,
      "Can't register, some or all data is empty"
    )
  } else {
    model // Check Email from Database
      .checkUser(email)
      .then((result) => {
        if (result.length > 0) {
          // If Email is registered, do response
          return helper.response(res, null, 400, 'Email is already registered')
        } else {
          // Else, do register
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
              // Hass Password
              const data = {
                id,
                roleid,
                firstName,
                lastName,
                email,
                password: hash
              }
              // Else, Add User to Database
              model
                .insertUser(data)
                .then((result) => {
                  // Return success if success register
                  console.log(result)
                  // JSON Web Token
                  const payload = {
                    id,
                    email
                  }
                  const option = {
                    expiresIn: '24h'
                  }
                  const secret = process.env.SECRET_KEY
                  const getToken = (err, token) => {
                    console.log('error get token =', err)
                    emailer.sendEmail(firstName, email, token, id)
                  }
                  jwt.sign(payload, secret, option, getToken)
                  return helper.response(
                    res,
                    'Success Register, Check Your Email',
                    200,
                    null
                  )
                })
                .catch((err) => {
                  // Return failed if failed register
                  console.log(err)
                  return helper.response(res, 'Failed Register', 400, err)
                })
              console.log(err) // Error of Hash Password
            })
            console.log(err) // Error of Generate Salt
          })
        }
      })
      .catch((err) => {
        console.log('database error', err)
        return helper.reject(res, 'database error', 400, err)
      })
  }
}
