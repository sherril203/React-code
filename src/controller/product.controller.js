const product = require("../models/product.model");

const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const accountDAta = req.body;
    await product.create(accountDAta);
    res.status(201).json({
      message: "Product created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const getProducts = async (req, res) => {
  try {
    const getProducts = await product.find().sort({ _id: -1 });
    if (getProducts.length === 0)
      return res.status(404).json({ message: "Data Not Found" });
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const getData = await product.findById(id);
    if (!getData) return res.status(404).json({ message: "Data Not Fount" });
    res.status(201).json(getData);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { query, body } = req;
    const updateAccount = await product.findByIdAndUpdate(query.id, body, {
      new: true,
    });
    if (!updateAccount)
      return res.status(404).json({ message: "Data Not Fount" });
    res.status(201).json({ message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.query;
    const deleteData = await product.findByIdAndDelete(id);
    if (!deleteData) return res.status(404).json({ message: "Data Not Found" });
    res.status(201).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
