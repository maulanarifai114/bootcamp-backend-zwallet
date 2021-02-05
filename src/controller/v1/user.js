const { getAllUser } = require("./user/getAllUser");
const { search } = require("./user/search");

const user = {
  getAllUser,
  search,
};
module.exports = user;
