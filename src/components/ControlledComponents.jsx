import { useState } from "react";

const ControlledComponents = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    console.log(event, "event");
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, "email");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Controlled Form</h1>
      <p>{email}</p>
      <form
        className="w-[40%] mx-auto my-10"
        onReset={() => setEmail("")}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Enter email"
          type="email"
          required
          name="email"
          className="w-full p-2 outline-none rounded border border-blue-500"
          value={email}
          onChange={handleChange}
        />
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const ControlledComponents2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    mobileNo: "",
    address: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value, "event");
    const data = { ...formData, [event.target.name]: event.target.value };
    console.log(data, "data");
    setFormData(data);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Controlled Form</h1>
      <form className="w-[40%] mx-auto my-10 space-y-4">
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
          placeholder="Enter username"
          type="text"
          name="username"
          required
          className="w-full p-2 outline-none rounded border border-blue-500"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          placeholder="Enter mobile number"
          type="number"
          name="mobileNo"
          required
          className="w-full p-2 outline-none rounded border border-blue-500"
          value={formData.mobileNo}
          onChange={handleChange}
        />
        <textarea
          placeholder="Enter address"
          required
          rows={2}
          name="address"
          className="w-full p-2 outline-none rounded border border-blue-500"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default ControlledComponents;
