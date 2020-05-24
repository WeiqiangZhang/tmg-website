const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const https = require('https');
const port = 3001;
const directoryToServe = 'client';
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express();

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
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

app.use(express.urlencoded({ extended: true }));
require('./auth/auth');
const route = require('./route/route');
const authRoute = require('./authRoute/authRoute');

app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use('/', route);
app.use('/carousel', authRoute);

const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ca.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ca.key'))
}

https.createServer(httpsOptions, app).listen(port, function() {
  console.log(`Serving the ${directoryToServe}/ directory at https://localhost:${port}`);
});