const { updatePhoto, deletePhoto } = require('../../../model/v1/user')
const helper = require('../../../helper/v1/help')
const fs = require('fs')
const path = require('path')
const update = (req, res) => {
  updatePhoto(
    `${process.env.BASE_URL}/uploads/${req.file.filename}`,
    req.body.id
  )
    .then(() => {
      helper.response(res, 'Photo Updated', 200, null)
    })
    .catch((err) => {
      helper.reject(res, null, 200, err)
    })
}

exports.updatePhoto = (req, res) => {
  deletePhoto(req.body.id)
    .then((result) => {
      const photo = result[0].photo
      if (photo === '') {
        update(req, res)
      } else {
        const array = photo.split('/')
        const last = array.length - 1
        const fileName = array[last]
        fs.unlinkSync(
          `${path.join(__dirname, '../../../../uploads/')}${fileName}`
        )
        update(req, res)
      }
    })
    .catch((err) => {
      helper.reject(res, null, 200, err)
    })
}
