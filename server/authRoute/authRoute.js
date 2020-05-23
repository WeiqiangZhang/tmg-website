const express = require('express');
const router = express.Router();
const passport = require('passport');
const {CarouselModel} = require('../model/model');

router.post('/new', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  try {
    const buffer = Buffer.from(req.body.image.split(",")[1], "base64");
    console.log(buffer)
    const newEntry = await CarouselModel.create({ image: buffer, blurb: req.body.blurb, name: req.body.name, role: req.body.role });
    console.log(newEntry)
    return next(null, newEntry);
  } catch (error) {
    console.log(error);
    next(null, error);
  }
});

module.exports = router;
