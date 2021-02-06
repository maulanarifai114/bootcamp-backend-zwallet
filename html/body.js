const body = {
  body: (firstName, token, id) => {
    return `
    <div style="border-radius: 10px; background: #6379F4; padding: 30px">
      <h1 style="text-align: center; font-size: 24px; color: #ffffff; line-height: 1em; font-family: Helvetica, sans-serif; margin: 0 0 16px 0">Hi, ${firstName}</h1>
      <p style="text-align: center; font-size: 18px; color: #ffffff; line-height: 1.2em; font-family: Helvetica, sans-serif; margin: 0 0 36px 0">Activate your account with click button below</p>
      <a href="${process.env.EMAIL_URL}/auth/createpin/${token}/${id}" target="_blank" style="text-decoration: none; display: block; background: #ffffff; border-radius: 10px; padding: 20px">
        <div style="color: #6379F4!important; width: 100%; text-align: center; font-size: 16px; line-height: 1em; font-family: Helvetica, sans-serif;">
          Activate Account
        </div>
      </a>
    </div>
    `
  }
}
module.exports = body