const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Group = require('../../models/Group')
const { check, validationResult } = require('express-validator/check');

router.get('/categories/:id', async(req,res) => {
  try {
    const category = await Category.findOne({name: req.params.category})

    res.json(category)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

router.get('/categories', async(req,res) => {
  try {
    const categories = await Category.find()

    res.json(categories)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router