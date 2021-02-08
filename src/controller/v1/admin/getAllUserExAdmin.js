const { getAllUserExAdmin } = require("../../../model/v1/admin");
const helper = require("../../../helper/v1/help");

exports.getAllUserExAdmin = (req, res) => {
  if (req.id === process.env.ADMIN) {
    getAllUserExAdmin()
      .then((result) => helper.response(res, result, 200, null))
      .catch((err) => helper.reject(res, null, 404, err))
  } else {
    helper.reject(res, null, 401, "You are not an admin")
  }
};
