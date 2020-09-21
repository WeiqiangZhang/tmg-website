if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const https = require('https');
const port = 3001 || process.env.PORT;
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
const carouselRoute = require('./carouselRoute/carouselRoute');
const teamRoute = require('./teamRoute/teamRoute');

app.use(cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use('/', route);
app.use('/carousel', carouselRoute);
app.use('/team', teamRoute);

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${port}`);
  });
} else {
  const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ca.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ca.key'))
  }
  
  https.createServer(httpsOptions, app).listen(port, function() {
    console.log(`Serving the ${directoryToServe}/ directory at https://localhost:${port}`);
  });
}
