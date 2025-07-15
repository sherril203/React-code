const { Router } = require("express");
const router = Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controller/product.controller");
const { validateToken } = require("../middleware/authToken");

router.use(validateToken);

router
  .post("/", createProduct)
  .get("/", getProducts)
  .get("/:id", getProductById)
  .put("/", updateProductById)
  .delete("/", deleteProductById);

module.exports = router;
