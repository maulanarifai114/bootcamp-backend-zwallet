const { checkPin } = require("../../model/v1/transfer");
const helper = require("../../helper/v1/help");

exports.checkPin = (req, res, next) => {
  checkPin(req.body.senderId)
    .then((result) => {
      const pin = result[0].pin;
      const inputedPin = req.body.pin;
      pin !== inputedPin
        ? helper.response(res, "Wrong PIN Number", 200, null)
        : next();
    })
    .catch((err) => {
      console.log(err);
      helper.reject(res, null, 404, "Id not found");
    });
};
