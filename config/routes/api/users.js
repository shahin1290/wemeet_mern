const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check');


router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please valid email address').isEmail(),
  check('password', 'Password must be 5 characters or more').isLength({ min: 5 })
], (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send('Users')

})


module.exports = router