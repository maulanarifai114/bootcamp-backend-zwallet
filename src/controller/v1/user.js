const { getAllUser } = require("./user/getAllUser");
const { search } = require("./user/search");
const { updatePhone } = require("./user/updatePhone");

const user = {
  getAllUser,
  search,
  updatePhone,
};
module.exports = user;
