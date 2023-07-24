const User = require("../models/userSchema");
const {
  checkemail,
  checkpassword,
} = require("../middlewares/RegisterInitialChecks");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  if (
    !email ||
    !name ||
    !password ||
    !confirmpassword ||
    checkemail(email) === false ||
    checkpassword(password) === false
  )
    return res.status(400).send({ msg: "Invalid credentials" });

  try {
    const userexists = await User.findOne({ email: email });
    if (userexists) {
      return res.status(400).json({ error: "user already exists" });
    } else if (password !== confirmpassword) {
      return res.status(400).json({ error: "Password didn't match" });
    }
    const user = new User({
      name,
      email,
      password,
      confirmpassword,
      admin: false,
    });
    //middleware goes here to hash the password before storing in database
    user
      .save()
      .then(() => {
        res.send("User registered successfully");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.send("Internal server error");
  }
};
//end of register

exports.login = async (req, res) => {
  payload = {
    email: req.body.email,
    password: req.body.password,
  };
  const token = jwt.sign(JSON.stringify(payload), "jwt-secret", {
    algorithm: "HS256",
  });

  console.log("token in controller - user", token);

  console.log(req.body.email);
  User.find({ email: req.body.email }, (err, data) => {
    console.log("data from controller", data[0]);
    if (!err) {
      res.send({ data: data[0], token: token });
    } else {
      res.send("ERROR:", err);
    }
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).send("User logged out");
};
