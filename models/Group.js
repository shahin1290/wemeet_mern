const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
 user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'user'
 },
 name: {
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
 date: {
   type: Date,
   default: Date.now
 },
 category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'category',
  required: true
 },
 event: [
   {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    title: {
      type: String,
      required: true
    },
    description: {
     type: String
   }, 
   location: {
     type: String,
     required: true
   },
   date: {
     type: Date,
     required: true
   }
   }
 ]

})

module.exports = Group = mongoose.model('group', GroupSchema)