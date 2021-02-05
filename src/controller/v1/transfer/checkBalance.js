const { checkBalance } = require("../../../model/v1/transfer");
const helper = require("../../../helper/v1/help");

exports.checkBalance = (req, res) => {
  const id = req.query.id;
  const amount = req.query.amount;
  checkBalance(id)
    .then((result) => {
      const balance = result[0].balance;
      amount < balance
        ? helper.response(res, "Sufficient Balance", 200, null)
        : helper.response(res, "The Balance Is Not Sufficient", 200, null);
    })
    .catch((err) => {
      console.log(err);
      helper.reject(res, null, 404, "Id not found");
    });
};
