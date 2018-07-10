const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const DB = require('./../Database/mgDB.js')
const dummieData = require('./../client/src/dummie_data.js');

const app = express()
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname + '/../client/dist')))

app.get('/getUserInfo', (req, res) => {
  var keys=  req.url.split('&').map(key => {
   return key.split('=')[1]
  })
  DB.queryUser(keys[0], (err, result) => {
    err ? console.log('db query failed',err) : console.log('database query success');
    res.send(result)
  })
})

app.get('/searchStuff', (req, res) => {
  var searchCondition = req.url.split('=')
  DB.search(searchCondition[1], (error, result) => {
    console.log(result);
    res.send(result.myStuff);
  })
})

app.post('/', (req, res) => {
  DB.addUser(req.body)
  res.end()
})

app.listen(5000, () => console.log('Server started, listening to port 5000'))