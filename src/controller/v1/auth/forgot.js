const { checkUser } = require('../../../model/v1/auth')
const { sendEmail } = require('../../../helper/v1/forgot')
const helper = require('../../../helper/v1/help')
const jwt = require('jsonwebtoken')

exports.forgoted = (req, res) => {
  checkUser(req.body.email)
    .then((result) => {
      const id = result[0].id
      const email = result[0].email
      const firstName = result[0].firstName
      // JSON Web Token
      const payload = { id }
      const secret = process.env.SECRET_KEY
      const option = { expiresIn: '1h' }
      const getToken = (err, token) => {
        if (!err) {
          sendEmail(firstName, email, token, id)
            .then(() => {
              helper.response(res, 'Check Your Email Now!', 200, null)
            })
            .catch((err) => {
              helper.reject(res, null, 404, err)
            })
        } else {
          helper.reject(res, null, 404, err)
        }
      }
      jwt.sign(payload, secret, option, getToken)
    })
    .catch(() => {
      helper.reject(res, null, 404, 'Email is not registered')
    })
}
