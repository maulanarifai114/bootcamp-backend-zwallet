const { deleteHistoryById } = require("../../../model/v1/history");
const helper = require("../../../helper/v1/help");

exports.deleteHistoryById = (req, res) => {
  if (req.body.id !== '') {
    deleteHistoryById(req.body.id)
      .then((result) => helper.response(res, "Success Delete History!", 200, null))
      .catch((err) => helper.reject(res, null, 404, err));
  } else {
    helper.reject(res, null, 404, "Id is empty")
  }
};
