const { getUser } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')

exports.getUser = (req, res) => {
  getUser(req.query.id)
    .then((result) => {
      helper.response(res, result[0], 200, null)
    })
    .catch((err) => {
      helper.reject(res, null, 404, err)
    })
}
