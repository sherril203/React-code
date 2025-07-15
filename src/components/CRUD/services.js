import axios from "axios";

const getLocalStorageItem = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const getAuthorizationConfig = () => {
  const token = getLocalStorageItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const ProductService = {
  async createProduct(data) {
    const response = await axios.post(
      "http://localhost:5000/v1/product",
      data,
      getAuthorizationConfig()
    );
    return response.data;
  },
  async getProducts() {
    const response = await axios.get(
      "http://localhost:5000/v1/product",
      getAuthorizationConfig()
    );
    return response.data;
  },
  async deleteProduct(id) {
    const response = await axios.delete(
      `http://localhost:5000/v1/product/?id=${id}`,
      getAuthorizationConfig()
    );
    return response.data;
  },
  async getProductById(id) {
    const response = await axios.get(
      `http://localhost:5000/v1/product/${id}`,
      getAuthorizationConfig()
    );
    return response.data;
  },
  async updateProduct(id, data) {
    const response = await axios.put(
      `http://localhost:5000/v1/product/?id=${id}`,
      data,
      getAuthorizationConfig()
    );
    return response.data;
  },
};

export default ProductService;
