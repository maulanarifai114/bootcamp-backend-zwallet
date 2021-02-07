const { getAllUserLimit } = require("../../../model/v1/user");
const helper = require("../../../helper/v1/help");

exports.getAllUserLimit = (req, res) => {
  getAllUserLimit(req.id, req.query.date)
    .then((result) => {
      helper.response(res, result, 200, null);
    })
    .catch((err) => {
      helper.reject(res, null, 404, err);
    });
};
