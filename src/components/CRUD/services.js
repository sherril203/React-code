import axios from "axios";

const ProductService = {
  async createProduct(data) {
    const response = await axios.post("http://localhost:5000/v1/product", data);
    return response.data;
  },
  async getProducts() {
    const response = await axios.get("http://localhost:5000/v1/product");
    return response.data;
  },
};

export default ProductService;
