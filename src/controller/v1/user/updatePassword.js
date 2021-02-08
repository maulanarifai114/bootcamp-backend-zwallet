const { updatePassword } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')
const bcrypt = require('bcryptjs')

exports.updatePassword = (req, res) => {
  req.body.password !== '' &&
  req.body.repeatpassword !== '' &&
  req.body.id !== ''
    ? req.body.password === req.body.repeatpassword
        ? bcrypt.genSalt(10, function (err, salt) {
            console.log(err)
            bcrypt.hash(req.body.password, salt, function (err, hash) {
              console.log(err)
              updatePassword(hash, req.body.id)
                .then(() => {
                  return helper.response(res, 'Password Updated', 200, null)
                })
                .catch((err) => {
                  console.log(err)
                  return helper.reject(res, null, 404, 'Id not found')
                })
            })
          })
        : helper.reject(res, null, 404, 'Passwords Are Not The Same')
    : helper.reject(res, null, 404, 'Some field is empty')
}
