const express = require('express');
const router = express.Router();
const passport = require('passport');
const {TeamModel} = require('../model/model');

router.post('/new', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  console.log(req.body)
  try {
    const buffer = Buffer.from(req.body.image.split(",")[1], "base64");
    const newEntry = await TeamModel.create({role: req.body.role}, {$push: {members: buffer}});
    return res.json(newEntry);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.delete('/delete', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  try {
    const deletedEntry = await TeamModel.findOneAndDelete({_id: req.body._id}, {useFindAndModify: false});
    return res.json(deletedEntry);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const allMembers = await TeamModel.find({});
    return res.json(allMembers);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
