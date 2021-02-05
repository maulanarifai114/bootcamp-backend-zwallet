const { signup } = require("./auth/signup");
const { login } = require("./auth/login");

const auth = {
  signup,
  login,
};
module.exports = auth;
