
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/model');

// No need for signup right now, may be useful later.
// passport.use('signup', new localStrategy({
//   usernameField : 'username',
//   passwordField : 'password'
// }, async (username, password, done) => {
//     try {
//       const user = await UserModel.create({ username, password });
//       return done(null, user);
//     } catch (error) {
//       done(error);
//     }
// }));

passport.use('login', new localStrategy({
  usernameField : 'username',
  passwordField : 'password'
}, async (username, password, done) => {
  console.log(username);
  console.log(password);
  try {
    const user = await UserModel.findOne({ username: username });
    if(!user){
      return done(null, false, { message : 'Incorrect username.'});
    }
    const validate = await user.validPassword(password);
    if(!validate){
      return done(null, false, { message : 'Incorrect Password'});
    }
    return done(null, user, { message : 'Success!'});
  } catch (error) {
    return done(error);
  }
}));