const { deleteUser } = require("../../../model/v1/admin");
const helper = require("../../../helper/v1/help");

exports.deleteUser = (req, res) => {
  deleteUser(req.body.id)
    .then(() => helper.response(res, "Success Delete User", 200, null))
    .catch((err) => helper.reject(res, null, 404, err));
};
