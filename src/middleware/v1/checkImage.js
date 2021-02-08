const { upload } = require('./multer')
const checkImage = upload.single('photo')
const helper = require('../../helper/v1/help')
const multer = require('multer')
exports.checkImage = (req, res, next) => {
  checkImage(req, res, function (err) {
    if (req.fileValidationError) {
      return helper.reject(res, null, 401, { msg: req.fileValidationError })
    } else if (err instanceof multer.MulterError) {
      return helper.reject(res, null, 401, 'Image must be under 1 MB')
    } else if (err) {
      return helper.reject(res, null, 401, err.message)
    } else {
      next()
    }
  })
}
