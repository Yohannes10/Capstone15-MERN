const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config.env" });
const PORT = 8080;
const cors = require("cors");

//for connecting frontend and backend
app.use(cors());

//database connnection goes here
require("./db/connection");

//for jwt
app.use(cookieParser());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use(require("./routes/user"));
app.use(require("./routes/stock"));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
