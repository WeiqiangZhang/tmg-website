
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  res.json({
    message : 'Signup successful',
    user : req.user
  });
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {     
    try {
      if(err){
        return next(err);
      }
      if (!user) { return res.redirect('/login'); }
      req.login(user, { session : false }, async (error) => {
        if (error) { return next(error); }
        const body = { _id : user._id, username : user.username };
        const token = jwt.sign({ user : body }, process.env.SECRET_OR_KEY);
        return res.json({ token });
      });     
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.get('/data', (req, res, next) => {
  res.json({
    message : 'Here is your data',
    user : req.user,
    token : req.query.jwt
  })
});

module.exports = router;
