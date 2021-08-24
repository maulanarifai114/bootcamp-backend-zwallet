const express = require('express');
const router = express.Router();
const routerAuth = require('./auth');
const routerUser = require('./user');
const routerTransfer = require('./transfer');
const routerHistory = require('./history');
const routerAdmin = require('./admin');

router
  .use('/auth', routerAuth)
  .use('/user', routerUser)
  .use('/transfer', routerTransfer)
  .use('/history', routerHistory)
  .use('/admin', routerAdmin)
  .use('/test', (req, res) => res.json({ message: `Test API ${process.env.BASE_URL}` }));
module.exports = router;
