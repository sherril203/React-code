// GET     http://localhost:5000/product
// GET     http://localhost:5000/product/1
// POST    http://localhost:5000/product
// PUT     http://localhost:5000/product/?id=1
// DELETE  http://localhost:5000/product/?id=1

import { useEffect, useState } from "react";
import ProductService from "./services";

// Query - GET
// Mutation - POST, PUT, DELETE

const CreateProduct = () => {
  const initailState = {
    name: "",
    price: "",
    model: "",
  };

  const [productForm, setProductForm] = useState(initailState);

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setProductForm(initailState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productForm);

    try {
      const response = await ProductService.createProduct(productForm);
      alert("Product created successfully!");
      handleReset();
      console.log(response);
    } catch (error) {
      console.warn("Error creating product:", error);
    }
  };

  useEffect(() => {
    ProductService.getProducts();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">Add Product</h1>
      <form
        className="w-[30%] mx-auto my-10 space-y-4"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div>
          <label htmlFor="productname">Name</label>
          <input
            placeholder="Enter product name"
            type="text"
            required
            name="name"
            value={productForm.name}
            onChange={handleChange}
            className="w-full p-2 outline-none rounded border border-blue-500 mt-2"
          />
        </div>
        <div>
          <label htmlFor="productname">Price</label>
          <input
            placeholder="Enter product price"
            type="number"
            required
            name="price"
            value={productForm.price}
            onChange={handleChange}
            className="w-full p-2 outline-none rounded border border-blue-500 mt-2"
          />
        </div>
        <div>
          <label htmlFor="productname">Model</label>
          <input
            placeholder="Enter product model"
            type="text"
            required
            name="model"
            value={productForm.model}
            onChange={handleChange}
            className="w-full p-2 outline-none rounded border border-blue-500 mt-2"
          />
        </div>

        <div className="flex gap-4 justify-center">
          <button
            type="reset"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
