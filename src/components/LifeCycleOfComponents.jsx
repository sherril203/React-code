import React, { useEffect, useState } from "react";

const Parent = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <FunctionLifeCycle /> : null}
    </div>
  );
};

const FunctionLifeCycle = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vicky");

  //   useEffect(() => {
  //     console.log("useEffect trigger");
  //   });

  //component did mount
  useEffect(() => {
    console.log("component did mount");
  }, []);

  //component did update
  useEffect(() => {
    console.log("component did update");
  }, [count, name]);

  //component will unmount
  useEffect(() => {
    return () => console.log("Component will unmount");
  }, []);

  console.log("component render");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">Count: {count}</p>
      <p>{name}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setName("Vignesh")}>Update</button>
    </div>
  );
};

export default Parent;
