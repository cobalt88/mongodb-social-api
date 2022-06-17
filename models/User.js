const mongoose = require('mongoose');

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const emailSchema = new Schema({
  email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: {
        validator: function(email) {
          return validateEmail(email);
          },
        message: props => `${props.value} is not a valid email address`
      }
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: emailSchema,
  thoughts: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Thought',
  },
  friends: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    }
  ]
});

module.exports = mongoose.model('User', userSchema);