const { getAllUserExAdminLimit } = require("../../../model/v1/admin");
const helper = require("../../../helper/v1/help");
const moment = require("moment");

exports.getAllUserExAdminLimit = (req, res) => {
  const allData = [];
  if (req.id === process.env.ADMIN) {
    getAllUserExAdminLimit(req.query.date)
      .then((result) => {
        result.forEach((el) => {
          const data = {
            id: el.id,
            name: el.name,
            photo: el.photo,
            phone: el.phone,
            date: moment(el.date).format().split("+07:00")[0],
          }
          allData.push(data)
        })
        helper.response(res, allData, 200, null)
      })
      .catch((err) => helper.reject(res, null, 404, err));
  } else {
    helper.reject(res, null, 401, "You are not an admin");
  }
};
