import mongoose from 'mongoose';
import crypto from 'crypto';

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    display_name: {
      type: String,
      trim: true,
      default: null,
    },
    salt: {
      type: String,
      default: null,
    },
    role: {
      type: Number,
      default: 0,
    },
    reset_password_link: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

schema
  .virtual('name')
  .set(function (name) {
    this._name = name;
    if (!this.display_name) {
      this.display_name = name;
    }
  })
  .get(function () {
    return this._name;
  });

schema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

schema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  },
};

const myUserModel = mongoose.model('my_user', schema);

export default myUserModel;
