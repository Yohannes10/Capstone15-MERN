// const Joi = require('joi');

const emailvalidator = require("email-validator");
const passwordvalidator = require("password-validator");

exports.checkemail = (email) => {
  return emailvalidator.validate(email);
};

exports.checkpassword = (password) => {
  let schema = new passwordvalidator();
  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(1) // Must have at least 1 digits
    .has()
    .not()
    .spaces(); // Should not have spaces
  return schema.validate(password);
};
