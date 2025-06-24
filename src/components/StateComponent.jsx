import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import "./StateComponent.css";

const StateComponent = () => {
  const [state, setName] = useState({
    name: "Vignesh",
    age: "24",
  });

  const [loader, setLoader] = useState(false);

  const [string, setString] = useState("Vicky");

  const handleUpdate = () => {
    console.log("function triggers");
    setLoader(true);
    setString("Vicky");
    setName({
      name: "Vicky",
      age: "25",
    });
  };

  console.log("render", false == "false");

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p>
        <AiFillHome className="example" />

        {state.name}
        {state.age}
      </p>
      <button onClick={handleUpdate}>Change</button>
    </div>
  );
};

export default StateComponent;
