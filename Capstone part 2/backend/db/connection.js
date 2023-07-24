const mongoose = require("mongoose");

// Set strictQuery to false to suppress the warning and prepare for the change in Mongoose 7
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://admin:admin10@cluster10.w3qfkfb.mongodb.net/capstone?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connection with db successful");
  })
  .catch((err) => console.log(err));
