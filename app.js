const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/greet/:name', (req, res) => {
  res.send('Hello ' + req.params['name'])
})

app.get('/date', (req, res) => {
  res.send(new Date())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
