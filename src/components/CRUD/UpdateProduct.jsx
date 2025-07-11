import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ProductService from "./services";

const UpdateProduct = () => {
  const { id } = useParams();

  const initialState = {
    name: "",
    price: "",
    model: "",
  };

  const [productForm, setProductForm] = useState(initialState);

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setProductForm(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await ProductService.updateProduct(id, productForm);
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const data = await ProductService.getProductById(id);
        setProductForm(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProductById();
  }, [id]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">Edit Product</h1>
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
          <Link
            to={"/get-product"}
            className="px-4 py-2 text-white bg-gray-500 rounded"
          >
            Go back
          </Link>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded"
          >
            Update
          </button>
          <button
            type="reset"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
