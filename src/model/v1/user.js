const { actionQuery } = require("../../helper/v1/help");

const user = {
  getAllUser: (id) => {
    return actionQuery(
      "SELECT * FROM users WHERE (id != 'fb1b35a1-2ec2-4828-bb35-033930554214' AND id != ?)",
      id
    );
  },
  search: (keyword) => {
    return actionQuery(
      `SELECT * FROM users WHERE firstName LIKE '%${keyword}%' OR lastName LIKE '%${keyword}%'`
    );
  },
};
module.exports = user;
