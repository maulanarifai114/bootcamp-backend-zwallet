const { signup } = require("./auth/signup");
const { login } = require("./auth/login");
const { forgoted } = require("./auth/forgot");
const { activate } = require("./auth/activate");

const auth = { signup, login, forgoted, activate };
module.exports = auth;
