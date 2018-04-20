require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      ctrl = require('./controller')

const app = express()
const {
  SERVER_PORT,
  CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then( db => {
  app.set('db', db)
})

app.use(bodyParser.json())

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`)
})