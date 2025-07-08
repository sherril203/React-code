import React, { useRef } from "react";

const UncontrolledComponents = () => {
  const email = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value, "email");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Uncontrolled Form</h1>
      <form className="w-[40%] mx-auto my-10" onSubmit={handleSubmit}>
        <input
          placeholder="Enter email"
          type="email"
          required
          name="email"
          ref={email}
          className="w-full p-2 outline-none rounded border border-blue-500"
        />
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const UncontrolledComponents2 = () => {
  const email = useRef();
  const username = useRef();
  const mobileNo = useRef();
  const address = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      email.current.value,
      username.current.value,
      mobileNo.current.value,
      address.current.value,
      "data"
    );
  };

  console.log("render");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">Uncontrolled Form</h1>
      <form className="w-[40%] mx-auto my-10 space-y-4" onSubmit={handleSubmit}>
        <input
          placeholder="Enter email"
          type="email"
          required
          name="email"
          ref={email}
          className="w-full p-2 outline-none rounded border border-blue-500"
        />
        <input
          placeholder="Enter username"
          type="text"
          required
          name="username"
          ref={username}
          className="w-full p-2 outline-none rounded border border-blue-500"
        />
        <input
          placeholder="Enter mobile number"
          type="number"
          required
          name="mobileNo"
          ref={mobileNo}
          className="w-full p-2 outline-none rounded border border-blue-500"
        />
        <textarea
          placeholder="Enter address"
          rows={2}
          required
          name="address"
          ref={address}
          className="w-full p-2 outline-none rounded border border-blue-500"
        ></textarea>
        <div className="flex gap-4 justify-center">
          <button
            type="reset"
            className="px-4 py-2 text-white bg-pink-500 rounded"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-amber-500 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UncontrolledComponents2;
