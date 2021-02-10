<h1 align="center">Zwallet API</h1>

<p align="center">
  <a href="https://nodejs.org/" target="blank">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

<p align="center">
  This API is for Zwallet App where an electronic money or digital wallet which can send money to the user's wallet by finding out the contact information of the user who want to send.
</p>

## Requirements

1. [Node Js](https://nodejs.org/en/download/)
2. [Express JS](https://expressjs.com/en/starter/installing.html)
3. [Postman](https://www.getpostman.com/)
4. [Xampp](https://www.apachefriends.org/download.html)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Install dependencies first
   `npm install`
3. Make new file, name it **.env**, set up first [here](#set-nvirontment)
4. Turn on Apache and MYSQL Server using xampp.
5. Create a database
6. Create folder 'uploads' on directory root
7. Open Postman with Postman Desktop App or Postman Web App
8. Choose HTTP Method and enter request url.
9. You can see all the end point [here](#postman-collections)

## Set Environtment

```
PORT = YOUR_SERVER_PORT
BASE_URL = YOUR_SERVER_DOMAIN
DB_HOST = YOUR_DATABASE_HOST
DB_NAME = YOUR_DATABASE_NAME
DB_USER = YOUR_DATABASE_USERNAME
DB_PASSWORD = YOUR_DATABASE_PASSWORD
SECRET_KEY = YOUR_SECRET_KEY_FOR_JWT
EMAIL_URL = YOUR_FRONTEND_DOMAIN
EMAIL_USERNAME = YOUR_EMAIL
EMAIL_PASSWORD = YOUR_EMAIL_PASSWORD
ADMIN = YOUR_ADMIN_ID
```

## Run the App

### Development Mode

```
npm run dev
```

### Production Mode

```
npm run start
```

## Postman Collections

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/8440ce58c5bda5694bb1)

## Related Project

- [Front-End Zwallet](https://github.com/maulanarifai114/frontend-zwallet)

<!-- CONTACT -->

## Contact

- Email - maulanarifai114@gmail.com
- LinkedIn - [@radenmra](https://www.linkedin.com/in/radenmra/)
