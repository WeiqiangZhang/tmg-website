
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

// router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
//   res.json({
//     message : 'Signup successful',
//     user : req.user
//   });
// });

router.get('/', async (req, res, next) => {
  res.send('hello, world!');
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', { session: false }, async (err, user, info) => {
    try {
      if(err){
        return next(err);
      }
      if (!user) { return res.redirect('/login'); }
      req.login(user, { session : false }, async (error) => {
        if (error) { return next(error); }
        const body = { _id : user._id, username : user.username };
        const token = jwt.sign({ user : body }, process.env.SECRET_OR_KEY, {expiresIn: "2h"});
        return res.json({ token });
      });     
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
