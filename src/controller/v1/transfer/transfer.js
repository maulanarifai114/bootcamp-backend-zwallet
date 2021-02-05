const {
  transfer,
  senderBalance,
  receiverBalance,
} = require("../../../model/v1/transfer");
const helper = require("../../../helper/v1/help");
const { v4: uuidv4 } = require("uuid");

exports.transfer = (req, res) => {
  const id = uuidv4();
  const senderId = req.body.senderId;
  const receiverId = req.body.receiverId;
  const data = {
    id,
    senderId: req.body.senderId,
    receiverId: req.body.receiverId,
    notes: req.body.notes,
    amount: req.body.amount,
    date: req.body.date,
  };
  transfer(data)
    .then((result) => {
      console.log(result);
      helper.response(res, "Success Transfer", 200, null);
    })
    .catch((err) => helper.reject(res, err, 404, "Failed Transfer"));
  senderBalance(data.amount, senderId);
  receiverBalance(data.amount, receiverId);
};
