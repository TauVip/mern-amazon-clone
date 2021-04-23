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

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log({ total })

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd'
  })

  response.status(201).send({ clientSecret: paymentIntent.client_secret })
})

exports.api = functions.https.onRequest(app)
