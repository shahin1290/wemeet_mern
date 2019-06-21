const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Group = require('../../models/Group')
const { check, validationResult } = require('express-validator/check');

router.post('/', [
  auth,
  check('name', 'Name is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('location', 'Location is required').not().isEmpty(),
  check('category', 'Category is required').not().isEmpty()
], async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    const category = await Category.findOne({ name: req.body.category })

    const newGroup = {
      user: req.user.id,
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      category: category._id
    }

    group = new Group(newGroup)

    await group.save()

    res.send(group)

  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
})

router.get('/:category', async(req,res) => {
  try {
    const category = await Category.findOne({name: req.params.category})
    const groups = await Group.find({category: category.id})

    if(!category) {
      return res.status(404).json({ msg: 'Category not found' })
    }
    res.json(groups)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

router.get('/:id', async(req,res) => {
  try {
    const group = await Group.findById(req.params.id)

    if(!group) {
      return res.status(404).json({ msg: 'Group not found' })
    }
    res.json(group)
  } catch (error) {
    console.error(error.message)
    if(error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Group not found' })
    }
    res.status(500).send('Server Error')
  }
})

router.delete('/:id', auth, async(req,res) => {
  try {
    const group = await Group.findById(req.params.id)

    if(!group) {
      return res.status(404).json({ msg: 'Group not found' })
    }

    if(group.user.toString() !== req.user.id){
      return res.status(401).json({ msg: 'User not authorized' })
    }
    
    await group.remove()
    res.json({ msg: 'Group removed' })
  } catch (error) {
    console.error(error.message)
    if(error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Group not found' })
    }
    res.status(500).send('Server Error')
  }
})

router.put(
  '/:name/event',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('location', 'Location is required')
        .not()
        .isEmpty(),
      check('date', 'Event date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      title,
      location,
      description,
      date
    } = req.body;

    const newEvent = {
      title,
      location,
      description,
      date
    };

    try {
      const group = await Group.findOne({ name: req.params.name });

      group.event.unshift(newEvent);

      await group.save();

      res.json(group);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  })
  
module.exports = router