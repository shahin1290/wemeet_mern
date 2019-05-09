const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
  res.send('Groups route')
})


module.exports = router