import axios from "axios";

const AuthService = {
  async signup(data) {
    const response = await axios.post(
      "http://localhost:5000/v1/auth/signup",
      data
    );
    return response.data;
  },
  async login(data) {
    const response = await axios.post(
      "http://localhost:5000/v1/auth/login",
      data
    );
    return response.data;
  },
};

export default AuthService;
