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
  async deleteProduct(id) {
    const response = await axios.delete(
      `http://localhost:5000/v1/product/?id=${id}`
    );
    return response.data;
  },
  async getProductById(id) {
    const response = await axios.get(`http://localhost:5000/v1/product/${id}`);
    return response.data;
  },
  async updateProduct(id, data) {
    const response = await axios.put(
      `http://localhost:5000/v1/product/?id=${id}`,
      data
    );
    return response.data;
  },
};

export default ProductService;
