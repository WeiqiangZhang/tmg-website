const express = require('express');
const router = express.Router();
const passport = require('passport');
const {CarouselModel} = require('../model/model');

router.post('/new', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  try {
    const buffer = Buffer.from(req.body.image.split(",")[1], "base64");
    const newEntry = await CarouselModel.create({ image: buffer, blurb: req.body.blurb, name: req.body.name, role: req.body.role });
    return res.json(newEntry);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.post('/update', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  try {
    const buffer = Buffer.from(req.body.image.split(",")[1], "base64");
    const updatedEntry = await CarouselModel.findOneAndUpdate({_id: req.body._id}, 
      {$set:{image: buffer, blurb: req.body.blurb, name: req.body.name, role: req.body.role}}, {new: true, useFindAndModify: false});
    return res.json(updatedEntry);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const allSlides = await CarouselModel.find({});
    return res.json(allSlides);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
