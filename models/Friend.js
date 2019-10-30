const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Friend', friendSchema)
