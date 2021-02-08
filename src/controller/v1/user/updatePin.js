const { updatePin } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')

exports.updatePin = (req, res) => {
  req.body.pin !== '' && req.body.id !== ''
    ? updatePin(req.body.pin, req.body.id)
        .then(() => {
          return helper.response(res, 'PIN Updated', 200, null)
        })
        .catch((err) => {
          return helper.reject(res, null, 404, err)
        })
    : helper.reject(res, null, 404, 'Some field is empty')
}
