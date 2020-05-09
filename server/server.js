const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
  audience: 'tmgherd.ca'
}

const strategy = new JwtStrategy(opts, (jwt_payload, next) => {
  const user = null;
  next(null, user);
});
passport.use(strategy);
app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('Hello world');
})

const PORT = process.env.PORT || app.listen(3001);