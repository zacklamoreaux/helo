require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      ctrl = require('./controller'),
      session = require('express-session')

const app = express()
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET
} = process.env

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
})

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`)
})