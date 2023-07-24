let express = require("express");
let router = express.Router();
const {
  add,
  deleteProduct,
  view,
  updateQuantity,
} = require("../controllers/stock");
const auth = require("../middlewares/authentication");

router.use(auth);

router.put("/stock/add", add);

router.get("/stock/view", view);

router.delete("/stock/delete/:productID", deleteProduct);

router.post("/stock/update", updateQuantity);

module.exports = router;
