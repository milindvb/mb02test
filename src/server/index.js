const express = require('express')

var port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => res.status(200).send('Hello world!'))

app.listen(port, () => console.log(`Started on ${port}`))
