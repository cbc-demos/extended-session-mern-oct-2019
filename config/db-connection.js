const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/friendsdb', {
  useNewUrlParser: true
})

module.exports = mongoose
