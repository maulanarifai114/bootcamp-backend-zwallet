const { updatePhone } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')

exports.updatePhone = (req, res) => {
  updatePhone(req.body.phone, req.body.id)
    .then(() => {
      return helper.response(res, 'Phone Number Updated', 200, null)
    })
    .catch((err) => {
      return helper.reject(res, null, 404, err)
    })
}
