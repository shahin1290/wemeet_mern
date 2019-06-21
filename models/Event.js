const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
 user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'user'
 },
 title: {
   type: String,
   required: true
 },
 description: {
  type: String,
  required: true
}, 
location: {
  type: String,
  required: true
},
Date: {
  type: String,
  required: true
}

})

module.exports = Event = mongoose.model('event', EventSchema)