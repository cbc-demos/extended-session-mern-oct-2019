const express = require('express')
const db = require('../models')

const router = express.Router()

// route to get all friends
router.get('/', (req, res) => {
  // get our data from mongo
  db.Friend.find()
    // send the data in a response
    .then(friends => res.json(friends))
    .catch(error => res.status(500).json(error))
})

// route to delete one friend by its id

module.exports = router
