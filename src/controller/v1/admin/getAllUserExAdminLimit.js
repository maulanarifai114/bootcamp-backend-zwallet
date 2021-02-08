const { getAllUserExAdminLimit } = require("../../../model/v1/admin");
const helper = require("../../../helper/v1/help");

exports.getAllUserExAdminLimit = (req, res) => {
  if (req.id === process.env.ADMIN) {
    getAllUserExAdminLimit(req.query.date)
      .then((result) => helper.response(res, result, 200, null))
      .catch((err) => helper.reject(res, null, 404, err));
  } else {
    helper.reject(res, null, 401, "You are not an admin");
  }
};
