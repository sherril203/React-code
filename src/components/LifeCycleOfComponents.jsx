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
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     console.log("useEffect trigger");
  //   });

  const fetchUser = async () => {
    console.log("fetch function triggers");
    setUsers([{ id: 1, name: "Vicky", email: "vicky@gmail.com" }]);
  };

  //component did mount
  useEffect(() => {
    console.log("component did mount");
    fetchUser();
  }, []);

  //component did update
  useEffect(() => {
    console.log("component did update");
  }, [count]);

  //component will unmount
  useEffect(() => {
    console.log("component did update");
    const counter = setInterval(() => {
      console.log("trigger");
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      console.log("Component will unmount");
      clearInterval(counter);
    };
  }, []);

  // console.log("component render", users);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-4xl font-bold">Count: {count}</p>
      {/* <p>{}</p> */}
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default Parent;
