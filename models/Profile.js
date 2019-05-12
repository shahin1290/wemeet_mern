const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
 user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'user'
 },
 location: {
   type: String
 },
 bio: {
   type: String
 },
 social: {
   facebook: {
     type: String
   },
   instagram: {
     type: String
   },
   twitter: {
     type: String
   }
 },
 date: {
   type: Date,
   default: Date.now
 }
})


module.exports = Profile = mongoose.model('profile', profileSchema)