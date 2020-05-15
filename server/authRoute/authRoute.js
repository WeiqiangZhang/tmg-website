
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/data', passport.authenticate('jwt', { session : false }), (req, res, next) => {
  res.json({
    message : 'Here is your data',
    user : req.user,
    token : req.query.jwt
  })
});

module.exports = router;
