const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
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
  check('location', 'Location is required').not().isEmpty()
], async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { location, bio, facebook, instagram, twitter } = req.body

  //Build profile object
  const profileFields = {}
  profileFields.user = req.user.id
  if(location) profileFields.location = location
  if(bio) profileFields.bio = bio

  //Build social object
  profileFields.social = {}
  if(facebook) profileFields.social.facebook = facebook
  if(twitter) profileFields.social.twitter = twitter 
  if(instagram) profileFields.social.instagram = instagram

  try {
    let profile = await Profile.findOne({ user: req.user.id })

    if(profile){
      profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true})
      return res.json(profile)
    }

    profile = new Profile(profileFields)

    await profile.save()

    res.send(profile)

  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }

})



module.exports = router