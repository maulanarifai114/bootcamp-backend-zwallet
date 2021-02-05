const { getAllUser } = require("./user/getAllUser");
const { search } = require("./user/search");
const { updatePhone } = require("./user/updatePhone");
const { updatePin } = require("./user/updatePin");
const { checkPin } = require("./user/checkPin");

const user = {
  getAllUser,
  search,
  updatePhone,
  updatePin,
  checkPin
};
module.exports = user;
