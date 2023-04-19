const express = require('express')
const data = require('./data')
const app = express()

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})