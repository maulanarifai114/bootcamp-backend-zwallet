const { newHistoryLimit, oldHistoryLimit } = require("../../../model/v1/history");
const helper = require("../../../helper/v1/help");
const moment = require("moment");

exports.historyLimit = (req, res) => {
  const allData = [];
  req.query.sort === "new"
    ? newHistoryLimit(req.query.id, req.query.date)
        .then((result) => {
          result.forEach((el) => {
            const data = {
              senderId: el.senderId,
              receiverId: el.receiverId,
              name: "",
              photo: "",
              date: moment(el.dateCreate).format().split("+07:00")[0],
              amount: el.amount,
            };
            if (req.query.id === el.senderId) {
              data.name = `${el.receiverFirstName} ${el.receiverLastName}`;
              data.photo = el.receiverPhoto;
            } else if (req.query.id !== el.senderId) {
              data.name = `${el.senderFirstName} ${el.senderLastName}`;
              data.photo = el.senderPhoto;
            }
            allData.push(data);
          });
          helper.response(res, allData, 200, null);
        })
        .catch((err) => {
          helper.reject(res, null, 200, err);
        })
    : oldHistoryLimit(req.query.id, req.query.date)
        .then((result) => {
          result.forEach((el) => {
            const data = {
              senderId: el.senderId,
              receiverId: el.receiverId,
              name: "",
              photo: "",
              date: moment(el.dateCreate).format().split("+07:00")[0],
              amount: el.amount,
            };
            if (req.query.id === el.senderId) {
              data.name = `${el.receiverFirstName} ${el.receiverLastName}`;
              data.photo = el.receiverPhoto;
            } else if (req.query.id !== el.senderId) {
              data.name = `${el.senderFirstName} ${el.senderLastName}`;
              data.photo = el.senderPhoto;
            }
            allData.push(data);
          });
          helper.response(res, allData, 200, null);
        })
        .catch((err) => {
          helper.reject(res, null, 200, err);
        });
};
