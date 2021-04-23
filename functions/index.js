const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'pk_test_51IjNquBLGXcdV5UYNE3fCTxEQaKqT4QgbVnOz9nXbrqwmU5eCdxhsAUWhExzywxAyogdFxkAr2PCzw0WHajJebx1009XOzVRuu'
)

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (request, response) => response.status(200).send('hello world'))

app.get('/qazi', (request, response) =>
  response.status(200).send('WHATS UP QAZI!')
)

exports.api = functions.https.onRequest(app)
