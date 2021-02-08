const { activate } = require('../../../model/v1/auth')
const helper = require('../../../helper/v1/help')

exports.activate = (req, res) => {
  activate(req.body.id)
    .then(() => {
      helper.response(
        res,
        'Your account has been verified! Now create your pin first',
        200,
        null
      )
    })
    .catch((err) => {
      helper.reject(res, null, 401, err)
    })
}
