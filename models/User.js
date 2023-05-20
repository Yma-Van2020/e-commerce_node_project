const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide name'],
    minlength: 3,
    maxlength: 50
  },
  email:{
    type: String,
    unique: true,
    required:[true, 'please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'please provide valid email'
    }
  },
  password:{
    type: String,
    required:[true, 'please provide password'],
    minlength: 6
  },
  role:{
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
})

//before saving, hash the password
UserSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

//compare the user input password
UserSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch;
}

module.exports = mongoose.model('User', UserSchema)