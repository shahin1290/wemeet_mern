const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Group = require('../../models/Group')
const { check, validationResult } = require('express-validator/check');


router.get('/me', auth, async(req,res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar'])

    if(!profile){
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }

    res.json(profile)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

router.post('/', [
  auth,
  check('name', 'Name is required').not().isEmpty(),
  check('description', 'Description is required').not().isEmpty(),
  check('location', 'Location is required').not().isEmpty()
], async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {

    const newGroup = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location
    }

    group = new Group(newGroup)

    await group.save()

    res.send(group)

  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }

})



module.exports = router