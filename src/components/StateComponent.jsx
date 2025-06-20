import React, { useState } from "react";

const StateComponent = () => {
  const [state, setState] = useState("Vignesh");

  const handleUpdate = () => {
    setState("Vicky");
  };

  console.log("render");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p>{state}</p>
      <button onClick={handleUpdate}>Change</button>
    </div>
  );
};

export default StateComponent;
