const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  }
});

// salt hash function for password (salt at 10), signup not used currently
// UserSchema.pre('save', async function(next){
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;
//   next();
// });

UserSchema.methods.validPassword = async function(password){
  const compare = await bcrypt.compare(password, this.password);
  return compare;
}

const UserModel = mongoose.model('admin', UserSchema);

module.exports = UserModel;