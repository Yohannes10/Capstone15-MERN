const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const authHeader = req.headers[`authorization`];
  console.log("authHeader", authHeader);
  const token = authHeader.split(" ")[1];
  // console.log("auth token", token);
  // const data = jwt.verify(token);
  // console.log("verify in backend", data);
  if (!token) {
    res.status(403).send("Unauthorized user");
  }
  try {
    const data = jwt.verify(token);
    console.log("data in backend", data);
    if (!data) {
      // res.status(403).send("Unauthorized access");
    }
    next();
  } catch (err) {
    // res.status(403).send("Unauthorized user in catch");
  }
  next();
};

module.exports = auth;
