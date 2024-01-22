const express = require('express')
const app = express()

const router = require('./routes')

app.use(express.json())

app.use(router)

app.listen(8000, () =>
  console.log('App listening at port http://localhost:8000'),
)
