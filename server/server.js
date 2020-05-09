const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const connectionString = `mongodb+srv://tmgAdmin:${process.env.MONGO_PASSWORD}@cluster0-4tue2.azure.mongodb.net/tmg?retryWrites=true&w=majority`;
mongoose.set('useCreateIndex', true);
mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true });

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
}

const strategy = new JwtStrategy(opts, (jwt_payload, next) => {
  try {
    return next(null, jwt_payload.user);
  } catch (err) {
    next(err);
  }
});
passport.use(strategy);

require('./auth/auth');
app.use(express.urlencoded({ extended: true }));
const route = require('./route/route');
const authRoute = require('./authRoute/authRoute');

app.use('/', route);
app.use(passport.initialize(), authRoute);

const PORT = process.env.PORT || app.listen(3001);