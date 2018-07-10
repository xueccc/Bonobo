const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bonoboApp', (err, result) => {
  console.log('connected to mongoDB');
});

var db = mongoose.connection;
db.on('error', () => console.log('mongodb connection error'));
db.once('open', () => console.log('mongodb connected'));


const Schema = mongoose.Schema;
const userId = Schema.Types.ObjectId;
const itemId = Schema.Types.ObjectId;
const groupId = Schema.Types.ObjectId;



const friendsSchema = new Schema({
  name: String,
  userId: userId
})

const groupsSchema = new Schema({
  name: String,
  groupdId: groupId
})

const itemSchema = new Schema({
  name: String,
  id: itemId,
  name: String,
  catagrory: String,
  description: String,
  photos: [],
  owner_name: String,
  owner_id: String,
  status: {
    available: Boolean,
    barrowed: {
      user_name: String,
      user_id: String,
      start_date: Date,
      return_date: Date,
      purpose: String,
    }
  }
})

const userSchema = new Schema({
  user_name: String,
  user_password: String,
  profile_img: String,
  karma_rating: Number,
  friends: Object,
  groups: Object,
  requests: Object,
  myStuff: Object,
  barrowedStuff: Object
})

const usersData = mongoose.model('usersData', userSchema);


function queryUser(userName, callback) {
  usersData
    .find({user_name: userName},
    (error, results) => {
      error 
      ? callback(error, null)
      : callback(null, results)
    });
}

function addUser(userInfo) {
  let newUser = new usersData(userInfo);
  newUser.save((err) => {
    err ? console.log('enter to database failed', err) :
    console.log('new users saved');
  })
}

function search(itemName, callback) {
  usersData.find( { myStuff: {$elemMatch:{ name : `/${itemName}/` } } }, 
    (error, results) => {
      error
      ? callback(error, null)
      : callback(null, results)
    } )
}

module.exports = {queryUser, addUser, search};


 


