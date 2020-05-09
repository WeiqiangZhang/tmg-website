
const express = require('express');
const router = express.Router();

router.get('/data', (req, res, next) => {
  res.json({
    message : 'Here is your data',
    user : req.user,
    token : req.query.jwt
  })
});

module.exports = router;
