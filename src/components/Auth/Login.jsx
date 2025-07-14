import { useState } from "react";
import { Link } from "react-router";
import AuthService from "./services";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.login(formData);
      console.log(response);
      alert("Login successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Login Form</h1>
      <form className="w-[40%] mx-auto my-10 space-y-4" onSubmit={handleSubmit}>
        <input
          placeholder="Enter email"
          type="email"
          name="email"
          required
          className="w-full p-2 outline-none rounded border border-blue-500"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Enter password"
          type="password"
          name="password"
          required
          className="w-full p-2 outline-none rounded border border-blue-500"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="flex gap-4 justify-center">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Login
          </button>
          <Link
            to={"/auth/signup"}
            className="hover:text-blue-500 hover:underline"
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
