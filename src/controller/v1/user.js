const { getUser } = require("./user/getUser");
const { getAllUser } = require("./user/getAllUser");
const { search } = require("./user/search");
const { updatePhone } = require("./user/updatePhone");
const { updatePin } = require("./user/updatePin");
const { updatePassword } = require("./user/updatePassword");
const { updatePhoto } = require("./user/updatePhoto");
const { checkPin } = require("./user/checkPin");
const { checkPassword } = require("./user/checkPassword");
const { checkImage } = require("../../middleware/v1/checkImage");

const user = {
  getUser,
  getAllUser,
  search,
  updatePhone,
  updatePin,
  updatePassword,
  updatePhoto,
  checkPin,
  checkPassword,
  checkImage,
};
module.exports = user;
