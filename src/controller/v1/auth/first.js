const { first } = require('../../../model/v1/auth')
const helper = require('../../../helper/v1/help')
exports.firstTime = (req, res) => {
  first(req.body.id)
    .then(() => {
      helper.response(res, 'First time updated', 200, null)
    })
    .catch((err) => {
      helper.reject(res, null, 404, err)
    })
}
