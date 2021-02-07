const { actionQuery } = require("../../helper/v1/help");

const history = {
  newHistory: (id) => {
    return actionQuery(
      `
      SELECT trans.*,
      sender.firstName AS senderFirstName,
      sender.lastName AS senderLastName,
      sender.photo AS senderPhoto,
      receiver.firstName AS receiverFirstName,
      receiver.lastName AS receiverLastName,
      receiver.photo AS receiverPhoto
      FROM transactions AS trans
      INNER JOIN users AS receiver ON trans.receiverId = receiver.id
      INNER JOIN users AS sender ON trans.senderId = sender.id
      WHERE trans.senderId = '${id}' 
      OR trans.receiverId = '${id}'
      ORDER BY trans.dateCreate DESC LIMIT 7
      `
    );
  },
  newHistoryLimit: (id) => {
    return actionQuery(
      `
      SELECT trans.*,
      sender.firstName AS senderFirstName,
      sender.lastName AS senderLastName,
      sender.photo AS senderPhoto,
      receiver.firstName AS receiverFirstName,
      receiver.lastName AS receiverLastName,
      receiver.photo AS receiverPhoto
      FROM transactions AS trans
      INNER JOIN users AS receiver ON trans.receiverId = receiver.id
      INNER JOIN users AS sender ON trans.senderId = sender.id
      WHERE (trans.senderId = '${id}' AND trans.dateCreate < '${date}')
      OR (trans.receiverId = '${id}' AND trans.dateCreate < '${date}')
      ORDER BY trans.dateCreate DESC LIMIT 7
      `
    );
  },
  oldHistory: (id) => {
    return actionQuery(
      `
      SELECT trans.*,
      sender.firstName AS senderFirstName,
      sender.lastName AS senderLastName,
      sender.photo AS senderPhoto,
      receiver.firstName AS receiverFirstName,
      receiver.lastName AS receiverLastName,
      receiver.photo AS receiverPhoto
      FROM transactions AS trans
      INNER JOIN users AS receiver ON trans.receiverId = receiver.id
      INNER JOIN users AS sender ON trans.senderId = sender.id
      WHERE trans.senderId = '${id}' 
      OR trans.receiverId = '${id}'
      ORDER BY trans.dateCreate ASC LIMIT 7
      `
    );
  },
  oldHistoryLimit: (id) => {
    return actionQuery(
      `
      SELECT trans.*,
      sender.firstName AS senderFirstName,
      sender.lastName AS senderLastName,
      sender.photo AS senderPhoto,
      receiver.firstName AS receiverFirstName,
      receiver.lastName AS receiverLastName,
      receiver.photo AS receiverPhoto
      FROM transactions AS trans
      INNER JOIN users AS receiver ON trans.receiverId = receiver.id
      INNER JOIN users AS sender ON trans.senderId = sender.id
      WHERE (trans.senderId = '${id}' AND trans.dateCreate > '${date}')
      OR (trans.receiverId = '${id}' AND trans.dateCreate > '${date}')
      ORDER BY trans.dateCreate ASC LIMIT 7
      `
    );
  },
  deleteHistoryById: (id) => {
    return actionQuery(`DELETE FROM transactions WHERE id = '${id}'`);
  },
};
module.exports = history;
