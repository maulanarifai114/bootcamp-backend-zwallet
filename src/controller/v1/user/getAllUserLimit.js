const { getAllUserLimit } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')
const moment = require('moment')

exports.getAllUserLimit = (req, res) => {
  getAllUserLimit(req.id, req.query.date)
    .then((result) => {
      const data = []
      result.forEach((el) => {
        data.push({
          id: el.id,
          name: `${el.firstName} ${el.lastName}`,
          photo: el.photo,
          phone: el.phone,
          date: moment(el.createAt).format().split('+07:00')[0]
        })
      })
      helper.response(res, data, 200, null)
    })
    .catch((err) => {
      helper.reject(res, null, 404, err)
    })
}
