const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmpassword: {
    type: String,
  },
  admin: {
    type: Boolean,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // this.password = await bcrypt.hash(this.password, 12);
    // this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
  }
  next();
});

//make a collection
const User = mongoose.model("User", userSchema);

module.exports = User;
