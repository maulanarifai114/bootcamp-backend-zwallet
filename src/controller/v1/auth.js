const { signup } = require("./auth/signup");
const { login } = require("./auth/login");
const { forgoted } = require("./auth/forgot");

const auth = { signup, login, forgoted };
module.exports = auth;
