const { getAllUser } = require("../../../model/v1/user");
const helper = require("../../../helper/v1/help");

exports.getAllUser = (req, res) => {
  getAllUser(req.id)
    .then((result) => {
      const data = [];
      result.forEach((el) => {
        data.push({
          id: el.id,
          name: `${el.firstName} ${el.lastName}`,
          photo: el.photo,
          phone: el.phone,
        });
      });
      return helper.response(res, data, 200, null);
    })
    .catch((err) => {
      return helper.reject(res, null, 404, err);
    });
};
