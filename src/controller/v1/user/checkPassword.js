const { checkPassword } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')
const bcrypt = require('bcryptjs')

exports.checkPassword = (req, res, next) => {
  req.body.currentpassword !== ''
    ? checkPassword(req.body.id)
        .then((result) => {
          const pass = result[0].password
          const inputedPass = req.body.currentpassword
          bcrypt.compare(inputedPass, pass, function (err, result) {
            !result ? helper.response(res, 'Wrong Password', 401, err) : next()
          })
        })
        .catch((err) => {
          console.log(err)
          helper.reject(res, null, 404, 'Id not found checking')
        })
    : helper.reject(res, null, 404, 'Some field is empty')
}
