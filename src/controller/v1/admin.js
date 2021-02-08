const { getAllUserExAdmin } = require("./admin/getAllUserExAdmin");
const { deleteUser } = require("./admin/deleteUser");

const admin = { getAllUserExAdmin, deleteUser };
module.exports = admin;
