const express = require('express')
const router = express.Router()
const Category = require('../../models/Category')
const { check, validationResult } = require('express-validator/check');


router.post('/', [
  check('name', 'Name is required').not().isEmpty()
], async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    category = new Category({ name: req.body.name })

    await category.save()

    res.send(category)

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})



router.get('/:id', async(req,res) => {
  try {
    const category = await Category.findOne({name: req.params.category})

    res.json(category)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.get('/', async(req,res) => {
  try {
    const categories = await Category.find()

    res.json(categories)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router