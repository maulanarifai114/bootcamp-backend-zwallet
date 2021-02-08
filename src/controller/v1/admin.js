const { getAllUserExAdmin } = require('./admin/getAllUserExAdmin')
const { getAllUserExAdminLimit } = require('./admin/getAllUserExAdminLimit')
const { deleteUser } = require('./admin/deleteUser')

const admin = { getAllUserExAdmin, getAllUserExAdminLimit, deleteUser }
module.exports = admin
