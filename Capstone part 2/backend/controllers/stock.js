/* In this file, you will create all the code needed to perform CRUD operations using Mongoose. */

// add, view, remove
const Product = require("../models/productSchema");

//create a new product
exports.add = function (req, res) {
  console.log("this to add a product, req.body", req.body);
  console.log("this to add a product, req.body.pId", req.body.pId);
  // Create and Save a new product
  let productSchema = new Product({
    productID: req.body.pId,
    productName: req.body.pName,
    productQuantity: req.body.pQuantity,
  });
  const productSave = productSchema.save();
  res.send(productSchema);
};

//find all car
exports.view = function (req, res) {
  console.log("this to view all products, req.body", req.body);

  Product.find(function (err, doc) {
    if (err) {
      console.log(err);
      res.send({ message: "An error occurred while retrieving the Product." });
      console.log("findAll error");
    } else {
      res.send(doc);
      console.log("findAll");
    }
  });
};
//update a product
exports.updateQuantity = function (req, res) {
  //do the calculations here
  console.log("this to update a product, req.body", req.body);
  let query = req.body;
  const { productID } = req.params;
  let filter = { productID: req.body.pId };
  console.log("this to update a product, filter", filter);

  Product.findOneAndUpdate(
    filter,
    {
      productID: query.pId,
      productName: query.pName,
      productQuantity: query.pQuantity,
    },
    //returns new updated data = new:true
    { new: true },
    function (err) {
      if (err) {
        console.log("Something wrong when updating data!");
        res.send("ERROR: Not Updated. " + err);
      }
      res.send({
        message: `Product with id ${productID} updated succefully`,
      });
    }
  );
};

//delete a product
exports.deleteProduct = function (req, res) {
  const { productID } = req.params;
  console.log("delete product req.params", req.params);
  Product.findByIdAndDelete(productID, function (err) {
    if (err) {
      console.log(`ERROR: Product NOT removed. ${err}`);
      res.send(`ERROR: Product NOT removed. ${err}`);
    }
    res.json({
      productID,
      message: `Product with id ${productID} removed succefully`,
    });
  });
};
