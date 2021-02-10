const nodemailer = require('nodemailer')
const { body } = require('../../../html/body')
const { fonts } = require('../../../html/fontEmail')
const { resetStyle } = require('../../../html/resetStyle')
const { style } = require('../../../html/style')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD // generated ethereal password
  }
})

exports.sendEmail = (firstName, email, token, id) => {
  return new Promise((resolve, reject) => {
    const message = {
      from: `"Zwallet Team" <${process.env.EMAIL_USERNAME}>`,
      to: `${email}`,
      subject: 'Email Activation',
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Zwallet Team</title>
        <style type="text/css">
          ${fonts}
          ${resetStyle}
          ${style}
        </style>
      </head>
      <body>
        ${body(firstName, token, id)}
      </body>
      </html>`
    }
    transporter.sendMail(message, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}
