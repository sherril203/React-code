import { useEffect, useState } from "react";
import ProductService from "./services";
import Loader from "../Loader";
import { Link } from "react-router";

function GetProduct() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchProducts = async () => {
    setLoader(true);
    try {
      const data = await ProductService.getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loader) {
    return <Loader />;
  }

  const handleDelete = async (id) => {
    try {
      await ProductService.deleteProduct(id);
      alert("Product deleted successfully!");
      setProducts((prevProduct) =>
        prevProduct.filter((value) => value._id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center p-5 flex-col gap-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Users List</h1>
        <Link
          className="px-4 py-2 rounded bg-blue-500 text-white"
          to={"/create-product"}
        >
          Add product
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((value) => (
          <div
            key={value._id}
            className="p-5 rounded border border-yellow-400 bg-yellow-100 flex flex-col gap-2 shadow"
          >
            <p className="truncate">Name: {value.name}</p>
            <p className="truncate">Price: {value.price}</p>
            <p className="truncate">Model: {value.model}</p>
            <div className="space-x-2">
              <button
                className="px-4 py-2 rounded bg-red-500 text-white text-center"
                onClick={() => handleDelete(value._id)}
              >
                Delete
              </button>
              <Link
                className="px-4 py-2 rounded bg-blue-500 text-white text-center"
                to={`/update-product/${value._id}`}
              >
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetProduct;
