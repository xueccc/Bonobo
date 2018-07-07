const express = require('express')
const path = require('path')

const app = express()
console.log(path.join(__dirname + '/../client/dist'))
app.use(express.static(path.join(__dirname + '/../client/dist')))


app.listen(5000, () => console.log('Server started, listening to port 5000'))