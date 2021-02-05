const { getAllUser } = require("./user/getAllUser");
const { search } = require("./user/search");
const { updatePhone } = require("./user/updatePhone");
const { updatePin } = require("./user/updatePin");
const { updatePassword } = require("./user/updatePassword");
const { checkPin } = require("./user/checkPin");
const { checkPassword } = require("./user/checkPassword");

const user = {
  getAllUser,
  search,
  updatePhone,
  updatePin,
  updatePassword,
  checkPin,
  checkPassword,
};
module.exports = user;
