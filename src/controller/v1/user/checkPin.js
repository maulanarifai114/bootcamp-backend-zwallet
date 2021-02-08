const { checkPin } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')

exports.checkPin = (req, res) => {
  checkPin(req.query.id)
    .then((result) => {
      const pin = result[0].pin
      const inputedPin = req.query.pin
      pin !== inputedPin
        ? helper.response(res, 'Wrong PIN Number', 401, null)
        : helper.response(res, 'PIN Number Is Correct', 200, null)
    })
    .catch((err) => {
      console.log(err)
      helper.reject(res, null, 404, 'Id not found')
    })
}
